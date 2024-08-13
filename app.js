const cardImage = document.querySelectorAll('img');

// function that flips the image when we click on it
function flipImage() {
   console.log('clicked')
}

cardImage.forEach((image) => image.addEventListener('click', flipImage))

const arrayCards = [
   {
      name: 'batman',
      img: '//assets/images/batman.png'
   }, 
   {
      name: 'batwoman',
      img: '//assets/images/batwoman.png'
   }, 
   {
      name: 'harley',
      img: '//assets/images/Harley.png'
   }, 
   {
      name: 'joker',
      img: '//assets/images/joker.png'
   }, 
   {
      name: 'superman',
      img: '//assets/images/superman.png'
   }, 
   {
      name: 'wonderwoman',
      img: '//assets/images/wonderwoman.png'
   }, 
   {
      name: 'batman',
      img: '//assets/images/batman.png'
   }, 
   {
      name: 'batwoman',
      img: '//assets/images/batwoman.png'
   }, 
   {
      name: 'harley',
      img: '//assets/images/Harley.png'
   }, 
   {
      name: 'joker',
      img: '//assets/images/joker.png'
   }, 
   {
      name: 'superman',
      img: '//assets/images/superman.png'
   }, 
   {
      name: 'wonderwoman',
      img: '//assets/images/wonderwoman.png'
   }
]


//  Math.random returns a nr.between 0 to less than -1
//we're checking that it's smaller than 0.5 or larger than
arrayCards.sort(() =>  0.5 - Math.random())



