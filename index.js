/*

//const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');

stars.forEach(star => {
  star.addEventListener('click', function() {
    const rating = this.getAttribute('data-value');
    
    // Remove active class from all stars
    stars.forEach(s => s.classList.remove('active'));
    
    // Add active class to selected stars
    stars.forEach(s => {
      if (s.getAttribute('data-value') <= rating) {
        s.classList.add('active');
      }
    });
    
    // Update the text
    ratingText.textContent = `You rated us ${rating} star(s)!`;
  });
});*/
