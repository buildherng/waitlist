// script.js

// Navigation active state management
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const heroCta = document.querySelector('.hero__cta');
    
    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('nav__link--active'));
            
            // Add active class to clicked link
            link.classList.add('nav__link--active');
            
            // Smooth scroll to section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Hero CTA button - scroll to form section
    if (heroCta) {
        heroCta.addEventListener('click', (e) => {
            e.preventDefault();
            const formSection = document.querySelector('#form');
            
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('nav__link--active'));
                const formNavLink = document.querySelector('.nav__link[href="#form"]');
                if (formNavLink) {
                    formNavLink.classList.add('nav__link--active');
                }
            }
        });
    }
    
    // Button icon swap on hover (fallback for browsers with limited CSS support)
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hover-state');
        });
        
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hover-state');
        });
    });
    
    // Mailchimp form validation enhancement
    const form = document.getElementById('mc-embedded-subscribe-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            const email = document.getElementById('mce-EMAIL');
            const fullName = document.getElementById('mce-FUNAME');
            const phone = document.getElementById('mce-PHONE');
            
            // Basic validation
            if (!email.value || !fullName.value || !phone.value) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return false;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return false;
            }
        });
    }
});