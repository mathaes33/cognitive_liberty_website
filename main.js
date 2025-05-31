// Animated background bubbles
const bg = document.querySelector('.animated-bg');
if (bg) {
    for (let i = 0; i < 18; i++) {
        const s = document.createElement('span');
        const size = Math.random() * 80 + 40;
        s.style.width = s.style.height = size + 'px';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = Math.random() * 100 + 'vh';
        s.style.animationDuration = (8 + Math.random() * 8) + 's';
        s.style.opacity = 0.12 + Math.random() * 0.18;
        bg.appendChild(s);
    }
}

// Newsletter form handler
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const msg = document.getElementById('success-message');
        if (msg) {
            msg.style.display = 'block';
            setTimeout(() => { msg.style.display = 'none'; }, 4000);
        }
        this.reset();
    });
}

// Contact form handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const msg = document.getElementById('success-message');
        if (msg) {
            msg.style.display = 'block';
            setTimeout(() => { msg.style.display = 'none'; }, 4000);
        }
        this.reset();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});