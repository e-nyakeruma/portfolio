// ============================================================
// 1. NAVIGATION — Mobile Toggle & Active Link Highlighting
// ============================================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

// Highlight active section on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);

// ============================================================
// 2. NAVBAR — Add shadow on scroll
// ============================================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================================
// 3. CONTACT FORM — Simple validation + success message
// ============================================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim() || 'No subject';
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, Message).');
        return;
    }

    // Build mailto link
    const mailtoLink = `mailto:edward.isaboke@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form
    contactForm.reset();

    // Optional: show success message
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    btn.style.background = '#10b981';
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 3000);
});

// ============================================================
// 4. FOOTER — Auto-update year
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// 5. SMOOTH SCROLL (optional enhancement)
// ============================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================================
// 6. CONSOLE GREETING (for fun)
// ============================================================

console.log('%c👋 Hello, recruiter!', 'font-size: 24px; font-weight: bold; color: #e8eaf0;');
console.log('%cThanks for viewing Edward\'s portfolio.', 'font-size: 14px; color: #e8eaf0;');
console.log('%c📧 edward.isaboke@gmail.com | 🔗 linkedin.com/in/edward-isaboke', 'font-size: 12px; color: #3b82f6;');