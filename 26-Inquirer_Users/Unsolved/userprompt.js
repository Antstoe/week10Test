

// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');
inquirer.prompt([
    {
    type: "input",
    name: "favPoke",
    message: "What pokemon is your favorite?"
    },
    {
        type: "password",
        name: "pw",
        message: "Give your pokemon a pw"
    },
    {
        type: "list",
        message: "Choose your second pokemon",
        choices: ["pikachu", "charzard", "abra", "porygon"],
        name: "chosenOne"
    },
    {
     type: "checkbox",
     name: "type",
     message: "If you were the avatar what would your starting bender power be?",
     choices: ["earth", "fire", "water", "Wind"]
    },
    {
        type: "confirm",
        name: "final",
        message: "Are you sure about your choices?"

    }

])
.then(function(data){
    console.log(data);
    if (data.pw === "wows") {
        console.log("wow your favorite pokemon is " + data.favPoke + ". Its awesome that you really like " + data.chosenOne + ". being a " + data.type + " bender would rule!!!" );
    }
})