function getAverage (a, b, c, d, e, f) {

    var average = (a + b + c + d + e + f) / 6;
    console.log(average);
    return average;
}

 

var myResult = getAverage(7, 12, 14, 6, 77, 2);
console.log("the average is " + myResult.toFixed(2));