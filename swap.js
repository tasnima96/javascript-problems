var a = 18;
var b = 3;
console.log("Before swap: a = ", a, " b = ", b);
var temp = a;
a = b;
b = temp;
console.log("After swap: a = ", a, " b = ", b);


// Another way to swap 
var x = 15;
var y = 13;
console.log("Before swap: x = ", x, " y = ", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x = ", x, " y = ", y);


// One more way to swap
var p = 4;
var q = 16;
console.log("Before swap: p = ", p, " q = ", q);
[p, q] = [q, p];
console.log("After swap: p = ", p, " q = ", q);