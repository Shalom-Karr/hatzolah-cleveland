// Shared Header & Footer Components
const HEADER_HTML = `
<!-- Emergency Top Bar -->
<div class="bg-brand-red text-white py-2 px-4 text-center font-bold sticky top-0 z-50 shadow-md">
    <div class="container mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-8 text-sm md:text-base">
        <a href="tel:2168881818" class="hover:underline flex items-center gap-2">
            <i class="fas fa-phone-alt animate-pulse"></i> EMERGENCY: 216-888-1818
        </a>
        <span class="hidden md:inline text-white/30">|</span>
        <a href="tel:911" class="hover:underline flex items-center gap-2">
            <i class="fas fa-ambulance"></i> 911 Backup
        </a>
        <span class="hidden lg:inline text-white/30">|</span>
        <a href="tel:8002221222" class="hover:underline flex items-center gap-2">
            <i class="fas fa-vial"></i> Poison Control: 800-222-1222
        </a>
    </div>
</div>

<!-- Navigation -->
<nav class="bg-white shadow-sm sticky top-[40px] z-40 transition-all duration-300" id="navbar">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-3 group">
            <img src="hatzalah-logo.png" alt="Hatzalah Cleveland Logo" class="h-12 md:h-16 w-auto transition-all duration-300 logo-pulse logo-hover-effect" id="nav-logo">
            <span class="text-xl md:text-2xl font-bold text-brand-dark hidden sm:inline group-hover:text-brand-blue transition-colors">Hatzalah Cleveland</span>
        </a>
        
        <div class="hidden md:flex items-center gap-6 font-medium text-gray-600" id="desktop-nav">
            <a href="index.html#about" class="hover:text-brand-blue transition nav-link">About</a>
            <a href="index.html#services" class="hover:text-brand-blue transition nav-link">Services</a>
            <a href="index.html#faq" class="hover:text-brand-blue transition nav-link">FAQ</a>
            <a href="contact-us.html" class="hover:text-brand-blue transition nav-link">Contact</a>
            <div class="flex items-center gap-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOdMVD9wFs-TLTkjCneFNKQGpzFR-fC8jvzWP8V-mnJ0eSog/viewform" target="_blank" class="border-2 border-brand-blue text-brand-blue px-5 py-2 rounded-full hover:bg-brand-blue hover:text-white transition shadow-sm font-semibold">
                    Apply
                </a>
                <a href="donate.html" class="bg-brand-blue text-white px-6 py-2 rounded-full hover:bg-brand-dark transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                    Donate <i class="fas fa-heart ml-1 text-red-300"></i>
                </a>
            </div>
        </div>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden text-2xl text-gray-600 focus:outline-none">
            <i class="fas fa-bars"></i>
        </button>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg absolute w-full z-50">
        <div class="flex items-center gap-2 mb-2 border-b pb-2">
            <img src="hatzalah-logo.png" alt="Logo" class="h-8 w-auto">
            <span class="font-bold text-brand-dark">Hatzalah Cleveland</span>
        </div>
        <a href="index.html#about" class="block text-gray-600 hover:text-brand-blue font-medium nav-link">About</a>
        <a href="index.html#services" class="block text-gray-600 hover:text-brand-blue nav-link">Services</a>
        <a href="index.html#faq" class="block text-gray-600 hover:text-brand-blue nav-link">FAQ</a>
        <a href="contact-us.html" class="block text-gray-600 hover:text-brand-blue nav-link">Contact</a>
        <div class="grid grid-cols-2 gap-3 mt-2">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOdMVD9wFs-TLTkjCneFNKQGpzFR-fC8jvzWP8V-mnJ0eSog/viewform" target="_blank" class="block border-2 border-brand-blue text-brand-blue px-4 py-2 rounded text-center font-semibold">Apply</a>
            <a href="donate.html" class="block bg-brand-blue text-white px-4 py-2 rounded text-center font-semibold shadow">Donate <i class="fas fa-heart ml-1 text-red-300"></i></a>
        </div>
    </div>
</nav>
`;

const FOOTER_HTML = `
<footer id="contact" class="bg-brand-dark text-white py-12">
    <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <div class="flex items-center gap-4 mb-6">
                    <img src="hatzalah-logo.png" alt="Hatzalah Cleveland" class="h-16 w-auto bg-white p-1 rounded logo-pulse">
                    <h3 class="text-2xl font-bold">Hatzalah Cleveland</h3>
                </div>
                <p class="text-gray-400 max-w-sm">
                    Dedicated to saving lives through rapid community response. Providing peace of mind and professional care when seconds count.
                </p>
                <div class="mt-6 text-center text-gray-500 text-sm md:text-left">
                    &copy; 2026 Hatzalah Cleveland. All rights reserved.
                </div>
            </div>
            
            <div>
                <h4 class="text-lg font-semibold mb-4 text-brand-blue">Contact</h4>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-center gap-2"><i class="fas fa-phone fa-fw"></i> Non-Emergency: 216-353-6613</li>
                    <li class="flex items-center gap-2"><i class="fas fa-envelope fa-fw"></i> info@hatzalahcleveland.org</li>
                    <li class="flex items-start gap-2">
                        <i class="fas fa-map-marker-alt fa-fw mt-1"></i> 
                        <span>Serving Beachwood, Cleveland Heights & University Heights, OH</span>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold mb-4 text-brand-blue">Connect</h4>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-center gap-2">
                        <i class="fab fa-google fa-fw"></i> 
                        <a href="https://share.google/sdCEMNgo9HIjXfhTt" target="_blank" class="hover:text-white transition underline decoration-brand-blue/30 underline-offset-4">Google Profile</a>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="fab fa-facebook fa-fw"></i> 
                        <a href="https://www.facebook.com/HatzalahCtown" target="_blank" class="hover:text-white transition underline decoration-brand-blue/30 underline-offset-4">Facebook</a>
                    </li>
                    <li class="flex items-center gap-2">
                        <i class="fab fa-linkedin fa-fw"></i> 
                        <a href="https://www.linkedin.com/company/hatzalah-cleveland-ems" target="_blank" class="hover:text-white transition underline decoration-brand-blue/30 underline-offset-4">LinkedIn</a>
                    </li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold mb-4 text-brand-blue">Quick Links</h4>
                <ul class="space-y-2 text-gray-400">
                    <li><a href="donate.html" class="hover:text-white transition">Donate</a></li>
                    <li><a href="contact-us.html" class="hover:text-white transition">Contact Us</a></li>
                    <li><a href="privacy-policy.html" class="hover:text-white transition">Privacy Policy</a></li>
                    <li><a href="terms-of-service.html" class="hover:text-white transition">Terms of Service</a></li>
                    <li><a href="communications-consent.html" class="hover:text-white transition">Consent Form</a></li>
                </ul>
            </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-white/5 w-full my-12"></div>
        
        <!-- Centered Built By Section -->
        <div class="flex justify-center items-center w-full">
            <a href="https://shalomkarr.pages.dev" target="_blank" class="group relative flex items-center justify-center gap-3 px-6 py-2.5 w-full max-w-[300px] md:w-auto bg-[#1a2c3b] hover:bg-[#233545] rounded-full border border-white/5 hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] active:scale-95">
                <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-gold/10 to-transparent"></span>
                <span class="relative text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 group-hover:text-gold transition-colors font-bold">Built By</span>
                <div class="relative flex items-center gap-2 border-l border-white/10 pl-3">
                    <span class="font-serif font-bold text-slate-300 group-hover:text-white transition-colors text-base">Shalom Karr</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gold opacity-70 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
            </a>
        </div>
    </div>
</footer>
`;

// Back to Top Button HTML
const BACK_TO_TOP_HTML = `
<button id="back-to-top" class="fixed bottom-8 right-8 bg-brand-blue text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer opacity-0 invisible transition-all duration-300 hover:bg-brand-dark z-50">
    <i class="fas fa-arrow-up"></i>
</button>
`;

// Mobile CTA Bar HTML
const MOBILE_CTA_HTML = `
<div id="mobile-cta" class="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-[0_-4px_12px_rgba(0,0,0,0.08)] p-3 flex items-stretch justify-center gap-3 z-40">
    <a href="tel:2168881818" class="flex-1 bg-brand-red text-white py-3 rounded-lg font-bold text-sm shadow-md hover:bg-red-700 transition flex items-center justify-center gap-2 text-center">
        <i class="fas fa-phone-alt"></i> EMERGENCY
    </a>
    <a href="donate.html" class="flex-1 bg-brand-blue text-white py-3 rounded-lg font-bold text-sm shadow-md hover:bg-brand-dark transition flex items-center justify-center gap-2 text-center">
         <i class="fas fa-heart text-red-300"></i> DONATE
    </a>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Inject Shared Header & Footer
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.innerHTML = HEADER_HTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

    // Inject Back to Top Button
    document.body.insertAdjacentHTML('beforeend', BACK_TO_TOP_HTML);
    
    // Inject Mobile CTA Bar
    document.body.insertAdjacentHTML('beforeend', MOBILE_CTA_HTML);
    document.body.classList.add('has-mobile-cta');

    // 2. Initialize Interactions
    initInteractions();

    // 3. Initialize Animations
    initAnimations();
});

function initInteractions() {
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
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        // Navbar styling
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

        // Back to Top Button visibility
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
        }

        // Active Nav Highlighting
        highlightActiveNav();
    });

    // Back to Top Click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"], a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // If it's a link to another page (not starting with # and not current page), let it navigate naturally
            const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('Hatzalah/'); // Adjust for local path if needed
            
            if (href.startsWith('index.html#') && !isIndex) {
                // Navigate to index page with hash
                return; 
            }

            let targetId = href;
            if (href.startsWith('index.html#')) {
                targetId = href.replace('index.html', '');
            }

            if (targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }

                const headerOffset = 120; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Set initial active state based on URL
    setActiveNavFromUrl();
}

function initAnimations() {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
    
    // Also target existing cards if they don't have the class yet
    document.querySelectorAll('.bg-brand-red, .bg-brand-dark, .bg-white.shadow-2xl').forEach(el => {
         if (!el.classList.contains('animate-on-scroll') && !el.closest('nav') && !el.closest('footer')) {
             el.classList.add('animate-on-scroll', 'opacity-0', 'translate-y-4', 'transition-all', 'duration-700', 'ease-out');
             observer.observe(el);
         }
    });
}

function setActiveNavFromUrl() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check: if current path ends with the link's filename
        if (href.includes('.html') && currentPath.endsWith(href)) {
             link.classList.add('text-brand-blue', 'font-bold');
        }
    });
}

function highlightActiveNav() {
    // Only works on index page for the hash sections
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('Hatzalah/');
    if (!isIndex) return;

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#desktop-nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-brand-blue', 'font-bold');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('text-brand-blue', 'font-bold');
        }
    });
}

