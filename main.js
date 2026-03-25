let isItRaining = true;

if (isItRaining === true) {
  console.log("dont go outside");
} else {
  console.log("go outside");
}

let age = 35;

if (age >= 65) {
  console.log("you get pension");
} else {
  console.log("you dont get pension");
}

//
let myAge = 25;

if (myAge > 18 && myAge < 30) {
  console.log("Valid age");
}

// && - logical 'and'
// || - logical 'or'
// ! - logical 'not'

console.log(1 == true);

// console.log(boolean(NaN));
//NaN - not a number

console.log(Number("9999"));
console.log(Number("helllooo"));

//

let student = true;
let age2 = 22;

if (student && age2 > 20) {
  console.log("you get a discount");
} else {
  console.log("you dont get a discount");
}

// or

let pay = true;
let VIP = false;

if (pay || VIP) {
  console.log("you can go in");
} else {
  console.log("you can not go in");
}

// !
let isLoggedIn = true;

if (!isLoggedIn) {
  console.log("login");
} else {
  console.log("welcome");
}

//

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("you are logged in");
} else {
  console.log("invalid credentials");
}

// ტასკ 5 -  Movie entry

// age >= 16 AND hasTicket → enter
// OR if VIP → always enter

//  order:    ()   ->     !    ->    &&   ->   ||

console.log(true && (false || (true && (!false || false))) && false);

// if ((age >= 18 && hasID) || hasID)
// if (hasID)
// something && X || X   result X

// taks 13 - Security system
let isNight = true;
let motionDetected = true;
let isOwnerHome = true;

if (isNight && motionDetected && !isOwnerHome) {
  console.log("alarm");
}

// task 12 - Smart door system
let hasKey = false;
let knowsPassword = true;
let isOwner = false;

// door opens if:
// has key AND knows password
// OR owner
