// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
var inquirer = require('inquirer');
var life = 70;
var zLife = 15;

function zGame (){
    inquirer.prompt([
        {
            type: "list",
            message: "try to stay alive! Guess a number between [1-5]",
            choices: ["1", "2", "3", "4", "5"],
            name: "userGuess"
        }
    ]).then((res) => {
        var userGuess = res.userGuess
        var zombieChoice = Math.floor(Math.random() * (5 - 1) + 1)
        if (userGuess != zombieChoice) {
            life -= zombieChoice;
            console.log("zombie rolled " + zombieChoice);
            console.log("ohh no The zombie slashed you with " + zombieChoice + " damage!!!");
            console.log('You have ' + life + 'health left. The zombie has ' + zLife + " left." );
        }else {
            zLife -= userGuess;
            console.log("zombie rolled " + zombieChoice);
            console.log("You hit the zombie for " + userGuess + " damage!!!");
            console.log('You have ' + life + 'health left. The zombie has ' + zLife + " left.");
        }
        life > 0 && zLife > 0 ?  zGame() : life == 0 ? console.log("you DEAD!") : console.log("holy shit you lived");
        
    })
}
zGame()