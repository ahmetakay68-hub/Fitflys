(() => {
  const scenes = [...document.querySelectorAll('.scene')];
  if (!scenes.length) return;
  const chapters = [...document.querySelectorAll('.chapters a')];
  const previous = document.querySelector('#previous-scene');
  const next = document.querySelector('#next-scene');
  const counter = document.querySelector('#scene-counter');
  const progress = document.querySelector('#chapter-progress');
  const announcement = document.querySelector('#scene-announcement');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobileLayout = window.matchMedia('(max-width: 760px)');
  const scrollHint = document.querySelector('.scroll-instruction');
  function updateScrollHint() {
    const isLast = current === scenes.length - 1;
    scrollHint.querySelector('.scroll-icon').textContent = mobileLayout.matches ? (isLast ? '←' : '→') : '↓';
    scrollHint.querySelector('span:last-child').textContent = mobileLayout.matches
      ? (isLast ? 'Sola kaydır, önceki bölümü keşfet.' : 'Sağa kaydır, yeni bir tarif keşfet.')
      : 'Kaydır, yeni bir tarif keşfet.';
  }
  let current = 0;
  let locked = false;
  let wheelTotal = 0;
  let lastWheel = 0;
  let wheelGestureConsumed = false;
  let unlockTimer;
  let touchStart = null;

  function loadScene(index) {
    scenes[index]?.querySelectorAll('source[data-srcset]').forEach(source => {
      source.srcset = source.dataset.srcset;
      delete source.dataset.srcset;
    });
    scenes[index]?.querySelectorAll('img[data-src]').forEach(image => {
      image.src = image.dataset.src;
      delete image.dataset.src;
    });
  }
  function updateScrollableCopies() {
    scenes.forEach(scene => {
      const copy = scene.querySelector('.scene__copy');
      if (copy.scrollHeight > copy.clientHeight + 2) copy.setAttribute('tabindex', '0');
      else copy.removeAttribute('tabindex');
    });
  }
  function goTo(index, { updateHistory = true, announce = true } = {}) {
    if (index < 0 || index >= scenes.length) return;
    const changed = index !== current;
    const oldScene = scenes[current];
    const moveFocus = changed && oldScene.contains(document.activeElement);
    loadScene(index);
    current = index;
    updateScrollHint();
    // Prefetch one upcoming scene, without downloading the whole collection.
    const activeImage = scenes[index].querySelector('img');
    const warmUpcoming = () => {
      setTimeout(() => {
        if (current === index) loadScene(Math.min(index + 1, scenes.length - 1));
      }, 300);
    };
    if (activeImage.complete) warmUpcoming();
    else activeImage.addEventListener('load', warmUpcoming, { once: true });
    scenes.forEach((scene, i) => {
      scene.classList.toggle('is-active', i === current);
      scene.classList.toggle('is-leaving', changed && scene === oldScene);
      scene.dataset.state = i < current ? 'before' : i > current ? 'after' : 'current';
      scene.inert = i !== current;
      scene.setAttribute('aria-hidden', String(i !== current));
    });
    chapters.forEach((link, i) => {
      link.classList.toggle('is-current', i === current);
      if (i === current) link.setAttribute('aria-current', 'step');
      else link.removeAttribute('aria-current');
    });
    previous.disabled = current === 0;
    next.disabled = current === scenes.length - 1;
    counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(scenes.length).padStart(2, '0');
    progress.style.transform = 'scaleX(' + (current + 1) / scenes.length + ')';
    if (announce) announcement.textContent = (current + 1) + ' / ' + scenes.length + ' — ' + scenes[current].dataset.chapter;
    if (updateHistory && location.hash !== '#' + scenes[current].id) history.pushState(null, '', '#' + scenes[current].id);
    if (moveFocus) {
      const heading = scenes[current].querySelector('h1,h2');
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    } else if (document.activeElement === next && next.disabled) previous.focus();
    else if (document.activeElement === previous && previous.disabled) next.focus();
    updateScrollableCopies();
    if (changed) {
      locked = true;
      clearTimeout(unlockTimer);
      unlockTimer = setTimeout(() => {
        locked = false;
        scenes.forEach(scene => scene.classList.remove('is-leaving'));
      }, reducedMotion.matches ? 100 : 880);
    }
  }
  function canScrollInside(target, delta) {
    const copy = target instanceof Element ? target.closest('.scene__copy') : null;
    if (!copy || copy.scrollHeight <= copy.clientHeight + 2) return false;
    return delta > 0 ? copy.scrollTop + copy.clientHeight < copy.scrollHeight - 2 : copy.scrollTop > 2;
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const index = scenes.findIndex(scene => '#' + scene.id === link.getAttribute('href'));
    if (index < 0) return;
    event.preventDefault();
    goTo(index);
  });
  previous.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  window.addEventListener('wheel', event => {
    if (event.ctrlKey || event.metaKey) return;
    const deltaAxis = mobileLayout.matches ? event.deltaX : event.deltaY;
    if (mobileLayout.matches ? Math.abs(event.deltaX) <= Math.abs(event.deltaY) : Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (!deltaAxis) return;
    if (!mobileLayout.matches && canScrollInside(event.target, deltaAxis)) return;
    event.preventDefault();
    const now = performance.now();
    const pause = now - lastWheel;
    lastWheel = now;
    if (pause > 180) { wheelTotal = 0; wheelGestureConsumed = false; }
    if (locked) { wheelGestureConsumed = true; wheelTotal = 0; return; }
    if (wheelGestureConsumed) { wheelTotal = 0; return; }
    if (Math.sign(wheelTotal) !== Math.sign(deltaAxis)) wheelTotal = 0;
    const delta = deltaAxis * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
    wheelTotal += delta;
    if (Math.abs(wheelTotal) >= 45) {
      const direction = Math.sign(wheelTotal);
      wheelTotal = 0;
      wheelGestureConsumed = true;
      goTo(current + direction);
    }
  }, { passive: false });
  window.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.target.closest('input,textarea,select,[contenteditable="true"]')) return;
    if (event.key === ' ' && event.target.closest('a,button')) return;
    if (mobileLayout.matches && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(event.key)) return;
    const direction = ['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key) ? 1
      : ['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0;
    if (!direction && !['Home', 'End'].includes(event.key)) return;
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(event.key) && canScrollInside(event.target, direction)) return;
    event.preventDefault();
    if (locked) return;
    goTo(event.key === 'Home' ? 0 : event.key === 'End' ? scenes.length - 1 : current + direction);
  });
  const stage = document.querySelector('.stage');
  stage.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) { touchStart = null; return; }
    const touch = event.touches[0];
    touchStart = { x: touch.clientX, y: touch.clientY, target: event.target, nativeScroll: false };
  }, { passive: true });
  stage.addEventListener('touchmove', event => {
    if (!touchStart || event.touches.length !== 1) return;
    const dy = touchStart.y - event.touches[0].clientY;
    const dx = touchStart.x - event.touches[0].clientX;
    if (mobileLayout.matches && Math.abs(dy) >= Math.abs(dx)) return;
    if (Math.abs(dy) >= Math.abs(dx) && canScrollInside(touchStart.target, dy)) touchStart.nativeScroll = true;
    if (!touchStart.nativeScroll) event.preventDefault();
  }, { passive: false });
  stage.addEventListener('touchend', event => {
    if (!touchStart || !event.changedTouches.length) return;
    const touch = event.changedTouches[0];
    const dx = touchStart.x - touch.clientX;
    const dy = touchStart.y - touch.clientY;
    const horizontalSwipe = Math.abs(dx) > Math.abs(dy) * 1.2;
    const delta = mobileLayout.matches ? -dx : Math.abs(dx) > Math.abs(dy) ? dx : dy;
    const nativeScroll = touchStart.nativeScroll;
    touchStart = null;
    if (mobileLayout.matches && !horizontalSwipe) return;
    if (Math.abs(delta) > 55 && !locked && !nativeScroll) goTo(current + Math.sign(delta));
  }, { passive: true });
  stage.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });
  function restoreHash() {
    // Preserve incoming links from the previous site.
    const aliases = { top:'baslangic', showcase:'baslangic', products:'gun-isigi', 'product-gun-isigi':'gun-isigi', 'product-kizil-nar':'kizil-pancar', 'product-yesil-filiz':'yesil-filiz', method:'soguk-sikim', ingredients:'gun-isigi', story:'hikayemiz' };
    const hash = location.hash.slice(1);
    const id = aliases[hash] || hash;
    const index = scenes.findIndex(scene => scene.id === id);
    goTo(index < 0 ? 0 : index, { updateHistory:false, announce:false });
  }
  document.documentElement.classList.replace('no-js', 'has-js');
  scenes.forEach(scene => { scene.style.transition = 'none'; });
  restoreHash();
  requestAnimationFrame(() => requestAnimationFrame(() => scenes.forEach(scene => { scene.style.transition = ''; })));
  window.addEventListener('popstate', restoreHash);
  window.addEventListener('hashchange', restoreHash);
  window.addEventListener('resize', updateScrollableCopies);
  mobileLayout.addEventListener('change', updateScrollHint);
  document.fonts?.ready.then(updateScrollableCopies);
  // Warm only the next photo after the first one is ready.
  const firstImage = document.querySelector('.intro-visual img');
  const warmNext = () => loadScene(Math.min(current + 1, scenes.length - 1));
  if (firstImage.complete) warmNext();
  else firstImage.addEventListener('load', warmNext, { once: true });
})();
