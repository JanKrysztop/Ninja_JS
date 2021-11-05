var myArray = [];

myArray[0] = 25;

myArray[1] = 35;

myArray[2] = true;

myArray[3] = "hello";

console.log(myArray);

myArray[2] = false;

console.log(myArray);

var myArray2 = [10, 20, "hi", false];

console.log(myArray2);

// Another way of creating arrays:

var myArray3 = new Array();

var myArray3 = new Array(5);

console.log(myArray3);
//--------------------------------

//Methods

console.log(myArray2.length);

console.log(myArray2.sort());

console.log(myArray2.reverse());