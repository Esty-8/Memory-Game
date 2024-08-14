const cardImage = document.querySelectorAll('img');
const choosenCard = []
const cardsIdsChoosen = []



function matchCards() {
const cards = document.querySelectorAll('img');

  if (choosenCard[0] == choosenCard[1]) {
      alert('match')
   cards[cardsIdsChoosen[0]].setAttribute('src', 'assets/images/background.png')
  }
}




//  flips the image when we click on it
function flipImage() {
   // this keword will show whatever card number we click on
   const cardOfId = this.getAttribute('data-id');
   // we accessing the names from the array
   choosenCard.push(arrayCards[cardOfId].name)
   console.log(choosenCard)
   cardsIdsChoosen.push(cardOfId)
   console.log(cardsIdsChoosen)
   //we adding the new images to the element
   this.setAttribute('src', arrayCards[cardOfId].img)
   if (choosenCard.length === 2) {
      setTimeout( matchCards, 300)
   }

}

cardImage.forEach((image) => image.addEventListener('click', flipImage));




const arrayCards = [
   {
      name: 'batman',
      img: 'assets/images/batman.png',
   }, 
   {
      name: 'batwoman',
      img: 'assets/images/batwoman.png',
   }, 
   {
      name: 'harley',
      img: 'assets/images/Harley.png',
   }, 
   {
      name: 'joker',
      img: 'assets/images/joker.png',
   }, 
   {
      name: 'superman',
      img: 'assets/images/superman.png',
   }, 
   {
      name: 'wonderwoman',
      img: 'assets/images/wonderwoman.png',
   }, 
   {
      name: 'batman',
      img: 'assets/images/batman.png',
   }, 
   {
      name: 'batwoman',
      img: 'assets/images/batwoman.png',
   }, 
   {
      name: 'harley',
      img: 'assets/images/Harley.png',
   }, 
   {
      name: 'joker',
      img: 'assets/images/joker.png',
   }, 
   {
      name: 'superman',
      img: 'assets/images/superman.png',
   }, 
   {
      name: 'wonderwoman',
      img: 'assets/images/wonderwoman.png',
   }
]




   // this.setAttribute('src', arrayCards[cardOfId].img)



//  Math.random returns a nr.between 0 to less than -1
//we're checking that it's smaller than 0.5 or larger than
arrayCards.sort(() =>  0.5 - Math.random())



