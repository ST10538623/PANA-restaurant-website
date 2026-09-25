document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.main-nav');
    const menuToggle = document.querySelector('.menu-toggle');

    if (nav && menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');

        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const name = nameInput ? nameInput.value.trim() : 'there';

            formMessage.textContent = `Thanks, ${name || 'friend'}! Your enquiry has been noted for follow-up.`;
            contactForm.reset();
        });
    }
});
