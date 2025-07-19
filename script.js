// Marketing Site JavaScript

// Handle demo functionality
function handleViewDemo() {
  showDemoLoadingModal();
  
  // Ping the app first to wake it up
  fetch('https://app.rezanto.com/health', { mode: 'no-cors' })
    .catch(() => {}); // Ignore errors, just wake up the server
  
  // Redirect after showing loading for a moment
  setTimeout(() => {
    window.location.href = 'https://app.rezanto.com/login?demo=true';
  }, 1000);
}

// Handle login functionality
function handleLogin() {
  showLoginLoadingModal();
  
  // Ping the app first to wake it up
  fetch('https://app.rezanto.com/health', { mode: 'no-cors' })
    .catch(() => {}); // Ignore errors, just wake up the server
  
  // Redirect after showing loading for a moment
  setTimeout(() => {
    window.location.href = 'https://app.rezanto.com/login';
  }, 1000);
}

function showDemoLoadingModal() {
  const modal = document.createElement('div');
  modal.className = 'demo-loading-modal';
  modal.innerHTML = `
    <div class="demo-loading-content">
      <div class="demo-loading-header">
        <div class="rezanto-logo">Rezanto</div>
        <h3>Launching Demo Environment</h3>
      </div>
      
      <div class="demo-loading-body">
        <div class="loading-animation">
          <div class="loading-spinner"></div>
        </div>
        
        <div class="loading-status">
          <div class="status-text">Initializing secure demo environment...</div>
          <div class="status-subtext">This may take 10-15 seconds for optimal performance</div>
        </div>
        
        <div class="loading-features">
          <div class="feature-item">
            <span class="feature-icon">🔒</span>
            <span>Secure isolated environment</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📊</span>
            <span>Pre-loaded sample data</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span>Full feature access</span>
          </div>
        </div>
      </div>
      
      <div class="demo-loading-footer">
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <div class="progress-text">Preparing your demo experience...</div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Animate progress bar
  const progressFill = modal.querySelector('.progress-fill');
  const statusText = modal.querySelector('.status-text');
  const progressText = modal.querySelector('.progress-text');
  
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    
    progressFill.style.width = progress + '%';
    
    if (progress < 30) {
      statusText.textContent = 'Initializing secure demo environment...';
      progressText.textContent = 'Preparing your demo experience...';
    } else if (progress < 70) {
      statusText.textContent = 'Loading sample data and configurations...';
      progressText.textContent = 'Almost ready...';
    } else {
      statusText.textContent = 'Finalizing demo setup...';
      progressText.textContent = 'Launching in a moment...';
    }
  }, 200);
  
  // Clean up after redirect
  setTimeout(() => {
    clearInterval(progressInterval);
  }, 10000);
}

function showLoginLoadingModal() {
  const modal = document.createElement('div');
  modal.className = 'demo-loading-modal';
  modal.innerHTML = `
    <div class="demo-loading-content">
      <div class="demo-loading-header">
        <div class="rezanto-logo">Rezanto</div>
        <h3>Connecting to Rezanto</h3>
      </div>
      
      <div class="demo-loading-body">
        <div class="loading-animation">
          <div class="loading-spinner"></div>
        </div>
        
        <div class="loading-status">
          <div class="status-text">Preparing your login experience...</div>
          <div class="status-subtext">This may take 10-15 seconds for optimal performance</div>
        </div>
        
      </div>
      
      <div class="demo-loading-footer">
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <div class="progress-text">Connecting to your account...</div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Animate progress bar
  const progressFill = modal.querySelector('.progress-fill');
  const statusText = modal.querySelector('.status-text');
  const progressText = modal.querySelector('.progress-text');
  
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    
    progressFill.style.width = progress + '%';
    
    if (progress < 30) {
      statusText.textContent = 'Preparing your login experience...';
      progressText.textContent = 'Connecting to your account...';
    } else if (progress < 70) {
      statusText.textContent = 'Establishing secure connection...';
      progressText.textContent = 'Almost ready...';
    } else {
      statusText.textContent = 'Finalizing connection...';
      progressText.textContent = 'Redirecting in a moment...';
    }
  }, 200);
  
  // Clean up after redirect
  setTimeout(() => {
    clearInterval(progressInterval);
  }, 10000);
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