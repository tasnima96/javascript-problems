function reverseString(str){
    var reverse = "";
    for (var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Alien bhai brother!!";
console.log(statement);
var showReverse = reverseString(statement);
console.log(showReverse);
