# Memory Game

The memory game built in JavaScript is an engaging and interactive web-based game where players are challenged to match pairs of cards from a shuffled deck. The game starts with all cards face down, and players reveal two cards at a time by clicking on them. If the revealed cards match, they stay face up; if not, they flip back over, allowing players to remember their positions. The game is developed using HTML, CSS, and JavaScript, leveraging event listeners for card clicks and using logic to track matches, moves, and game completion. JavaScript's dynamic nature allows for a smooth and responsive gaming experience, with animations and effects enhancing user interaction.

## Design

![Responsive Landing Page](/assets/images/landining-page.png)


## Wireframes 
![Responsive Landing Page](/assets/images/wireframes.png)


![Responsive Landing Page](/assets/images/wire.png)


## User Stories

![Responsive Landing Page](/assets/images/backlog.png)
* As can be seen from the project board, the completed sprint was composed of 8 separate items. Having used the MoSCoW approach to prioritisation, 5 were classified as "Must-Have" making up less than 60% of the tasks as recommended. The rest of the first sprint was made up of "Should-Have", "Could-Have". The project backlog contains 1 "Won't Have" items.

## Features
* The game displays 12 cards face down.
![Responsive Landing Page](/assets/images/12cRDS.PNG)
* The cards are displayed in a grid with three rows and four columns.
* There are a total of 12 cards with six unique photos, i.e., each unique photo appears on exactly two cards.
* When the player clicks on a card, the corresponding photo will be revealed momentarily.
![Responsive Landing Page](/assets/images/11cards.png)
* If the player consecutively clicks on two cards that have the same photo, both cards will be turned over.  
* The player wins once all cards are facing up.
![Responsive Landing Page](/assets/images/win.png)
* The game shows a score that reflects the player’s performance based on the number of match cards.
* A score is displayed to keep track of the matched cards.
* A restart button allows the player to reset the game board, the timer, and the score.
* The player can choose between  levels of difficulty (Level 2). Increased difficulty means: decreasing the 
  time available to complete and increasing the number of cards.
  ![Responsive Landing Page](/assets/images/level.png)


## Testing
* HTML -  errors were found when passing the code through the official validator on both html files https://validator.w3.org/

* CSS - No errors were found when passing the code through the official validator https://jigsaw.w3.org/css-validator/validator
 ![Responsive Landing Page](/assets/images/validator.png)


### Lighthouse Testing

#### Homepage
 ![Responsive Landing Page](/assets/images/light.png)

#### Level 2 Homepage
 ![Responsive Landing Page](/assets/images/House.png)

### Bugs

* The Home Page isn't responsive.

* The Level 2 Homepage doesn't resize on mobile devices .



## Languages, Frameworks and Libraries

<h2 id="languages-frameworks-libraries">Languages, Frameworks and Libraries</h2>

- <a href="https://cssgenerator.pl/en/transition-generator/"> CSS Generator</a> - Used for styling the project.

- <a href="https://create.microsoft.com/en-us/features/ai-image-generator"> Free AI Image generator</a> - Used for creating the images.

- <a href="https://en.wikipedia.org/wiki/CSS"> CSS3</a> - Used for styling the project.

- <a href="https://github.com/IrisSmok"> Github</a> - Used to store the project code.

- <a href="https://www.gitpod.io/"> Gitpod</a> - An IDE Used for coding.

- <a href="https://balsamiq.com/"> Balsamiq</a> - Used to create site wireframes.

- <a href="https://pixabay.com/sound-effects/search/videogame/?pagi=8"> pixabay</a> - Used to add sounds effects to the game.

- <a href="http://ami.responsivedesign.is/"> Am I Responsive</a> - Used to check if the site is responsive on different screen sizes.>


## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Main Branch
* Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment

The live link can be found here - https://esty-8.github.io/Memory-Game/