/* assets/js/scroll.js */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-blur').forEach(el => {
        observer.observe(el);
    });
    
  const clockEl = document.getElementById('clock');
    if (clockEl) {
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour12: false });
            clockEl.textContent = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();
    }
});
