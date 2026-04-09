/**
 * Andy Amponsah Portfolio — app.js
 * Animate skill: scroll reveal via IntersectionObserver
 * Delight skill: developer console easter egg
 *
 * Only animates transform + opacity (GPU-accelerated, per motion guidelines).
 * Respects prefers-reduced-motion via CSS.
 */
(function () {
  'use strict';

  // --- Scroll Reveal ---
  const els = document.querySelectorAll('[data-reveal]');

  if (els.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -72px 0px',
        threshold: 0,
      }
    );

    els.forEach((el) => io.observe(el));
  }

  // --- Delight: developer console easter egg ---
  const styles = [
    'font-size:14px; font-family:monospace; color:#b45309',
    'font-size:13px; font-family:monospace; color:#78716c',
  ];

  console.log('%c⚙  Andy Amponsah — DevOps & SRE Portfolio', styles[0]);
  console.log('%cLike the infrastructure? Let\'s talk: officialamponsah@gmail.com', styles[1]);

})();
