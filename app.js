const cardImage = document.querySelectorAll('img');
const showResult = document.querySelector('#score')
const timeLeft = document.querySelector("#time-left");
const sliderFill = document.querySelector(".fill");
const startCount = 5
let timeRemain = startCount
let choosenCard = []
let cardsIdsChoosen = []
const scoreArray =[]

function playSound() {
   let sound = new Audio('//assets/images/ding.mp3');
   sound.play();
}


const timerId = setInterval(() => {
   timeRemain--
   timeLeft.textContent = timeRemain
   sliderFill.style.width = (timeRemain / startCount) * 100 + '%'
   if (timeRemain <= 0) {
     clearInterval(timerId)
     timeLeft.textContent = 'Game Over'
     playSound()
   }

 }, 1000)









function matchCards() {
  const cardsImages = document.querySelectorAll('img');
   
  if (choosenCard[0] === choosenCard[1]) {
      alert('you found a match')
   cardsImages[cardsIdsChoosen[0]].setAttribute('src', 'assets/images/background.png')
   cardsImages[cardsIdsChoosen[0]].removeEventListener('click', flipImage)
   cardsImages[cardsIdsChoosen[1]].setAttribute('src', 'assets/images/background.png')
   cardsImages[cardsIdsChoosen[1]].removeEventListener('click', flipImage)
   scoreArray.push(choosenCard)
  } else {
   //flip them back if they don't match
   cardsImages[cardsIdsChoosen[0]].setAttribute('src', 'assets/images/dc-comics.png')
   cardsImages[cardsIdsChoosen[1]].setAttribute('src', 'assets/images/dc-comics.png')
  }
  showResult.innerHTML = scoreArray.length
  choosenCard = []
  cardsIdsChoosen = []

  //if we get all the right cards
  //12 cards divided by 2 , 6 matches
  if(scoreArray.length == (arrayCards.length / 2)) {
     showResult.innerHTML = 'You win !'
  }
} 



function flipImage() {
   // this keword will show whatever card number we click on
   const cardOfId = this.getAttribute('data-id');
   // we accessing the names from the array
   choosenCard.push(arrayCards[cardOfId].name)
   cardsIdsChoosen.push(cardOfId)
   console.log(choosenCard)
   console.log(cardsIdsChoosen)
   //we adding the new images to the element
   this.setAttribute('src', arrayCards[cardOfId].img)
   if (choosenCard.length == 2) {
      setTimeout( matchCards, 500)
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
   },
]



//  Math.random returns a nr.between 0 to less than -1
//we're checking that it's smaller than 0.5 or larger than
arrayCards.sort(() =>  0.5 - Math.random())



