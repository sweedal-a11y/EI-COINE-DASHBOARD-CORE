// Email Validation and Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const nextBtn = document.getElementById('nextBtn');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Track user activity
    let userActivity = {
        pageLoadTime: new Date(),
        interactions: []
    };

    // Log page load
    logActivity('page_load');

    // Email validation on input
    emailInput.addEventListener('input', function(e) {
        validateEmail();
        logActivity('email_input', { value: e.target.value.length + ' characters' });
    });

    // Email validation on blur
    emailInput.addEventListener('blur', function() {
        validateEmail();
        logActivity('email_blur');
    });

    // Validate email function
    function validateEmail() {
        const email = emailInput.value.trim();
        
        if (!email) {
            showError('Email is required');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address');
            return false;
        }
        
        hideError();
        return true;
    }

    // Show error message
    function showError(message) {
        emailError.textContent = message;
        emailError.classList.add('show');
        emailInput.classList.add('error');
        nextBtn.disabled = true;
    }

    // Hide error message
    function hideError() {
        emailError.textContent = '';
        emailError.classList.remove('show');
        emailInput.classList.remove('error');
        nextBtn.disabled = false;
    }

    // Form submission
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        logActivity('form_submit_attempt');
        
        // Validate email
        if (!validateEmail()) {
            logActivity('form_validation_failed', { reason: 'invalid_email' });
            return;
        }
        
        // Check reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            alert('Please complete the reCAPTCHA verification');
            logActivity('form_validation_failed', { reason: 'recaptcha_not_completed' });
            return;
        }
        
        // Show loading state
        nextBtn.classList.add('loading');
        logActivity('form_submitted', { email: emailInput.value });
        
        // Simulate API call
        setTimeout(function() {
            console.log('Form submitted successfully!');
            console.log('Email:', emailInput.value);
            console.log('reCAPTCHA Response:', recaptchaResponse);
            console.log('User Activity Log:', userActivity);
            
            // Show success message
            alert('Email verified! Proceeding to next step...');
            
            // Remove loading state
            nextBtn.classList.remove('loading');
            
            logActivity('form_success');
            
            // Redirect to next step (you can change this URL)
            // window.location.href = 'step2.html';
        }, 1500);
    });

    // Activity logging function
    function logActivity(action, data = {}) {
        const activity = {
            timestamp: new Date(),
            action: action,
            ...data
        };
        userActivity.interactions.push(activity);
        console.log('Activity:', activity);
    }

    // Track cursor movement
    let cursorTimer;
    document.addEventListener('mousemove', function(e) {
        clearTimeout(cursorTimer);
        cursorTimer = setTimeout(function() {
            logActivity('cursor_position', {
                x: e.clientX,
                y: e.clientY
            });
        }, 1000);
    });

    // Track clicks
    document.addEventListener('click', function(e) {
        let targetInfo = e.target.tagName;
        if (e.target.id) targetInfo += '#' + e.target.id;
        if (e.target.className) targetInfo += '.' + e.target.className.split(' ')[0];
        
        logActivity('click', {
            target: targetInfo,
            x: e.clientX,
            y: e.clientY
        });
    });

    // Track scroll
    let scrollTimer;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
            logActivity('scroll', {
                scrollY: window.scrollY,
                scrollPercentage: (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100).toFixed(2) + '%'
            });
        }, 500);
    });

    // Track window resize
    window.addEventListener('resize', function() {
        logActivity('resize', {
            width: window.innerWidth,
            height: window.innerHeight
        });
    });

    // Track focus events
    document.querySelectorAll('input, button, a').forEach(function(element) {
        element.addEventListener('focus', function() {
            logActivity('element_focus', { element: this.id || this.className });
        });
    });

    // Track page visibility
    document.addEventListener('visibilitychange', function() {
        logActivity('visibility_change', { hidden: document.hidden });
    });

    // Track time on page before leaving
    window.addEventListener('beforeunload', function() {
        const timeOnPage = (new Date() - userActivity.pageLoadTime) / 1000;
        logActivity('page_unload', { 
            timeOnPage: timeOnPage.toFixed(2) + ' seconds',
            totalInteractions: userActivity.interactions.length
        });
        
        // Send analytics (you can replace this with actual analytics endpoint)
        console.log('===== USER SESSION SUMMARY =====');
        console.log('Total time on page:', timeOnPage.toFixed(2), 'seconds');
        console.log('Total interactions:', userActivity.interactions.length);
        console.log('Full activity log:', userActivity);
    });

    // Login link handler
    const loginLink = document.querySelector('.login-link');
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        logActivity('login_link_clicked');
        alert('Redirecting to login page...');
        // window.location.href = 'login.html';
    });

    // Support link tracking
    const supportLink = document.querySelector('.support-link');
    supportLink.addEventListener('click', function() {
        logActivity('support_link_clicked');
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Enter key on email input
        if (e.key === 'Enter' && document.activeElement === emailInput) {
            e.preventDefault();
            nextBtn.click();
        }
        
        // Tab navigation tracking
        if (e.key === 'Tab') {
            logActivity('keyboard_navigation', { key: 'Tab' });
        }
        
        // Escape key to clear form
        if (e.key === 'Escape') {
            emailInput.value = '';
            hideError();
            logActivity('keyboard_action', { key: 'Escape', action: 'clear_form' });
        }
    });

    // Auto-focus email input
    emailInput.focus();
    logActivity('auto_focus', { element: 'email_input' });

    // Paste event tracking
    emailInput.addEventListener('paste', function() {
        logActivity('paste_event', { element: 'email_input' });
    });

    // Copy event tracking
    emailInput.addEventListener('copy', function() {
        logActivity('copy_event', { element: 'email_input' });
    });

    // Right-click tracking
    document.addEventListener('contextmenu', function(e) {
        logActivity('context_menu', {
            target: e.target.tagName,
            x: e.clientX,
            y: e.clientY
        });
    });

    // Mouse enter/leave card
    const card = document.querySelector('.card');
    card.addEventListener('mouseenter', function() {
        logActivity('card_hover', { action: 'enter' });
    });
    
    card.addEventListener('mouseleave', function() {
        logActivity('card_hover', { action: 'leave' });
    });

    // Button hover tracking
    nextBtn.addEventListener('mouseenter', function() {
        logActivity('button_hover', { button: 'next' });
    });

    // reCAPTCHA callback (if token expires)
    window.recaptchaExpiredCallback = function() {
        logActivity('recaptcha_expired');
        alert('reCAPTCHA expired. Please verify again.');
    };

    // reCAPTCHA success callback
    window.recaptchaCallback = function() {
        logActivity('recaptcha_completed');
        console.log('reCAPTCHA completed successfully!');
    };

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Performance monitoring
    if (window.performance) {
        window.addEventListener('load', function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            logActivity('performance_metrics', {
                pageLoadTime: pageLoadTime + 'ms',
                domContentLoaded: (perfData.domContentLoadedEventEnd - perfData.navigationStart) + 'ms',
                domReady: (perfData.domComplete - perfData.navigationStart) + 'ms'
            });
        });
    }

    // Network status tracking
    window.addEventListener('online', function() {
        logActivity('network_status', { status: 'online' });
    });

    window.addEventListener('offline', function() {
        logActivity('network_status', { status: 'offline' });
        alert('You are currently offline. Please check your internet connection.');
    });

    // Device orientation tracking (for mobile)
    if (window.DeviceOrientationEvent) {
        window.addEventListener('orientationchange', function() {
            logActivity('orientation_change', {
                orientation: screen.orientation ? screen.orientation.type : window.orientation
            });
        });
    }

    // Touch events tracking (for mobile)
    document.addEventListener('touchstart', function(e) {
        logActivity('touch', {
            type: 'touchstart',
            touches: e.touches.length
        });
    });

    // Double-click tracking
    document.addEventListener('dblclick', function(e) {
        logActivity('double_click', {
            target: e.target.tagName,
            x: e.clientX,
            y: e.clientY
        });
    });

    // Form field completion tracking
    emailInput.addEventListener('change', function() {
        logActivity('field_completed', {
            field: 'email',
            hasValue: !!this.value
        });
    });

    // Console welcome message
    console.log('%c🎉 Welcome to Emireq Account Creation!', 'color: #4285f4; font-size: 18px; font-weight: bold;');
    console.log('%cAll user interactions are being tracked for analytics.', 'color: #5f6368; font-size: 12px;');
    console.log('%cUser Activity Object:', 'color: #fbbc05; font-weight: bold;');
    console.log(userActivity);
});

// Additional utility functions

// Email suggestion feature
function suggestEmail(email) {
    const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'company.com'];
    const atIndex = email.indexOf('@');
    
    if (atIndex === -1) return null;
    
    const domain = email.substring(atIndex + 1);
    
    // Simple domain suggestion logic
    for (let commonDomain of commonDomains) {
        if (domain.length > 2 && commonDomain.startsWith(domain)) {
            return email.substring(0, atIndex + 1) + commonDomain;
        }
    }
    
    return null;
}

// Accessibility: Announce to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Add screen reader only styles
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);
