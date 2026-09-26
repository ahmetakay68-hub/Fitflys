document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('has-js');

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

const flavors = {
  orange: {
    index: '01 / TURUNCU KARIŞIM',
    name: 'Gün Işığı',
    copy: 'Narenciyenin parlak tadı, havuç ve yeşil elmayla dengelenir.',
    target: '#product-gun-isigi',
    linkLabel: "Gün Işığı'nı keşfet",
    garnish: 'assets/hero-ingredients-orange.png',
    highlights: [
      { id: 'orange', label: 'Portakal' },
      { id: 'carrot', label: 'Havuç' },
      { id: 'apple', label: 'Yeşil elma' },
      { id: 'ginger', label: 'Zencefil' }
    ]
  },
  red: {
    index: '02 / KIRMIZI KARIŞIM',
    name: 'Kızıl Nar',
    copy: 'Pancarın topraksı tadı, yeşil elma ve aromatik otlarla dengelenir.',
    target: '#product-kizil-nar',
    linkLabel: "Kızıl Nar'ı keşfet",
    garnish: 'assets/hero-ingredients-red.png',
    highlights: [
      { id: 'beet', label: 'Pancar' },
      { id: 'carrot', label: 'Havuç' },
      { id: 'apple', label: 'Yeşil elma' },
      { id: 'basil', label: 'Fesleğen' }
    ]
  },
  green: {
    index: '03 / YEŞİL KARIŞIM',
    name: 'Yeşil Filiz',
    copy: 'Yeşil sebzelerin bitkisel tadı, elma ve aromatik otlarla dengelenir.',
    target: '#product-yesil-filiz',
    linkLabel: "Yeşil Filiz'i keşfet",
    garnish: 'assets/hero-ingredients-green.png',
    highlights: [
      { id: 'spinach', label: 'Ispanak' },
      { id: 'cucumber', label: 'Salatalık' },
      { id: 'celery', label: 'Kereviz sapı' },
      { id: 'apple', label: 'Yeşil elma' }
    ]
  }
};

const showcase = document.querySelector('#showcase');
const flavorIndex = document.querySelector('#flavor-index');
const flavorName = document.querySelector('#flavor-name');
const flavorCopy = document.querySelector('#flavor-copy');
const heroProductLink = document.querySelector('#hero-product-link');
const heroProductLinkText = document.querySelector('#hero-product-link-text');
const heroGarnish = document.querySelector('#hero-garnish');
const heroIngredients = document.querySelector('#hero-ingredients');
const flavorButtons = [...document.querySelectorAll('[data-select-product]')];
const bottles = [...document.querySelectorAll('[data-visual-product]')];

function ingredientIcon(id) {
  return `<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#ingredient-${id}" /></svg>`;
}

function selectFlavor(flavor) {
  const details = flavors[flavor];
  if (!details || !showcase) return;

  showcase.dataset.theme = flavor;
  if (flavorIndex) flavorIndex.textContent = details.index;
  if (flavorName) flavorName.textContent = details.name;
  if (flavorCopy) flavorCopy.textContent = details.copy;
  if (heroProductLink) heroProductLink.href = details.target;
  if (heroProductLinkText) heroProductLinkText.textContent = details.linkLabel;
  if (heroGarnish && heroGarnish.getAttribute('src') !== details.garnish) {
    heroGarnish.src = details.garnish;
    heroGarnish.classList.remove('is-changing');
    requestAnimationFrame(() => heroGarnish.classList.add('is-changing'));
  }
  if (heroIngredients) {
    heroIngredients.innerHTML = details.highlights
      .map(({ id, label }) => `<li>${ingredientIcon(id)}<span>${label}</span></li>`)
      .join('');
    heroIngredients.setAttribute('aria-label', `${details.name} tarifinin öne çıkan malzemeleri`);
  }
  flavorButtons.forEach((button) => {
    const selected = button.dataset.selectProduct === flavor;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  bottles.forEach((bottle) => {
    const selected = bottle.dataset.visualProduct === flavor;
    bottle.classList.toggle('is-active', selected);
    if (selected) {
      bottle.setAttribute('aria-label', `${details.name} FitFlys içeceği`);
    } else {
      bottle.removeAttribute('aria-label');
    }
  });
}

flavorButtons.forEach((button) => {
  button.addEventListener('click', () => selectFlavor(button.dataset.selectProduct));
});

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Menüyü aç');
  mainNav.classList.remove('is-open');
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü aç' : 'Menüyü kapat');
    mainNav.classList.toggle('is-open', !isOpen);
  });

  mainNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const revealItems = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const productScenes = [...document.querySelectorAll('.product-scene')];
if ('IntersectionObserver' in window) {
  const productMotionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-active', entry.isIntersecting);
      entry.target.querySelectorAll('.reveal').forEach((item) => {
        item.classList.toggle('is-visible', entry.isIntersecting);
      });
    });
  }, { threshold: 0.4, rootMargin: '0px' });

  productScenes.forEach((scene) => productMotionObserver.observe(scene));
} else {
  productScenes.forEach((scene) => scene.classList.add('is-active'));
}

const progressBar = document.querySelector('#scroll-meter-bar');
let scrollPending = false;

function updateScrollMeter() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  if (progressBar) progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
  scrollPending = false;
}

window.addEventListener('scroll', () => {
  if (scrollPending) return;
  scrollPending = true;
  window.requestAnimationFrame(updateScrollMeter);
}, { passive: true });
window.addEventListener('resize', updateScrollMeter, { passive: true });
updateScrollMeter();

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());
