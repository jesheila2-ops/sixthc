document.addEventListener('DOMContentLoaded', () => {
  const envBtn = document.getElementById('envBtn');
  const bgMusic = document.getElementById('bgMusic');

  envBtn.addEventListener('click', () => {
    // prevent double-tapping while it's already opening
    if (envBtn.classList.contains('open')) return;

    envBtn.classList.add('open');

   bgMusic.play();

  setTimeout(() => {
    goToNextPage();
  }, 650);
});

  // any page tagged .scroll-reveal fades/slides in on its own once it's
  // scrolled into view — no click needed, just normal scrolling
  const revealPages = document.querySelectorAll('.scroll-reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  revealPages.forEach((page) => revealObserver.observe(page));
});

// Placeholder: hook this up to however your site moves between pages.
// Fades page 1 out, fades page 2 (birthday photo) in, and makes pages 3+
// part of the scrollable flow so they can reveal on scroll.
function goToNextPage() {
  const p0 = document.getElementById('p0');
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const p3 = document.getElementById('p3');
  const p4 = document.getElementById('p4');
  const p5 = document.getElementById('p5');

  p0.style.transition = 'opacity 0.4s ease';
  p0.style.opacity = '0';

  setTimeout(() => {
    p0.style.display = 'none';

    p1.style.display = 'flex';
    p1.style.opacity = '0';

    p2.style.display = 'flex';
    p3.style.display = 'flex';
    p4.style.display = 'flex';
    p5.style.display = 'flex';

    requestAnimationFrame(() => {
      p1.style.transition = 'opacity 0.6s ease';
      p1.style.opacity = '1';
    });
  }, 400);
}