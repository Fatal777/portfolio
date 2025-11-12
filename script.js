// Navigation functionality
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero section
const typingText = document.getElementById('typingText');
const texts = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Explorer'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before starting new text
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
const animateElements = document.querySelectorAll(
    '.about-content, .skill-category, .project-card, .timeline-item, .contact-content'
);

animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Add hover effect to skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.05)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('.project-image .image-placeholder');
        if (img) {
            img.style.transform = 'scale(1.1)';
        }
    });
    card.addEventListener('mouseleave', function() {
        const img = this.querySelector('.project-image .image-placeholder');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// Initialize scroll animations on page load
window.addEventListener('load', () => {
    // Trigger initial check for elements in view
    window.dispatchEvent(new Event('scroll'));
});

// Add dynamic year to footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-content p');
if (footerText) {
    footerText.textContent = footerText.textContent.replace('2024', currentYear);
}

// Preloader (optional - can be added if needed)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle external links
const externalLinks = document.querySelectorAll('a[target="_blank"]');
externalLinks.forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #8b5cf6);
        width: 0%;
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

// Keyboard navigation accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Console message for developers
console.log('%c👋 Hello Developer!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #8b5cf6; font-size: 14px;');
console.log('%cBuilt with ❤️ by Aayush Bharti', 'color: #ec4899; font-size: 12px;');
