var name = "sal";
var opcupation = "coder";


console.log("wowowoowow");


module.exports = {
    name: name,
    opcupation: opcupation,
    nameChanger: function(newName){
        name = newName;
        console.log(name);
    }
}