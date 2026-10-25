/* ==========================================================================
   Page behaviour: pages/contact.html
   ========================================================================== */

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message) {
        showToast('الرجاء ملء جميع الحقول المطلوبة', 'bg-red -500');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('الرجاء إدخال عنوان بريد إلكتروني صحيح', 'bg-red-500');
        return;
    }

    // If validation passes, you would typically send this data to a server
    // For this example, we'll just log it to the console and show a success toast
    console.log('Form submitted:', { name, email, subject, message });
    showToast('تم إرسال رسالتك بنجاح!', 'bg-green-500');

    // Clear the form
    this.reset();
});

function showToast(message, bgColor) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `fixed bottom-5 right-5 ${bgColor} text-white px-6 py-3 rounded-md shadow-lg transform translate-y-0 opacity-100 transition-all duration-300`;

    setTimeout(() => {
        toast.className = `fixed bottom-5 right-5 ${bgColor} text-white px-6 py-3 rounded-md shadow-lg transform translate-y-full opacity-0 transition-all duration-300`;
    }, 3000);
}
