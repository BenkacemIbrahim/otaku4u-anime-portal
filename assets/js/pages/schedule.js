/* ==========================================================================
   Page behaviour: pages/schedule.html
   ========================================================================== */


document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate and display countdown
    function updateCountdown() {
        // Get all countdown elements
        const countdownElements = document.querySelectorAll('.countdown');

        countdownElements.forEach(element => {
            // Get air date and time from data attributes
            const airDate = element.dataset.airDate;
            const airTime = element.dataset.airTime;

            // Combine date and time
            const airDateTime = new Date(`${airDate}T${airTime}`);
            const now = new Date();

            // Calculate difference
            const diff = airDateTime - now;

            // If the air date has passed
            if (diff < 0) {
                element.querySelector('.countdown-text').textContent = 'تم العرض';
                element.classList.add('bg-gray-700');
                return;
            }

            // Calculate days, hours, minutes, seconds
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            // Format the countdown text in Arabic
            let countdownText = '';

            if (days > 0) {
                countdownText += `${days} يوم `;
            }
            if (hours > 0 || days > 0) {
                countdownText += `${hours} ساعة `;
            }
            if (minutes > 0 || hours > 0 || days > 0) {
                countdownText += `${minutes} دقيقة `;
            }
            countdownText += `${seconds} ثانية`;

            // Update the countdown text
            element.querySelector('.countdown-text').textContent = countdownText;

            // Add visual indicators based on time remaining
            if (diff < 24 * 60 * 60 * 1000) { // Less than 24 hours
                element.classList.add('bg-primary', 'bg-opacity-20');
            } else if (diff < 3 * 24 * 60 * 60 * 1000) { // Less than 3 days
                element.classList.add('bg-secondary', 'bg-opacity-20');
            }
        });
    }

    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Function to format numbers in Arabic
    function toArabicNumerals(number) {
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return number.toString().split('').map(digit => arabicNumbers[digit]).join('');
    }

    // Add this to handle multiple anime cards
    function createAnimeCard(animeData) {
        const template = `
        <div class="anime-card relative overflow-hidden rounded-lg shadow-lg group">
            <div class="relative">
                <img src="${animeData.image}" alt="${animeData.title}" class="w-full object-cover h-[250px]">
                    ${animeData.isNew ? '<div class="absolute top-0 right-0 bg-primary px-3 py-1 m-2 rounded-full text-sm">جديد</div>' : ''}
            </div>
            <div class="p-4">
                <h4 class="text-white text-lg font-semibold">${animeData.title}</h4>
                <div class="flex items-center gap-2 mt-2">
                    <i class="fas fa-clock text-primary"></i>
                    <p class="text-gray-300 text-sm">الحلقة: ${animeData.episode}</p>
                </div>
                <div class="flex items-center gap-2 mt-1">
                    <i class="fas fa-calendar text-primary"></i>
                    <p class="text-gray-300 text-sm">تاريخ العرض: ${animeData.airDate}</p>
                </div>
                <div class="flex items-center gap-2 mt-1">
                    <i class="fas fa-hourglass-half text-primary"></i>
                    <p class="text-gray-300 text-sm">الوقت: ${animeData.airTime}</p>
                </div>
                <div class="countdown mt-3 p-2 rounded-lg text-center"
                    data-air-date="${animeData.airDate}"
                    data-air-time="${animeData.airTime}">
                    <p class="text-primary font-semibold">متبقي للعرض</p>
                    <p class="text-lg countdown-text"></p>
                </div>
            </div>
        </div>
`;
        return template;
    }

    // Example usage:
    const animeList = [
        {
            title: "اسم الأنمي 1",
            episode: 1,
            airDate: "2025-11-10",
            airTime: "22:00",
            image: "../assets/images/anime-moon-landscape.jpg",
            isNew: true
        },
    ];

    // Render anime cards
    const container = document.querySelector('.grid');
    animeList.forEach(anime => {
        container.innerHTML += createAnimeCard(anime);
    });
});
// Add this inside your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {

    // Get the search section and scroll button
    const searchSection = document.querySelector('.mb-8.bg-gray-900\\/50');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Function to handle scroll
    function handleScroll() {
        // Get the bottom position of the search section
        const searchSectionBottom = searchSection.offsetTop + searchSection.offsetHeight;

        // Show button when user scrolls past the search section
        if (window.pageYOffset > searchSectionBottom) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add click event to scroll to top
    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
