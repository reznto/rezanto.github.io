// Marketing Site JavaScript
// Optional: define a scheduling URL to route "Book Demo" clicks to Calendly/Cal.com
window.REZANTO_SCHEDULING_URL = 'https://calendly.com/eddie-rezanto/30min';

// Handle demo functionality
function handleViewDemo() {
  showDemoTransition();

  // Pre-warm the server silently
  fetch('https://app.rezanto.com/health', { mode: 'no-cors' })
    .catch(() => {});

  // Redirect with brief transition
  setTimeout(() => {
    window.location.href = 'https://app.rezanto.com/login?demo=true';
  }, 800);
}

// Handle book demo
function handleBookDemo() {
  trackEvent('book_demo_click', {});
  try {
    const schedulingUrl = (typeof window !== 'undefined') ? window.REZANTO_SCHEDULING_URL : null;
    if (schedulingUrl && /^https?:\/\//i.test(schedulingUrl)) {
      window.location.href = schedulingUrl;
      return;
    }
  } catch (e) {
    // ignore
  }
  const subject = encodeURIComponent('Book a Rezanto Demo');
  const body = encodeURIComponent("Hi, I'd like to book a demo for my building.\n\nCompany: ____\nUnits: ____\nBest times: ____\nNotes: ____");
  window.location.href = `mailto:eddie@rezanto.com?subject=${subject}&body=${body}`;
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

function showDemoTransition() {
  const modal = document.createElement('div');
  modal.className = 'demo-modal-enterprise';
  modal.innerHTML = `
    <div class="demo-modal-content-enterprise">
      <div class="demo-modal-header">
        <h2>Launching Demo</h2>
        <p class="demo-modal-subtitle">Sunset Towers • 200 units, 3 towers</p>
      </div>

      <div class="demo-modal-body">
        <div class="demo-steps-preview">
          <div class="demo-step-item">
            <div class="demo-step-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="14" height="16" rx="2" ry="2"></rect>
                <path d="M9 2h6a2 2 0 0 1 2 2v16"></path>
                <path d="M7 12l2 2 4-4"></path>
              </svg>
            </div>
            <span>Package Logging</span>
          </div>
          <div class="demo-step-item">
            <div class="demo-step-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M6 20a6 6 0 0 1 12 0"></path>
              </svg>
            </div>
            <span>Pickup Processing</span>
          </div>
          <div class="demo-step-item">
            <div class="demo-step-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 3v18h18"></path>
                <path d="M7 14l4-4 3 3 5-6"></path>
              </svg>
            </div>
            <span>Analytics Dashboard</span>
          </div>
        </div>

        <div class="demo-modal-footer">
          <div class="demo-duration-badge">5-7 minute guided tour</div>
          <div class="demo-loading-spinner"></div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Auto-remove after redirect
  setTimeout(() => {
    if (modal.parentNode) {
      modal.remove();
    }
  }, 3000);
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
