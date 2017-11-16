
var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf-8", (err, data) => {
    console.log(data);
    data.split(",").forEach(index => console.log(index));
})