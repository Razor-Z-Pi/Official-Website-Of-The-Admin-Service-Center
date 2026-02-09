const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const repairForm = document.getElementById('repairForm');

repairForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    alert(`Спасибо, ${name}! Ваша заявка принята. Мы свяжемся с вами по номеру ${phone} в течение 15 минут.`);

    repairForm.reset();
});

const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value[0] === '7' || value[0] === '8') {
            value = value.substring(1);
        }

        let formattedValue = '+7 (';

        if (value.length > 0) {
            formattedValue += value.substring(0, 3);
        }
        if (value.length >= 4) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length >= 7) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length >= 9) {
            formattedValue += '-' + value.substring(8, 10);
        }
        e.target.value = formattedValue;
    }
});