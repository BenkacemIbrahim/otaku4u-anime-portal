/* ==========================================================================
   Page behaviour: pages/news.html
   ========================================================================== */

// Sample news data (you would typically fetch this from a database)
const newsData = {
    'featured': {
        title: 'عنوان الخبر المميز',
        date: 'منذ 3 ساعات',
        image: '../assets/images/anime-moon-landscape.jpg',
        content: 'هذا هو المحتوى الكامل للخبر المميز. يمكنك إضافة نص طويل هنا مع كافة التفاصيل المتعلقة بالخبر. يمكن أن يتضمن هذا المحتوى فقرات متعددة، صور إضافية، وتفاصيل كاملة عن الموضوع. هذا الخبر المميز يحتوي على أحدث التطورات والأحداث المهمة في عالم الأنمي.'
    },
    'news1': {
        title: 'عنوان الخبر 1',
        date: '2023-05-20',
        image: '../assets/images/anime-moon-landscape.jpg',
        content: 'في عالم الأنمي، تمثل القصص والشخصيات جزءًا كبيرًا من تجربة المشاهدة. من خلال الحكايات المعقدة والمشوقة، يتمكن المشاهدون من استكشاف عوالم جديدة ومثيرة. على سبيل المثال، في سلسلة "ناروتو"، نرى رحلة نينجا شاب يسعى لتحقيق حلمه في أن يصبح هوكاجي، وهو أعلى منصب في قريته. تتضمن القصة الكثير من التحديات والصراعات، بما في ذلك المواجهات مع أعداء أقوياء، واكتشاف قوى جديدة، وبناء صداقات قوية. تتناول السلسلة مواضيع عميقة مثل الصداقة، والخيانة، والتضحية، مما يجعلها جذابة لمجموعة واسعة من المشاهدين. بالإضافة إلى ذلك، تتميز الرسوم المتحركة بجودة عالية، مما يزيد من جاذبيتها. هناك أيضًا العديد من الأنميات الأخرى التي تستحق المشاهدة، مثل "هجوم العمالقة" و"مهاجمو الظلام"، حيث كل واحدة منها تقدم تجربة فريدة من نوعها. في "هجوم العمالقة"، تتناول القصة صراع البشرية ضد العمالقة الذين يهددون وجودهم، مما يخلق توترًا دائمًا ويجعل المشاهدين متشوقين لمعرفة ما سيحدث بعد ذلك. علاوة على ذلك، تمثل الأنمي مصدر إلهام للكثير من الفنانين والمبدعين حول العالم. العديد من الرسامين والمصممين يستلهمون من الأنمي لإنشاء أعمال فنية جديدة، سواء كانت رسومات أو تصميمات أو حتى قصص جديدة. في النهاية، يُعتبر الأنمي أكثر من مجرد ترفيه؛ إنه فن يعكس ثقافات متعددة ويجمع بين الناس من مختلف الخلفيات. مع تزايد شعبية الأنمي في السنوات الأخيرة، أصبح له تأثير كبير على صناعة الترفيه العالمية، مما يجعله جزءًا لا يتجزأ من الثقافة المعاصرة.'
    },
    // Add more news items as needed
};

function showModal(newsId) {
    const modal = document.getElementById('newsModal');
    const news = newsData[newsId];

    // Update modal content
    document.getElementById('modalTitle').textContent = news.title;
    document.getElementById('modalDate').innerHTML = `<i class="fas fa-clock mr-2"></i>${news.date}`;
    document.getElementById('modalImage').src = news.image;
    document.getElementById('modalContent').textContent = news.content;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    const modal = document.getElementById('newsModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside
document.getElementById('newsModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});
// Add this event listener to close modal when clicking outside
document.getElementById('newsModal').addEventListener('click', function (e) {
    // Check if the click was on the modal backdrop (not on the modal content)
    if (e.target === this) {
        closeModal();
    }
});

function showModal(newsId) {
    const modal = document.getElementById('newsModal');
    const news = newsData[newsId];

    // Update modal content
    document.getElementById('modalTitle').textContent = news.title;
    document.getElementById('modalDate').innerHTML = `<i class="fas fa-clock mr-2"></i>${news.date}`;
    document.getElementById('modalImage').src = news.image;
    document.getElementById('modalContent').textContent = news.content;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('newsModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable background scrolling
}

// Also add keyboard support to close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the button and the news title
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const newsTitle = document.querySelector('h2'); // This selects the "آخر الأخبار" title

    // Function to handle scroll event
    function handleScroll() {
        // Get the position of the news title
        const newsTitlePosition = newsTitle.offsetTop;

        // Show/hide button based on scroll position
        if (window.pageYOffset > newsTitlePosition) {
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
