var a = process.argv[2];
var operator = process.argv[3]
var b = process.argv[4];
console.log(operator);
switch (operator) {
  case "-" :
    console.log(parsInt(a) - parseInt(b));
    break;
  case "+":
    console.log(parseInt(a) + parseInt(b));
    break;
  case "/":
    console.log(parseInt(a) / parseInt(b));
    break;
  case "*":
    console.log(parseInt(a) * parseInt(b));
    break;
  case "%":
    console.log(parseInt(a) % parseInt(b));
    break;
  default:
  console.log("nope");
}
