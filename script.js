// Menu Toggle Functionality
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const fullscreenMenu = document.getElementById('fullscreenMenu');
const menuItems = document.querySelectorAll('.menu-items a');

// Video Hero Play Button
const playButton = document.querySelector('.play-button');
if (playButton) {
    playButton.addEventListener('click', function() {
        const video = document.querySelector('.video-placeholder video');
        if (video) {
            if (video.paused) {
                video.play();
                video.muted = false; // Unmute when user clicks
            } else {
                video.pause();
            }
        }
    });
}

// Open menu
menuToggle.addEventListener('click', () => {
    fullscreenMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close menu
closeMenu.addEventListener('click', () => {
    fullscreenMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking on a menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe production cards and service items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.production-card, .service-item, .featured-container');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('Täname sõnumi eest! Võtame teiega peagi ühendust.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Production card hover effect with tilt
document.querySelectorAll('.production-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const definitionWords = document.querySelectorAll('.definition-word');
    if (definitionWords.length > 0) {
        setTimeout(() => {
            definitionWords.forEach((word, index) => {
                setTimeout(() => {
                    const text = word.textContent;
                    typeWriter(word, text, 150);
                }, index * 800);
            });
        }, 500);
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = 'var(--black)';
        navbar.style.backdropFilter = 'none';
    }
});

// Add click animation to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Video placeholder click handler removed - using direct onclick handlers now

// Production card video player
document.querySelectorAll('.production-card[data-video]').forEach(card => {
    card.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        if (videoSrc) {
            // Create fullscreen video player
            const videoPlayer = document.createElement('div');
            videoPlayer.className = 'fullscreen-video-player';
            videoPlayer.innerHTML = `
                <div class="video-player-container">
                    <button class="close-video">✕</button>
                    <video controls autoplay>
                        <source src="${videoSrc}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `;
            document.body.appendChild(videoPlayer);
            document.body.style.overflow = 'hidden';
            
            // Close video handler
            const closeBtn = videoPlayer.querySelector('.close-video');
            closeBtn.addEventListener('click', function() {
                videoPlayer.remove();
                document.body.style.overflow = 'auto';
            });
            
            // Close on background click
            videoPlayer.addEventListener('click', function(e) {
                if (e.target === videoPlayer) {
                    videoPlayer.remove();
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});

console.log('🎬 Videograafia Veebileht Laetud!');