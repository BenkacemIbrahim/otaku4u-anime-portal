/* ==========================================================================
   Page behaviour: index.html
   ========================================================================== */

// Intersection Observer for fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                this.slides.forEach(slide => {
                    slide.classList.add('swiper-slide-inactive');
                });
                this.slides[this.activeIndex].classList.remove('swiper-slide-inactive');
                this.slides[this.activeIndex].classList.add('swiper-slide-active');
            },
            slideChangeTransitionStart: function () {
                this.slides.forEach(slide => {
                    slide.classList.add('swiper-slide-inactive');
                    slide.classList.remove('swiper-slide-active');
                });
            },
            slideChangeTransitionEnd: function () {
                this.slides[this.activeIndex].classList.remove('swiper-slide-inactive');
                this.slides[this.activeIndex].classList.add('swiper-slide-active');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const heroSection = document.querySelector('.swiper-container');

    if (scrollToTopBtn && heroSection) {
        window.addEventListener('scroll', function () {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

            if (window.pageYOffset > heroBottom) {
                scrollToTopBtn.classList.add('opacity-100');
                scrollToTopBtn.classList.remove('opacity-0');
            } else {
                scrollToTopBtn.classList.add('opacity-0');
                scrollToTopBtn.classList.remove('opacity-100');
            }
        });

        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.error('Scroll to top button or hero section not found');
    }
});
function toggleCategories() {
    const additionalCategories = document.getElementById('additionalCategories');
    const viewAllBtn = document.getElementById('viewAllBtn');

    if (additionalCategories.classList.contains('hidden')) {
        // Show additional categories
        additionalCategories.classList.remove('hidden');
        viewAllBtn.textContent = 'عرض أقل';

        // Smooth scroll to newly revealed categories
        additionalCategories.scrollIntoView({ behavior: 'smooth' });

        // Add animation to new categories
        additionalCategories.querySelectorAll('.category-card').forEach((card, index) => {
            card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        });
    } else {
        // Hide additional categories
        additionalCategories.classList.add('hidden');
        viewAllBtn.textContent = 'عرض جميع التصنيفات';

        // Smooth scroll back to top of categories section
        document.getElementById('categoriesContainer').scrollIntoView({ behavior: 'smooth' });
    }
}
