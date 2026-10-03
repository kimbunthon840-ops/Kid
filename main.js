/**
 * KIDDLE - Early Childhood Education & Kindergarten Website
 * Interactive Client-Side JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initStatsCounter();
  initClassesFilter();
  initFaqAccordion();
  initAppointmentForm();
  initContactForm();
  initNewsletterForm();
  initModalHandlers();
});

/* ----------------------------------------------------
   1. Navigation & Mobile Menu
   ---------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navLinks = document.querySelector('.nav-links');
  const navDropdowns = document.querySelectorAll('.nav-dropdown');

  // Sticky navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (navToggleBtn && navLinks) {
    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      const icon = navToggleBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !navToggleBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        const icon = navToggleBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // Mobile dropdown toggles
  navDropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-link');
    if (trigger && window.innerWidth <= 900) {
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          dropdown.classList.toggle('open');
        }
      });
    }
  });

  // Highlight active link based on current path
  highlightActiveLink();
}

function highlightActiveLink() {
  let currentPath = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPath && !currentPath.includes('.') && !currentPath.endsWith('/')) {
    currentPath = currentPath + '.html';
  }
  const links = document.querySelectorAll('.nav-link, .nav-dropdown-item');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      const parentDropdown = link.closest('.nav-dropdown');
      if (parentDropdown) {
        const parentLink = parentDropdown.querySelector('.nav-link');
        if (parentLink) parentLink.classList.add('active');
      }
    }
  });
}

/* ----------------------------------------------------
   2. Back To Top Button
   ---------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ----------------------------------------------------
   3. Animated Counters for Stats
   ---------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.hero-stat-num, .counter-value');
  if (!statNumbers.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-count') || counter.textContent.replace(/\D/g, ''), 10);
          if (isNaN(target)) return;

          let count = 0;
          const duration = 1800;
          const stepTime = 20;
          const step = Math.ceil(target / (duration / stepTime));

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              counter.textContent = target + (counter.getAttribute('data-suffix') || '+');
              clearInterval(timer);
            } else {
              counter.textContent = count + (counter.getAttribute('data-suffix') || '+');
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.hero-stats-row') || document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ----------------------------------------------------
   4. Class Filtering
   ---------------------------------------------------- */
function initClassesFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const classCards = document.querySelectorAll('.class-card');

  if (!filterBtns.length || !classCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      classCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ----------------------------------------------------
   5. FAQ Accordion
   ---------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
      }
    });
  });
}

/* ----------------------------------------------------
   6. Appointment / Tour Booking Form
   ---------------------------------------------------- */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const parentName = form.querySelector('[name="parent_name"]')?.value || 'Valued Parent';
    const childName = form.querySelector('[name="child_name"]')?.value || 'your child';
    const tourDate = form.querySelector('[name="tour_date"]')?.value || 'the requested date';
    const program = form.querySelector('[name="program"]')?.value || 'Early Education Program';

    // Open Success Modal
    openModal({
      title: 'Appointment Request Confirmed! 🎉',
      message: `Thank you, <strong>${parentName}</strong>! We have received your tour appointment request for <strong>${childName}</strong> for the <em>${program}</em> on <strong>${tourDate}</strong>. Our admissions officer will call you within 24 hours to confirm your visit time.`,
      iconClass: 'fa-regular fa-calendar-check'
    });

    form.reset();
  });
}

/* ----------------------------------------------------
   7. Contact Form
   ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value || 'there';

    showToast(`Thank you, ${name}! Your message has been sent successfully. We will be in touch shortly!`);
    form.reset();
  });
}

/* ----------------------------------------------------
   8. Newsletter Form
   ---------------------------------------------------- */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (input && input.value) {
        showToast('🎉 Thank you for subscribing to Kiddle Newsletter!');
        input.value = '';
      }
    });
  });
}

/* ----------------------------------------------------
   9. Modal & Toast Utilities
   ---------------------------------------------------- */
function initModalHandlers() {
  const modalOverlay = document.getElementById('appModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalConfirmBtn = document.getElementById('modalConfirmBtn');

  if (!modalOverlay) return;

  const closeModal = () => {
    modalOverlay.classList.remove('active');
  };

  closeBtn?.addEventListener('click', closeModal);
  modalConfirmBtn?.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal({ title, message, iconClass = 'fa-solid fa-check' }) {
  const modalOverlay = document.getElementById('appModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalIcon = document.getElementById('modalIcon');

  if (!modalOverlay) return;

  if (modalTitle) modalTitle.textContent = title;
  if (modalBody) modalBody.innerHTML = message;
  if (modalIcon) modalIcon.innerHTML = `<i class="${iconClass}"></i>`;

  modalOverlay.classList.add('active');
}

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice success';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #2EC4B6; font-size: 1.2rem;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
