// Marketing Site JavaScript

// Handle book demo
function handleBookDemo() {
  trackEvent('book_demo_click', {});
  const subject = encodeURIComponent('Book a Rezanto Demo');
  const body = encodeURIComponent("Hi, I'd like to book a demo for my building.\n\nCompany: ____\nUnits: ____\nBest times: ____\nNotes: ____");
  window.location.href = `mailto:info@rezanto.com?subject=${subject}&body=${body}`;
}

// Handle login functionality
function handleLogin() {
  showLoginTransition();

  // Pre-warm the server silently
  fetch('https://app.rezanto.com/health', { mode: 'no-cors' })
    .catch(() => {});

  // Redirect with brief transition
  setTimeout(() => {
    window.location.href = 'https://app.rezanto.com/login';
  }, 800);
}

function showLoginTransition() {
  const overlay = document.createElement('div');
  overlay.className = 'demo-transition-overlay';
  overlay.innerHTML = `
    <div class="demo-transition-content">
      <div class="rezanto-logo-large">Rezanto</div>
      <div class="demo-transition-text">Connecting to Rezanto</div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Auto-remove after redirect
  setTimeout(() => {
    if (overlay.parentNode) {
      overlay.remove();
    }
  }, 2000);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links with hash
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('nav-open');
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('nav-open');
      });
    });
  }
});

// Optional: Add some simple analytics tracking
function trackEvent(eventName, eventData = {}) {
  // Google Analytics (if implemented)
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
  
  // Console log for debugging
  console.log('Event tracked:', eventName, eventData);
}

// Track CTA button clicks
document.addEventListener('click', function(e) {
  if (e.target.matches('.btn-primary')) {
    trackEvent('cta_click', {
      button_type: 'primary',
      button_text: e.target.textContent.trim()
    });
  }
  
  if (e.target.matches('.btn-secondary')) {
    trackEvent('cta_click', {
      button_type: 'secondary', 
      button_text: e.target.textContent.trim()
    });
  }
  
  if (e.target.matches('.btn-pricing')) {
    trackEvent('pricing_click', {
      plan: e.target.closest('.pricing-card').querySelector('h3').textContent.trim()
    });
  }
  
  if (e.target.matches('.btn-demo')) {
    trackEvent('cta_click', {
      button_type: 'demo',
      location: (e.target.closest('header') && 'header') || (e.target.closest('.hero') && 'hero') || 'other'
    });
  }
});

// Contact form handling (if you add a contact form later)
function handleContactForm(formData) {
  // This would send the form data to your backend
  // For now, just redirect to email
  const subject = encodeURIComponent('Rezanto Demo Request');
  const body = encodeURIComponent('Hi, I\'m interested in learning more about Rezanto for my building.');
  window.location.href = `mailto:info@rezanto.com?subject=${subject}&body=${body}`;
}
