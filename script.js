// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Sticky Navbar Shadow
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆️';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.background = '#ff69b4';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '1000';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Interactive Flavor Grid
const flavorItems = document.querySelectorAll('.flavor-item');
flavorItems.forEach(item => {
  item.addEventListener('click', () => {
    // Add any functionality here if needed
  });
});