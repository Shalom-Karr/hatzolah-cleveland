document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    // FAQ Accordion Logic
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('i');
            const isActive = content.classList.contains('active');

            // Close other open items (Accordion style - optional)
            document.querySelectorAll('.faq-content').forEach(item => {
                if (item !== content && item.classList.contains('active')) {
                    item.classList.remove('active');
                    // Reset other icons
                    const otherIcon = item.previousElementSibling.querySelector('i');
                    if (otherIcon) {
                        otherIcon.classList.remove('rotate-45');
                        otherIcon.parentElement.classList.remove('bg-brand-blue', 'text-white');
                        otherIcon.parentElement.classList.add('bg-brand-light', 'text-brand-blue');
                    }
                }
            });

            // Toggle current
            if (isActive) {
                content.classList.remove('active');
                icon.classList.remove('rotate-45');
                // Revert icon style
                icon.parentElement.classList.remove('bg-brand-blue', 'text-white');
                icon.parentElement.classList.add('bg-brand-light', 'text-brand-blue');
            } else {
                content.classList.add('active');
                icon.classList.add('rotate-45');
                // Active icon style
                icon.parentElement.classList.remove('bg-brand-light', 'text-brand-blue');
                icon.parentElement.classList.add('bg-brand-blue', 'text-white');
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('nav-logo');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2');
            navbar.classList.remove('py-4');
            navbar.classList.add('shadow-md');
            if (navLogo) {
                navLogo.classList.remove('h-12', 'md:h-16');
                navLogo.classList.add('h-10', 'md:h-12');
            }
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2');
            navbar.classList.remove('shadow-md');
            if (navLogo) {
                navLogo.classList.remove('h-10', 'md:h-12');
                navLogo.classList.add('h-12', 'md:h-16');
            }
        }
    });

    // Smooth scroll for anchor links (handling offset for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }

                const headerOffset = 120; // Approx height of sticky headers
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
