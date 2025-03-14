
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const progressBar = document.getElementById('progress-bar');
  
  // Function to update navbar appearance on scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-5');
    } else {
      navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-3');
      navbar.classList.add('bg-transparent', 'py-5');
    }

    // Calculate scroll progress for the reading indicator
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    
    if (documentHeight > 0) {
      const percentage = (scrolled / documentHeight) * 100;
      progressBar.style.width = `${percentage}%`;
    }
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('max-h-screen');
    
    if (isOpen) {
      mobileMenu.classList.remove('max-h-screen', 'opacity-100');
      mobileMenu.classList.add('max-h-0', 'opacity-0');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.add('max-h-screen', 'opacity-100');
      mobileMenu.classList.remove('max-h-0', 'opacity-0');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });
  
  // Initialize event listeners
  window.addEventListener('scroll', handleScroll);
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  
  // Set active nav link based on current URL
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath || 
        (linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });
  
  // Run once on page load
  handleScroll();
});
