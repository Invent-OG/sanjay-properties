import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initLuxuryAnimations() {
  if (typeof window === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cleanup existing triggers
  ScrollTrigger.getAll().forEach(t => t.kill());

  const ctx = gsap.context(() => {
    // 1. HERO LOAD ANIMATION
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });

    heroTl
      .fromTo(
        '#hero-container',
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' }
      )
      .fromTo(
        '#floating-navbar',
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.8'
      )
      .fromTo(
        '.hero-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.hero-headline-line',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 },
        '-=0.6'
      )
      .fromTo(
        '.hero-subtext',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.hero-cta-group',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        '-=0.6'
      )
      .fromTo(
        '#hero-scroll-indicator',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      );

    if (prefersReducedMotion) return;

    // 2. NAVBAR SCROLL STATE
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: {
        className: 'scrolled-nav',
        targets: '#floating-navbar-inner',
      },
    });

    // 3. FADE UP SECTIONS & CARDS
    const fadeElements = document.querySelectorAll('.gsap-fade-up');
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // 4. STAGGER CARDS
    const staggerContainers = document.querySelectorAll('.gsap-stagger-container');
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.gsap-stagger-item');
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.14,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // 5. PARALLAX IMAGES
    const parallaxImages = document.querySelectorAll('.gsap-parallax-img');
    parallaxImages.forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -5 },
        {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement || img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    });
  });

  return () => ctx.revert();
}
