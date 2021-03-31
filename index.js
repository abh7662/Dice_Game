// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
     const randomNumber = Math.floor(Math.random() * 6) + 1
    //  console.log(randomNumber)
    //  player1Turn == true?console.log("Player 1 rolled "+randomNumber):player1Turn=false
    if(player1Turn){
      player1Dice.textContent = randomNumber
      player1Score += randomNumber
      player1Dice.classList.remove("active")
      player2Dice.classList.add("active")
      message.textContent = "Player 2 Turn"
      player1Scoreboard.textContent = player1Score
    }else{
      player2Dice.textContent = randomNumber
      player2Score += randomNumber
      player2Dice.classList.remove("active")
      player1Dice.classList.add("active")
      message.textContent = "Player 1 Turn"
      player2Scoreboard.textContent = player2Score
    }
    if(player1Score >= 20){
      message.textContent = "Player 1 is winner"
    }
    if(player2Score >= 20){
      message.textContent = "Player 2 is winner"
    }
    if(player1Score >= 20 || player2Score >= 20){
      rollBtn.style.display = "none"
      resetBtn.style.display = "block"
    }
    player1Turn = !player1Turn
     // 1. Find out which players turn it is
     // 2. log out the value e.g. "Player 1 rolled 5"
     // 3. Switch the turn back to the other player

      // 1. Display the dice number instead of logging it out
    // 2. Use the 'active' class to show which player's turn it is 
    // Hint: use the .classList.remove() and classlist.add() methods
    // 3. Update the "message" DOM node so that it states who's turn it is


    // 1. Update the scores for each player
    // 2. Display the scores in their scoreboards
        
    // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block
 })
 // 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked
function reset(){
  player1Score = 0
  player2Score = 0
  player1Turn = true
  message.textContent = "Player 1 Turn"
  player1Dice.textContent = "-"
  player2Dice.textContent = "-"
  rollBtn.style.display = "block"
  resetBtn.style.display = "none"
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  player2Dice.classList.remove("active")
  player1Dice.classList.add("active")
}
resetBtn.addEventListener("click", reset)
 
 