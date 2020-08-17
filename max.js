var business = 850;
var minister = 650;
var shocib = 550
if (business > minister){
    if (business > shocib){
        console.log("Business is bigger");
    }
    else{
        console.log("Shocib is bigger");
    }
}
else{
    if (minister > shocib){
        console.log("Minister is bigger");
    }
    else{
        console.log("Shocib is bigger");
    }
}

// Another way to find max
var max = Math.max(business, minister, shocib);
console.log(max);