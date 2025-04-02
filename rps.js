 
class Game {
  //Create the game as an object.The default constructor function ()
  // will be called every time we create a new game object in line 60
  // We use array as the property to store the 3 options availabel to choose in the game.
  constructor() {
    this.options = ["rock", "paper", "scissors"]
  }



  // To get a random choice from the computer create a function with a
  // ariable random number  0 =< 1 and times it by the index of the  of
  //this.option
  getComputerChoice() {
    const random = Math.floor(Math.random() * this.options.length)
    return this.options[random]
  }

 //use a function with if/else to determine the winner and return a message as a result.
  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "Tie"
      //if they are the same
    }

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      return "Player Wins"
      //all the ways the player can win
    } else {
      return "Computer Wins"
      //everything else - catch all
    }
  }

 //function to ensure the play's choice is lowercase and exclude invalid choices.
  play(playerChoice) {
    playerChoice = playerChoice.toLowerCase()

    if (!this.options.includes(playerChoice)) {
      console.log("Add rock, paper or scissors.")
      return
    }
  

  //method to call the computer's choice
  const computerChoice = this.getComputerChoice()
  console.log("Computer choice: " + computerChoice)
  console.log("Player choice: " + playerChoice)
  //this will log the computer choice and player choice
 
//this calls the determineWinner method
  const result = this.determineWinner(playerChoice, computerChoice)
  console.log(result)
  }

}
//this is an instance of a game class
const game = new Game()


game.play("rock")