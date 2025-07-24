// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// JavaScript for Contact Form Submission (Client-side only)
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // In a real application, you would send this data to a backend server
    // For a static portfolio, we'll just show a success message
    // You could integrate with services like Formspree.io or Netlify Forms for actual email sending

    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    formMessage.classList.remove('hidden');
    contactForm.reset(); // Clear the form
    
    // Hide message after a few seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
});