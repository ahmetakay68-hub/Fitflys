// FitFlys Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-[#090a0f]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
      navbar.classList.remove('py-6');
    } else {
      navbar.classList.remove('bg-[#090a0f]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
      navbar.classList.add('py-6');
    }
  });

  // 3. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 4. FAQ Accordion Functionality
  const accordionButtons = document.querySelectorAll('.accordion-btn');
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.accordion-icon');
      const isOpen = content.classList.contains('open');

      // Close all open accordions first
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('open');
      });
      document.querySelectorAll('.accordion-icon').forEach(ic => {
        ic.classList.remove('rotate-180');
      });

      // Toggle current
      if (!isOpen) {
        content.classList.add('open');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // 5. Animated Number Counters
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 1500;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.innerText = Math.ceil(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
        }
      };
      updateCounter();
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          runCounters();
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.getElementById('stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // 6. Contact Form Submission Handling
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('form-name');
      const name = nameInput ? nameInput.value.trim() : 'Ziyaretçimiz';

      // Show toast
      if (toast && toastMessage) {
        toastMessage.innerText = `Teşekkürler ${name}! Mesajınız alındı, en kısa sürede sizinle iletişime geçeceğiz.`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4500);
      }

      contactForm.reset();
    });
  }
});
