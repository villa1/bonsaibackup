
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (!email) {
        showMessage('Please enter your email address', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
      }
      
      // Simulate API call
      setTimeout(() => {
        showMessage('Thank you for subscribing to our newsletter!', 'success');
        emailInput.value = '';
      }, 1000);
    });
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function showMessage(message, type) {
    const messageEl = document.createElement('div');
    messageEl.classList.add(
      'fixed', 'top-4', 'right-4', 'px-4', 'py-2', 'rounded', 
      'text-white', 'transition-opacity', 'duration-500'
    );
    
    if (type === 'error') {
      messageEl.classList.add('bg-red-500');
    } else {
      messageEl.classList.add('bg-bonsai-olive');
    }
    
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    setTimeout(() => {
      messageEl.classList.add('opacity-0');
      setTimeout(() => {
        document.body.removeChild(messageEl);
      }, 500);
    }, 3000);
  }
});
