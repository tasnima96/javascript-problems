var num = 2.145678;
var result = Math.floor(num);
console.log(result);
var result2 = Math.ceil(num);
console.log(result2);
var result3 = Math.round(num);
console.log(result3);

for (var i = 0; i < 10; i++){
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}
