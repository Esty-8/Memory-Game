const cardImage = document.querySelectorAll('img');
const choosenCard = []

//  flips the image when we click on it
function flipImage() {
   // this keword will show whatever card number we click on
   const cardOfId = this.getAttribute('data-id');
   // we accessing the names from the array
   choosenCard.push(arrayCards[cardOfId].name)
   this.setAttribute('src', arrayCards[cardOfId].img)

}

cardImage.forEach((image) => image.addEventListener('click', flipImage))

// for(let image of cardImage) {
//    image.addEventListener('click', changeImage)
// }

// function changeImage(e){
//    const cardOfId = this.getAttribute('data-id');
//    let newImage = e.target.setAttribute('src', arrayCards[cardOfId]);
//    document.body.classList.value = newImage;
// }





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


//  Math.random returns a nr.between 0 to less than -1
//we're checking that it's smaller than 0.5 or larger than
arrayCards.sort(() =>  0.5 - Math.random())



