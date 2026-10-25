/* ==========================================================================
   Page behaviour: pages/anime-details.html
   ========================================================================== */

document.getElementById('infoWatchButton').addEventListener('click', function () {
    alert('بدء المشاهدة من قسم المعلومات!');
    // Here you can add logic to start playing the anime or navigate to a video player page
});

document.getElementById('addToFavoritesButton').addEventListener('click', function () {
    // Toggle heart icon color and animation
    const heartIcon = this.querySelector('.fa-heart');
    heartIcon.classList.toggle('text-primary');

    // Add animation class
    this.classList.add('animate-pulse');
    setTimeout(() => {
        this.classList.remove('animate-pulse');
    }, 1000);

    // Show feedback to user
    alert('تمت الإضافة إلى المفضلة!');
    // Here you can add logic to actually save to favorites
});
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.character-cards-container');
    const scrollButton = document.querySelector('.scroll-button');

    scrollButton.addEventListener('click', function () {
        container.scrollBy({
            left: 300, // Positive value to scroll right
            behavior: 'smooth'
        });
    });

    // Optional: Hide scroll button when at the end
    container.addEventListener('scroll', function () {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            scrollButton.style.display = 'none';
        } else {
            scrollButton.style.display = 'flex';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const heroSection = document.getElementById('heroSection');

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
});
function toggleComments() {
    const hiddenComments = document.getElementById('hiddenComments');
    const showMoreBtn = document.getElementById('showMoreBtn');

    if (hiddenComments.classList.contains('hidden')) {
        hiddenComments.classList.remove('hidden');
        showMoreBtn.innerHTML = `عرض تعليقات أقل <i class="fas fa-chevron-up mr-2"></i>`;
    } else {
        hiddenComments.classList.add('hidden');
        showMoreBtn.innerHTML = `عرض المزيد من التعليقات <i class="fas fa-chevron-down mr-2"></i>`;
    }
}
const trailerButton = document.getElementById('watchTrailerBtn');
const trailerModal = document.getElementById('trailerModal');
const closeTrailerModal = document.getElementById('closeTrailerModal');
const trailerVideo = document.getElementById('trailerVideo');

trailerButton.addEventListener('click', () => {
    // Use the specific video ID from the URL you provided
    trailerVideo.src = 'https://www.youtube.com/embed/eeZ1Ufdra0E?autoplay=1';
    trailerModal.classList.remove('hidden');
});

closeTrailerModal.addEventListener('click', () => {
    trailerVideo.src = '';
    trailerModal.classList.add('hidden');
});

trailerModal.addEventListener('click', (e) => {
    if (e.target === trailerModal) {
        trailerVideo.src = '';
        trailerModal.classList.add('hidden');
    }
});
