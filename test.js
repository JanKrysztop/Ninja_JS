var myString = 'I\'m a "fun ninja" string';

console.log(myString.length);

console.log(myString.toUpperCase());

console.log(myString.toLowerCase());

console.log(myString.indexOf("fun"));


if (myString.indexOf("ninja") === -1) {

    console.log("the words ninja is not in the string");

} else {

    console.log("the word ninja start at position " + myString.indexOf("ninja"))

}


var string1 = "Abc";
var string2 = "Bcd";

console.log(string1 === string2);

console.log(string1 < string2);