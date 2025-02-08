// Slider Animation
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 5000); // Auto slide every 5 seconds

// Back-to-Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic Footer Year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Pop-Up Effect on Hover
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        item.appendChild(popup);
        setTimeout(() => popup.classList.add('show'), 100);
    });

    item.addEventListener('mouseleave', () => {
        const popup = item.querySelector('.popup');
        if (popup) {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }
    });
});

// Animated Buttons
const buttons = document.querySelectorAll('a, button');

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
    });
});

// Typing Animation for Hero Text
const heroText = document.querySelector('.hero-text h1');
const text = 'Welcome to PT Larissa Winri Prakarsa';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Click Animation on Images
const images = document.querySelectorAll('.service-image');

images.forEach((image) => {
    image.addEventListener('click', () => {
        image.style.animation = 'spin 1s ease-in-out';
        setTimeout(() => (image.style.animation = ''), 1000);
    });
});

// Dark Mode Toggle
const darkModeButton = document.createElement('button');
darkModeButton.textContent = '🌙';
darkModeButton.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.textContent = '☀️';
    } else {
        darkModeButton.textContent = '🌙';
    }
});



// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
