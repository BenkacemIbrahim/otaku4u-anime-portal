/* ==========================================================================
   Page behaviour: pages/upcoming.html
   ========================================================================== */


const animeData = {
    'anime1': {
        title: 'اسم الأنمي القادم 1',
        date: '2023-07-01',
        image: '../assets/images/anime-moon-landscape.jpg',
        content: 'وصف مفصل للأنمي القادم 1... هذا هو المحتوى الكامل للأنمي. يمكن أن يتضمن هذا المحتوى فقرات متعددة، صور إضافية، وتفاصيل كاملة عن الموضوع.'
    },
    'anime2': {
        title: 'اسم الأنمي القادم 2',
        date: '2023-07-15',
        image: '../assets/images/anime-moon-landscape.jpg',
        content: 'وصف مفصل للأنمي القادم 2... هذا هو المحتوى الكامل للأنمي. يمكن أن يتضمن هذا المحتوى فقرات متعددة، صور إضافية، وتفاصيل كاملة عن الموضوع.'
    },
    'anime3': {
        title: 'اسم الأنمي القادم 3',
        date: '2023-08-01',
        image: '../assets/images/anime-moon-landscape.jpg',
        content: 'وصف مفصل للأنمي القادم 3... هذا هو المحتوى الكامل للأنمي. يمكن أن يتضمن هذا المحتوى فقرات متعددة، صور إضافية، وتفاصيل كاملة عن الموضوع.'
    }
};

function showAnimeModal(animeId) {
    const modal = document.getElementById('newsModal'); // Reusing the same modal
    const anime = animeData[animeId]; // Fetch anime data based on ID

    // Update modal content
    document.getElementById('modalTitle').textContent = anime.title;
    document.getElementById('modalDate').innerHTML = `<i class="fas fa-calendar-alt mr-2"></i>${anime.date}`;
    document.getElementById('modalImage').src = anime.image;
    document.getElementById('modalContent').textContent = anime.content;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}
function closeModal() {
    const modal = document.getElementById('newsModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}
document.getElementById('newsModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

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
