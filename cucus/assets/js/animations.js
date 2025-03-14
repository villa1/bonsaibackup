
document.addEventListener('DOMContentLoaded', function() {
  // Animation observer for sections
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.opacity-0');
        elements.forEach((element, index) => {
          if (element instanceof HTMLElement) {
            if (element.style.animationDelay === '') {
              element.style.animationDelay = `${0.2 + (index * 0.1)}s`;
            }
            element.classList.remove('opacity-0');
            element.classList.add('animate-fade-in');
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
});
