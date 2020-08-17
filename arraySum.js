function getSum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
    // var element = numbers[i];
    sum = sum + numbers[i];
    }
    return sum;
}
var numbers = [25, 3, 18, 15, 13, 45, 112];
var result = getSum(numbers);
console.log("The Sum is", result);