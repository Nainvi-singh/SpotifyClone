document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll('.spotifyPlaylist .card');
    var showMoreBtn = document.getElementById('show-more');
  
    // Show first 5 cards initially
    for (var i = 0; i < 5; i++) {
      cards[i].style.display = 'block';
    }
  
    showMoreBtn.addEventListener('click', function() {
      // Toggle the display of remaining cards
      for (var i = 5; i < cards.length; i++) {
        if (cards[i].style.display === 'none' || cards[i].style.display === '') {
          cards[i].style.display = 'block';
          showMoreBtn.textContent = 'Show less';
        } else {
          cards[i].style.display = 'none';
          showMoreBtn.textContent = 'Show all';
        }
      }
    });
  });
  