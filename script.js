gsap.registerPlugin(ScrollTrigger);

/* ── PRELOADER (character stagger) ───────────────────── */
window.addEventListener('load', () => {
  const chars = document.querySelectorAll('.pl-word span, .pl-word em');
  const pre   = document.getElementById('preloader');

  gsap.to(chars, {
    y: 0, opacity: 1, duration: 1, stagger: 0.08, ease: 'power3.out',
  });

  gsap.timeline({ delay: 1.6, onComplete: () => { pre.style.display='none'; heroIn(); } })
    .to(chars, { y: -40, opacity: 0, stagger: 0.05, duration: .6, ease: 'power3.in' })
    .to(pre, { scaleY: 0, transformOrigin:'top', duration: .7, ease: 'power4.inOut' }, '+=.05');
});

/* ── HERO IN ──────────────────────────────────────────── */
function heroIn() {
  // Photo subtle zoom-out
  gsap.fromTo('#hImg', { scale: 1.1 }, { scale: 1, duration: 2.4, ease: 'power3.out' });

  // Title lines rise
  gsap.fromTo('.h-line span',
    { y: '110%' },
    { y: '0%', duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: .15 }
  );

  // Sub + CTA
  gsap.fromTo(['#hSub','#hCta'], { y: 25, opacity: 0 },
    { y: 0, opacity: 1, stagger: .2, duration: 1, ease: 'power3.out', delay: .6 }
  );

  // Hero photo parallax
  gsap.to('#hImg', {
    yPercent: 18, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });
}

/* ── NAV SCROLL ───────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('stuck', window.scrollY > 60);
}, { passive: true });

/* ── MOBILE MENU ──────────────────────────────────────── */
const burger = document.getElementById('burger');
const mob    = document.getElementById('mob');
burger.addEventListener('click', () => mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

/* ── SCROLL REVEAL ────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: .1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-reveal], [data-reveal="left"], [data-reveal="right"]').forEach(el => io.observe(el));

/* ── PORTFOLIO PARALLAX ───────────────────────────────── */
document.querySelectorAll('.pf-img').forEach(img => {
  gsap.to(img, {
    backgroundPositionY: '12%', ease: 'none',
    scrollTrigger: {
      trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true
    }
  });
});

/* ── SMOOTH ANCHORS ───────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const t = document.querySelector(id);
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + pageYOffset - 80, behavior: 'smooth' });
  });
});

/* ── WHATSAPP FORM ────────────────────────────────────── */
function sendWpp() {
  const empresa = document.getElementById('fe').value.trim();
  const nome    = document.getElementById('fn').value.trim();
  const tel     = document.getElementById('ft').value.trim();
  const msg     = document.getElementById('fd').value.trim();
  if (!empresa || !nome) { alert('Preencha empresa e nome.'); return; }
  const txt = encodeURIComponent(
    `Olá! Vim pelo site da MOLTE.\n\n*Empresa:* ${empresa}\n*Nome:* ${nome}\n*Telefone:* ${tel||'—'}\n*Projeto:* ${msg||'—'}`
  );
  window.open(`https://api.whatsapp.com/send/?phone=5511961880078&text=${txt}`, '_blank');
}
