/* ==========================================================================
   Shared header behaviour: mobile menu, modals, dark mode and signed-in state.
   Loaded on every page, after the header markup.
   ========================================================================== */

/* Mobile menu ------------------------------------------------------------- */

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    setTimeout(() => {
        mobileMenu.classList.toggle('opacity-0');
    }, 20);
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
closeMobileMenu.addEventListener('click', toggleMobileMenu);

/* Modals ------------------------------------------------------------------ */

function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
    setTimeout(() => {
        modal.classList.toggle('opacity-0');
    }, 20);
}

// Search
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearchModal = document.getElementById('closeSearchModal');

searchBtn.addEventListener('click', () => toggleModal('searchModal'));
closeSearchModal.addEventListener('click', () => toggleModal('searchModal'));

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

function performSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        console.log(`Searching for: ${searchTerm}`);
        alert(`بحث عن: ${searchTerm}`);
    }
}

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Sign in
const userBtn = document.getElementById('userBtn');
const userModal = document.getElementById('userModal');
const closeUserModal = document.getElementById('closeUserModal');
const loginForm = document.getElementById('loginForm');
const showSignUpModal = document.getElementById('showSignUpModal');

userBtn.addEventListener('click', () => toggleModal('userModal'));
closeUserModal.addEventListener('click', () => toggleModal('userModal'));

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add login logic here
    toggleModal('userModal');
});

// Sign up
const signUpModal = document.getElementById('signUpModal');
const closeSignUpModal = document.getElementById('closeSignUpModal');
const signUpForm = document.getElementById('signUpForm');
const showLoginModal = document.getElementById('showLoginModal');

showSignUpModal.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('userModal');
    toggleModal('signUpModal');
});

closeSignUpModal.addEventListener('click', () => toggleModal('signUpModal'));

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add sign up logic here
    toggleModal('signUpModal');
});

showLoginModal.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('signUpModal');
    toggleModal('userModal');
});

// Password recovery
const passwordRecoveryModal = document.getElementById('passwordRecoveryModal');
const showPasswordRecoveryModal = document.getElementById('showPasswordRecoveryModal');
const closePasswordRecoveryModal = document.getElementById('closePasswordRecoveryModal');
const passwordRecoveryForm = document.getElementById('passwordRecoveryForm');
const backToLogin = document.getElementById('backToLogin');

showPasswordRecoveryModal.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('userModal');
    toggleModal('passwordRecoveryModal');
});

closePasswordRecoveryModal.addEventListener('click', () => toggleModal('passwordRecoveryModal'));

passwordRecoveryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add password recovery logic here
    alert('تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني');
    toggleModal('passwordRecoveryModal');
});

backToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal('passwordRecoveryModal');
    toggleModal('userModal');
});

/* Dark mode --------------------------------------------------------------- */

const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Close modals when clicking outside of them
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        toggleModal(e.target.id);
    }
});

// Smooth scroll for in-page anchors. Plain "#" links keep their default
// behaviour instead of triggering an invalid selector.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (!target || target === '#') {
            return;
        }
        const section = document.querySelector(target);
        if (!section) {
            return;
        }
        e.preventDefault();
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Signed-in state --------------------------------------------------------- */

let isLoggedIn = false;
let currentUser = null;

// Function to handle successful login
function handleSuccessfulLogin(username) {
    isLoggedIn = true;
    currentUser = username;

    // Hide the default user button and show logged in menu
    document.getElementById('userBtn').style.display = 'none';
    const loggedInMenu = document.getElementById('loggedInMenu');
    loggedInMenu.style.display = 'block';

    // Set the username in the display
    document.getElementById('userNameDisplay').textContent = username;

    // Close the login modal
    toggleModal('userModal');

    // Clear the login form
    document.getElementById('loginForm').reset();
}

// Function to handle logout
function handleLogout() {
    isLoggedIn = false;
    currentUser = null;

    // Show the default user button and hide logged in menu
    document.getElementById('userBtn').style.display = 'block';
    document.getElementById('loggedInMenu').style.display = 'none';

    // Clear the username display
    document.getElementById('userNameDisplay').textContent = '';
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get username from the form
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const username = usernameInput.value;

    // Add your actual login logic here
    // For demo purposes, we'll just log in with the entered username
    handleSuccessfulLogin(username);
});

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    handleLogout();
});
