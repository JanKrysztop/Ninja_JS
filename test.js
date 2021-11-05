
/*
var myDAte = new Date();
console.log(myDAte);

var myPastDate = new Date(1545, 11, 2, 10, 30, 14);

var myFutureDate = new Date(2545, 0, 29, 10, 30, 14);

console.log(myPastDate);
console.log(myFutureDate);
*/

var birthday = new Date(1986, 0, 15, 11, 23, 32);
var birthday2 = new Date(1986, 0, 15, 11, 23, 32);

//get the month od the date (0 - 11)
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month (1 - 31)
console.log(birthday.getDate());

//get the day of the week (0 - 6)
console.log(birthday.getDay())

//get the hour of the date (0 - 23)
console.log(birthday.getHours());

//get the number of milisecodns since 1st Jan 1970
console.log(birthday.getTime())

if (birthday == birthday2) {

    console.log("birthdays are equal");

} else {

    console.log("birthdays are not equal");

}

if (birthday.getTime() == birthday2.getTime()) {

    console.log("birthdays are equal");

} else {

    console.log("birthdays are not equal");

}