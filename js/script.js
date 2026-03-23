// ===== CUSTOM CURSOR =====
const cursor = document.createElement('div');
const cursorFollower = document.createElement('div');
cursor.className = 'cursor';
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursor);
document.body.appendChild(cursorFollower);

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
    const distX = mouseX - followerX;
    const distY = mouseY - followerY;
    
    followerX += distX / 10;
    followerY += distY / 10;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Expand cursor on hover over clickable elements
setTimeout(() => {
    const hoverElements = document.querySelectorAll('a, button, input, textarea, select, .btn, .card, .project-card, .skill-card, .cert-card, .service-card, .featured-card, .stat-card, .why-card, .achievement-card, .portfolio-item, .faq-question');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('expand');
            cursorFollower.classList.add('expand');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('expand');
            cursorFollower.classList.remove('expand');
        });
    });
}, 1000);

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Theme Toggle
if (themeToggle) {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save theme preference
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== CV DOWNLOAD TRACKING =====
const cvDownloadBtn = document.querySelector('.cv-download-btn');

if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', function(e) {
        // Show download notification
        showDownloadNotification();
        
        // Track download
        console.log('CV Downloaded at:', new Date().toLocaleString());
    });
}

function showDownloadNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <span class="notification-icon">✓</span>
        <span class="notification-text">CV Download Started!</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== CERTIFICATE LIGHTBOX =====
let currentCertIndex = 0;
const certificates = [
    { src: '../images/1.png', title: 'Build Intelligence Agents', org: "Google Agent's Development Kit" },
    { src: '../images/2.png', title: 'Dream Vs Reality: Ai Battle', org: 'Google Developer Group On Campus' },
    { src: '../images/3.png', title: 'Intro Of Machine Learning', org: 'Kaggle' },
    { src: '../images/4.png', title: 'Group Projects Work Appreciation', org: 'Prime Marketing' },
    { src: '../images/5.png', title: 'Building RESTful APIs with Node.js & Express', org: 'Linkedin Learning' },
    { src: '../images/6.png', title: 'AI Foundations for Machine Learning', org: 'Linkedin Learning' },
    { src: '../images/7.jpg', title: 'Intro of Python Tkinter', org: 'My Great Learning' },
    { src: '../images/8.jpg', title: 'Introduction To Python', org: 'Sololearn' },
    { src: '../images/9.jpg', title: 'Python Intermediate', org: 'Sololearn' }
];

function openLightbox(index) {
    currentCertIndex = index;
    const lightbox = document.getElementById('certLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxCounter = document.getElementById('lightboxCounter');
    
    if (lightbox && lightboxImage && certificates[index]) {
        lightboxImage.src = certificates[index].src;
        lightboxCaption.innerHTML = `<strong>${certificates[index].title}</strong><br>${certificates[index].org}`;
        lightboxCounter.textContent = `${index + 1} / ${certificates.length}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('certLightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function navigateCert(direction) {
    currentCertIndex += direction;
    
    // Loop around
    if (currentCertIndex < 0) {
        currentCertIndex = certificates.length - 1;
    } else if (currentCertIndex >= certificates.length) {
        currentCertIndex = 0;
    }
    
    openLightbox(currentCertIndex);
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('certLightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateCert(-1);
        } else if (e.key === 'ArrowRight') {
            navigateCert(1);
        }
    }
});

// Close lightbox when clicking outside image
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('certLightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});

// ===== TYPING EFFECT =====
const typingElement = document.getElementById('typingText');
if (typingElement) {
    const texts = [
        'Web Developer',
        'Python Developer',
        'UI/UX Designer'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.stat-number');

const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
};

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== FAQ ACCORDION =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const formMessage = document.getElementById('formMessage');
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you! Your message has been sent successfully. I will get back to you soon.';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
        
        // In a real application, you would send this data to a server
        console.log('Form Data:', data);
    });
}

// ===== HERO PARTICLES =====
const particlesContainer = document.getElementById('particles');

if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s linear infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS =====
const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-delay-2');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 1s ease, transform 1s ease';
    fadeObserver.observe(el);
});

console.log('Website loaded successfully! Welcome to ADIL Portfolio.');