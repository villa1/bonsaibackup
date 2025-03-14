
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-filter button');
  const blogPosts = document.querySelectorAll('.blog-post');
  const featuredPost = document.querySelector('.featured-post');
  
  if (categoryButtons.length && blogPosts.length) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Update active button
        categoryButtons.forEach(btn => {
          btn.classList.remove('bg-bonsai-dark-green', 'text-white');
          btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        });
        
        this.classList.add('bg-bonsai-dark-green', 'text-white');
        this.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-gray-200');
        
        // Filter posts
        if (category === 'all') {
          blogPosts.forEach(post => {
            post.classList.remove('hidden');
          });
          
          if (featuredPost) {
            featuredPost.classList.remove('hidden');
          }
        } else {
          blogPosts.forEach(post => {
            if (post.dataset.category === category) {
              post.classList.remove('hidden');
            } else {
              post.classList.add('hidden');
            }
          });
          
          if (featuredPost) {
            featuredPost.classList.add('hidden');
          }
        }
      });
    });
  }
});
