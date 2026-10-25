/* ==========================================================================
   Page behaviour: pages/anime-list.html
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Get the button and the search section
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const searchSection = document.querySelector('section');

    // Function to handle scroll event
    function handleScroll() {
        // Get the position of the search section
        const searchSectionPosition = searchSection.offsetTop + searchSection.offsetHeight;

        // Show/hide button based on scroll position
        if (window.pageYOffset > searchSectionPosition) {
            scrollToTopBtn.classList.remove('hidden');
            scrollToTopBtn.classList.add('flex');
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
            setTimeout(() => {
                scrollToTopBtn.classList.add('hidden');
                scrollToTopBtn.classList.remove('flex');
            }, 300);
        }
    }

    // Function to scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add click event listener to the button
    scrollToTopBtn.addEventListener('click', scrollToTop);
});
