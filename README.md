# Tenzies Game

A fun and interactive **Tenzies dice game** built with **React**. The goal of the game is to roll the dice until all ten dice show the same number. Players can click individual dice to hold their values while continuing to roll the remaining dice.

## Features

* 🎲 Roll 10 dice at once with random values
* ✋ Click dice to hold/freeze their current values
* 🔄 Continue rolling until all dice match
* ⏱️ Game timer starts when the player begins
* 🎉 Confetti animation appears when the player wins
* 🔁 Restart the game after winning
* 🎨 Dynamic styling for held dice and winning state

## Technologies Used

* **React**
* **JavaScript (ES6+)**
* **CSS**
* **clsx** - for conditional class handling
* **react-confetti** - for the victory animation

## How to Play

1. Click the **Roll** button to generate random dice values.
2. Click any die you want to keep. Held dice will be highlighted.
3. Continue rolling until all dice have the same number.
4. When all dice are held and match:

   * The game displays a win state.
   * Confetti appears.
   * The timer stops.
5. Click the win button to start a new game.

### Header Component

Displays the game title and instructions:

* Game name: **Tenzies**
* Explanation of the objective and dice-holding mechanic

### Main Component

Contains the core game logic:

* Dice generation
* Dice holding functionality
* Rolling mechanics
* Timer handling
* Win detection
* Restart functionality

### App Component

Acts as the main container and combines:

* `Header`
* `Main`

## Future Improvements

Possible improvements:

* Add difficulty levels
* Add a best time/score system
* Add sound effects
* Add animations when dice roll
* Save player records using local storage

## License

This project is for learning and personal development purposes.
