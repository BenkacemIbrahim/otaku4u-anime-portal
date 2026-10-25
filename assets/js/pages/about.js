/* ==========================================================================
   Page behaviour: pages/about.html
   ========================================================================== */

AOS.init({
    duration: 1000, // animation duration
    easing: 'ease-in-out', // animation easing
    once: true, // animation fire only once
});

particlesJS.load('particles-js', 'particles.json');
// Get the scroll to top button and the قصتنا section
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const storySection = document.querySelector('.gradient-text');

// Function to handle scroll event
function handleScroll() {
    // Get the position of the قصتنا section
    const storySectionPosition = storySection.getBoundingClientRect().top;

    // Show button when قصتنا section is passed (negative value means we've scrolled past it)
    if (storySectionPosition < 0) {
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.opacity = '0';
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Add click event to scroll to top
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
