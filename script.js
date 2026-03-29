    const cursor     = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
    });

    (function animateRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      cursorRing.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      requestAnimationFrame(animateRing);
    })();

    document.querySelectorAll('a, button, .skill-card, .cert-card').forEach(el => {
      el.addEventListener('mouseenter', () => { cursorRing.style.opacity = '0.8'; cursorRing.style.transform += ' scale(1.4)'; });
      el.addEventListener('mouseleave', () => { cursorRing.style.opacity = '0.4'; });
    });

    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => revealObs.observe(el));

    const navLinks = document.querySelectorAll('.nav-links a');
    const allSections = document.querySelectorAll('section[id], div[id="hero"]');

    window.addEventListener('scroll', () => {
      let current = 'hero';
      allSections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 220) current = s.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }, { passive: true });
