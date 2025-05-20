// Ensure the overlay exists on every page
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('transition-overlay');

  // Fade-in on load
  overlay.classList.remove('active');

  // Animate navbar and landing text if present
  if (typeof gsap !== 'undefined') {
    gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power4.out" });
    gsap.from(".intro-text h1", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out" });
    gsap.from(".bottom-info", { duration: 1.5, delay: 0.5, y: 50, opacity: 0, ease: "power4.out" });
    gsap.from(".portfolio-card", {
      scrollTrigger: ".portfolio-grid",
      opacity: 0, y: 50,
      duration: 1, stagger: 0.2
    });
  }

  // Intercept internal link clicks for transition
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href.startsWith('#') && link.hostname === location.hostname) {
      link.addEventListener('click', e => {
        e.preventDefault();
        overlay.classList.add('active');
        setTimeout(() => { window.location = href; }, 600);
      });
    }
  });
});
