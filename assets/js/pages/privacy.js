/* ==========================================================================
   Page behaviour: pages/privacy.html
   ========================================================================== */

// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Toggle function for sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const chevron = section.parentElement.querySelector('.fa-chevron-down');

    section.classList.toggle('hidden');
    chevron.classList.toggle('rotated');
}
