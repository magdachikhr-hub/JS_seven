//JS_8

let number = 10;

if (number % 2 === 0) {
  console.log("iyopa orze unashtot");
} else {
  console.log("ar iyopa orze unashtot");
}

if (number % 5 === 0) {
  console.log("iyopa xutze unashtot");
} else {
  console.log("ar iyopa xutze unashtot");
}

if (number % 2 === 0 && number % 5 === 0) {
  console.log("iyopa 2ze da 5ze unashtot");
} else {
  console.log("ar iyopa 2ze da 5ze unashtot");
}

//random number generator

// console.log(Math.PI);

console.log(Math.random());

console.log(Math.random() * 10);

console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.round(4.5));

let products = 25;
let pages = products / 10;

let pages2 = Math.ceil(products / 10);
console.log(pages2);

console.log(Math.floor(Math.random() * 10));

// daxarisxeba
console.log(3 ** 2);
console.log(Math.pow(7, 2));

//kvadratuli pesvi
console.log(Math.sqrt(25));

console.log(27 ** (1 / 3));
console.log(Math.pow(27, 1 / 3));

//  min and max

console.log(Math.min(12, 4, 6, 7, 8, 6, 9.272, 6));
console.log(Math.max(12, 4, 6, 7, 8, 6, 9.272, 6));


