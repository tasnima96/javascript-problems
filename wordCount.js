var speech = "I am a very good person. I do not snore at night.";
console.log(speech.length);
console.log(speech[7]);
var count = 0;
var countA = 0;
for (var i = 0; i < speech.length; i++){
    var char = speech[i];
    if (char == " " && speech[i-1] != " "){
        count++;
    }
    if (char == 'a'){
        countA++;
    }
}
count++;
console.log(count);
console.log(countA);