// Marketing Site JavaScript

// Handle demo functionality
function handleViewDemo() {
  // Since this is a static site, we can't call the API directly
  // Instead, redirect to the app with demo parameter
  window.location.href = 'https://app.rezanto.com/login?demo=true';
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
  
  // Mobile navigation toggle (if needed in future)
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
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
});

// Contact form handling (if you add a contact form later)
function handleContactForm(formData) {
  // This would send the form data to your backend
  // For now, just redirect to email
  const subject = encodeURIComponent('Rezanto Demo Request');
  const body = encodeURIComponent('Hi, I\'m interested in learning more about Rezanto for my building.');
  window.location.href = `mailto:info@rezanto.com?subject=${subject}&body=${body}`;
}