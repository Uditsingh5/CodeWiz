document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.title', { opacity: 0, y: -50, duration: 1 });

    gsap.from('.feature-item', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
    });
});
