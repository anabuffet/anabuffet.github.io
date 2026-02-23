document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '15px 0';
        }
    });

    // Image Fallback to Placeholder
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            // Check if it's already a placeholder to avoid infinite loop
            if (this.classList.contains('img-placeholder')) return;

            // Create a placeholder div
            const placeholder = document.createElement('div');
            placeholder.classList.add('img-placeholder');
            
            // Extract filename for display
            const src = this.getAttribute('src');
            const filename = src.split('/').pop() || src;
            
            placeholder.innerHTML = `<div><i class="fas fa-image fa-2x"></i><br>Coloque aqui:<br>${filename}</div>`;
            
            // Copy relevant classes from original img
            if (this.classList.contains('hero-bg')) {
                placeholder.classList.add('hero-bg');
            }
            
            // Replace img with placeholder
            if (this.parentNode) {
                this.parentNode.replaceChild(placeholder, this);
            }
        };
    });


});
