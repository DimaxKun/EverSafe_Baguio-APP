// Navbar scroll effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#mainNav .nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// Video: hover to play/pause, click to toggle
document.querySelectorAll('.video-frame').forEach(frame => {
  const video = frame.querySelector('.video-el');
  if (!video) return;

  frame.addEventListener('mouseenter', () => {
    video.play().catch(() => {});
    frame.classList.add('playing');
  });

  frame.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    frame.classList.remove('playing');
  });

  frame.addEventListener('click', () => {
    if (video.paused) {
      video.play().catch(() => {});
      frame.classList.add('playing');
    } else {
      video.pause();
      frame.classList.remove('playing');
    }
  });
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll(
  '.feature-card, .stat-card, .video-card, .arch-card, .tech-card, .api-card, .step-card, .perm-card, .evac-card, .team-card'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = entry.target.style.transform.replace('translateY(20px)', 'translateY(0)');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = (el.style.transform || '') + ' translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
