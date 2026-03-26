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

//
let num1 = 30;

if (num1 % 3 === 0 && num1 % 5 === 0) {
  console.log("iyopa unashtot");
} else {
  console.log("rcheba nashti");
}

//
if (num1 % 4 === 0 || num1 % 6 === 0) {
  console.log("iyopa unashtot");
} else {
  console.log("rcheba nashti");
}

//
if (num1 % 4 === 0 && num1 % 6 === 0) {
  console.log("iyopa unashtot");
} else if (num1 % 6 === 0) {
  console.log("mxolod 6ze iyopa");
} else if (num1 % 4 === 0) {
  console.log("mxolod 4ze iyopa");
} else {
  console.log("rcheba nashti");
}

// we mostly use floor

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//
let a = 34;
let b = 378;
let c = 3;

if (a > b && a > c) {
  console.log("a aris yvelaze didi ricxvi");
} else if (b > a && b > c) {
  console.log("b aris yvelaze didi ricxvi");
} else if (c > a && c > b) {
  console.log("c aris yvelaze didi ricxvi");
} else {
  console.log("samive tolia");
}

// !== - ar udris (anacvlebs sammag tolobas)
// != - (anacvlebs ormag tolobas)

// if (a !== b || b !== c || a !== c) {
//   if (a > b) {
//     if (a > c) {
//     }
//   } else {
//   }
// } else {
// }

//

let a1 = 60;
let b1 = 60;
let c1 = 500;

if ((a1 === b1) === c1) {
  console.log("samive tolia");
} else {
  if (a1 > b1) {
    if (a1 > c1) {
      console.log("a aris didi ricxvi");
    } else {
      console.log("c aris didi ricxvi");
    }
  } else {
    if (b1 > c1) {
      console.log("b aris didi ricxvi");
    } else {
      console.log("c aris didi ricxvi");
    }
  }
}

if ((a1 === b1) === c1) {
  console.log("samive tolia");
} else {
  if (a1 > b1) {
    if (a1 > c1) {
      console.log(`${a1}`);
    } else {
      console.log(`${c1}`);
    }
  } else {
    if (b1 > c1) {
      console.log(`${b1}`);
    } else {
      console.log(`${c1}`);
    }
  }
}
