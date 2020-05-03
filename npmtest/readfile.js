var fs = require("fs");
var data = fs.readFileSync("input.txt");

console.log(data.toString());
console.log(" 程序执行结束")

fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});


fs.readFile('content.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err.stack);
    } else {
        console.log(data);
    }
})
console.log("程序执行结束") 