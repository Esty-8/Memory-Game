// the function to flip the cards
const imageCards = document.querySelectorAll('.card');

function flipImage() {
   this.classList.toggle("flip");
}

imageCards.forEach(card => card.addEventListener('click', flipImage))