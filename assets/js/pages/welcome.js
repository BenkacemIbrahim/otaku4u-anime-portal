/* ==========================================================================
   Page behaviour: pages/welcome.html
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const welcomeSection = document.querySelector('section:first-of-type'); // Gets the first section (welcome section)

    window.addEventListener('scroll', function () {
        // Get the bottom position of the welcome section
        const welcomeSectionBottom = welcomeSection.offsetTop + welcomeSection.offsetHeight;

        // Check if we've scrolled past the welcome section
        if (window.scrollY > welcomeSectionBottom) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });

    // Add click event to scroll to top
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
