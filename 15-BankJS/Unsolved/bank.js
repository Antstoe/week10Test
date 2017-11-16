var fs = require("fs")

var type = process.argv[2]

var num = process.argv[3]

switch (type) {
    case "total":
        getTotal()
        break;
    case "deposit":
        deposit()
        break;
    case "withdraw":
        withdraw()
        break;
    default:
        break;
}


function getTotal (){
    var total = 0;
    fs.readFile('bank.txt', 'utf-8', (err, data) => {
        var dataArray = data.split(",");
        for (let i = 0; i < dataArray.length; i++) {
            total += parseFloat(dataArray[i]);
        }
        console.log(total.toFixed(2));
    });
};
function deposit () {
    if (num) {
        fs.appendFile('bank.txt', "," + num, (err) => {
            console.log("deposited " + num)
        })
    }   
};
function withdraw() {
    if (num) {
        fs.appendFile('bank.txt', ", -" + num, (err) => {
            console.log("withdraw " + num)
        })
    }
};
