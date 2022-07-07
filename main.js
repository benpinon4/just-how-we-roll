/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
};

/*******************
 * YOUR CODE BELOW *
 *******************/

/*******************
 * YOUR QUERYSELECTORS BELOW *
 *******************/
// let button_d6 = document.querySelector("#d6-button");
let image_d6 = document.querySelector("#d6-roll");
let mean_d6 = document.querySelector("#d6-rolls-mean");
let median_d6 = document.querySelector("#d6-rolls-median");

let doubled6Section = document.querySelector("#double-d6-buttons");
let image_doubleD61 = document.querySelector("#double-d6-roll-1");
let image_doubleD62 = document.querySelector("#double-d6-roll-2");
let mean_double = document.querySelector("#double-d6-rolls-mean");
let median_double = document.querySelector("#double-d6-rolls-median");

let image_d12 = document.querySelector("#d12-roll");
let mean_d12 = document.querySelector("#d12-rolls-mean");
let median_d12 = document.querySelector("#d12-rolls-median");

let image_d20 = document.querySelector("#d20-roll");
let mean_d20 = document.querySelector("#d20-rolls-mean");
let median_d20 = document.querySelector("#d20-rolls-median");

let resetButton = document.querySelector("#reset-button");

//starting images//
image_d6.src = "./images/start/d6.png";
image_doubleD61.src = "./images/start/d6.png";
image_doubleD62.src = "./images/start/d6.png";
image_d12.src = "./images/start/d12.jpeg";
image_d20.src = "./images/start/d20.jpg";

//starting means//
mean_d6.innerText = "NA";
mean_double.innerText = "NA";
mean_d12.innerText = "NA";
mean_d20.innerText = "NA";

//starting medians//
median_d6.innerText = "NA";
median_double.innerText = "NA";
median_d12.innerText = "NA";
median_d20.innerText = "NA";

/*******************
 * EVENT LISTENERS *
 *******************/
image_d6.addEventListener("click", d6RollFunction);

doubled6Section.addEventListener("click", doubleRollFunction);

image_d12.addEventListener("click", d12RollFunction);

image_d20.addEventListener("click", d20RollFunction);

resetButton.addEventListener("click", resetFunction);

/******************
 * RESET FUNCTION *
 ******************/
function resetFunction() {
  //empty all global variable arrays
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];

  //change dice button to starting images
  image_d6.src = "./images/start/d6.png";
  image_doubleD61.src = "./images/start/d6.png";
  image_doubleD62.src = "./images/start/d6.png";
  image_d12.src = "./images/start/d12.jpeg";
  image_d20.src = "./images/start/d20.jpg";

  //change dice average to NA
  mean_d6.innerText = "NA";
  mean_double.innerText = "NA";
  mean_d12.innerText = "NA";
  mean_d20.innerText = "NA";

  //change dice dice mean to NA
  median_d6.innerText = "NA";
  median_double.innerText = "NA";
  median_d12.innerText = "NA";
  median_d20.innerText = "NA";
}
/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
//D6 Roll Function//
function d6RollFunction() {
  let result = getRandomNumber(6);
  if (result === 1) {
    image_d6.src = "./images/d6/1.png";
  } else if (result === 2) {
    image_d6.src = "./images/d6/2.png";
  } else if (result === 3) {
    image_d6.src = "./images/d6/3.png";
  } else if (result === 4) {
    image_d6.src = "./images/d6/4.png";
  } else if (result === 5) {
    image_d6.src = "./images/d6/5.png";
  } else if (result === 6) {
    image_d6.src = "./images/d6/6.png";
  }

  sixes.push(result);
  d6Mean();
  medianFunction(sixes, median_d6);
}

//Double Roll Function//
function doubleRollFunction() {
  let total = 0;
  let result1 = getRandomNumber(6);
  if (result1 === 1) {
    image_doubleD61.src = "./images/d6/1.png";
  } else if (result1 === 2) {
    image_doubleD61.src = "./images/d6/2.png";
  } else if (result1 === 3) {
    image_doubleD61.src = "./images/d6/3.png";
  } else if (result1 === 4) {
    image_doubleD61.src = "./images/d6/4.png";
  } else if (result1 === 5) {
    image_doubleD61.src = "./images/d6/5.png";
  } else if (result1 === 6) {
    image_doubleD61.src = "./images/d6/6.png";
  }
  let result2 = getRandomNumber(6);
  if (result2 === 1) {
    image_doubleD62.src = "./images/d6/1.png";
  } else if (result2 === 2) {
    image_doubleD62.src = "./images/d6/2.png";
  } else if (result2 === 3) {
    image_doubleD62.src = "./images/d6/3.png";
  } else if (result2 === 4) {
    image_doubleD62.src = "./images/d6/4.png";
  } else if (result2 === 5) {
    image_doubleD62.src = "./images/d6/5.png";
  } else if (result2 === 6) {
    image_doubleD62.src = "./images/d6/6.png";
  }
  total = result1 + result2;
  doubleSixes.push(total);
  double6Mean();
  medianFunction(doubleSixes, median_double)
}

//D12 Roll Function//
function d12RollFunction() {
  let result = getRandomNumber(12);
  if (result === 1) {
    image_d12.src = "./images/numbers/1.png";
  } else if (result === 2) {
    image_d12.src = "./images/numbers/2.png";
  } else if (result === 3) {
    image_d12.src = "./images/numbers/3.png";
  } else if (result === 4) {
    image_d12.src = "./images/numbers/4.png";
  } else if (result === 5) {
    image_d12.src = "./images/numbers/5.png";
  } else if (result === 6) {
    image_d12.src = "./images/numbers/6.png";
  } else if (result === 7) {
    image_d12.src = "./images/numbers/7.png";
  } else if (result === 8) {
    image_d12.src = "./images/numbers/8.png";
  } else if (result === 9) {
    image_d12.src = "./images/numbers/9.png";
  } else if (result === 10) {
    image_d12.src = "./images/numbers/10.png";
  } else if (result === 11) {
    image_d12.src = "./images/numbers/11.png";
  } else if (result === 12) {
    image_d12.src = "./images/numbers/12.png";
  }

  twelves.push(result);
  d12Mean();
  medianFunction(twelves, median_d12);
}
//20 side dice Roll//
function d20RollFunction() {
  let result = getRandomNumber(20);

  if (result === 1) {
    image_d20.src = "./images/numbers/1.png";
  } else if (result === 2) {
    image_d20.src = "./images/numbers/2.png";
  } else if (result === 3) {
    image_d20.src = "./images/numbers/3.png";
  } else if (result === 4) {
    image_d20.src = "./images/numbers/4.png";
  } else if (result === 5) {
    image_d20.src = "./images/numbers/5.png";
  } else if (result === 6) {
    image_d20.src = "./images/numbers/6.png";
  } else if (result === 7) {
    image_d20.src = "./images/numbers/7.png";
  } else if (result === 8) {
    image_d20.src = "./images/numbers/8.png";
  } else if (result === 9) {
    image_d20.src = "./images/numbers/9.png";
  } else if (result === 10) {
    image_d20.src = "./images/numbers/10.png";
  } else if (result === 11) {
    image_d20.src = "./images/numbers/11.png";
  } else if (result === 12) {
    image_d20.src = "./images/numbers/12.png";
  } else if (result === 13) {
    image_d20.src = "./images/numbers/13.png";
  } else if (result === 14) {
    image_d20.src = "./images/numbers/14.png";
  } else if (result === 15) {
    image_d20.src = "./images/numbers/15.png";
  } else if (result === 16) {
    image_d20.src = "./images/numbers/16.png";
  } else if (result === 17) {
    image_d20.src = "./images/numbers/17.png";
  } else if (result === 18) {
    image_d20.src = "./images/numbers/18.png";
  } else if (result === 19) {
    image_d20.src = "./images/numbers/19.png";
  } else if (result === 20) {
    image_d20.src = "./images/numbers/20.png";
  }

  twenties.push(result);
  d20Mean();
  medianFunction(twenties, median_d20);
}

/****************
 * MATH SECTION *
 ****************/
//D6 Roll Mean
function d6Mean() {
  let total = 0;
  for (let i = 0; i < sixes.length; i++) {
    total = total + sixes[i];
  }
  total = total / sixes.length;
  mean_d6.innerText = Math.round(total);
}
//Double 6's Roll Mean
function double6Mean() {
  let total = 0;
  for (let i = 0; i < doubleSixes.length; i++) {
    total = total + doubleSixes[i];
  }
  total = total / doubleSixes.length;
  mean_double.innerText = Math.round(total);
}
//12 Roll Mean
function d12Mean() {
  let total = 0;
  for (let i = 0; i < twelves.length; i++) {
    total = total + twelves[i];
  }
  total = total / twelves.length;
  mean_d12.innerText = Math.round(total);
}
//20 Roll Mean
function d20Mean() {
  let total = 0;
  for (let i = 0; i < twenties.length; i++) {
    total = total + twenties[i];
  }
  total = total / twenties.length;
  mean_d20.innerText = Math.round(total);
}

//median function one sizes fits all//

function medianFunction(array, id) {
  let evenMedian = [];
  let oddMedian = [];
  array.sort(function (a, b) {
    return a - b;
  });
  if (array.length % 2 === 0) {
    let total = 0;
    let medianTotal = 0;
    evenMedian.push(array[array.length / 2 - 1]);
    evenMedian.push(array[array.length / 2]);
    for (let i = 0; i < evenMedian.length; i++) {
      total = total + evenMedian[i];
    }
    medianTotal = Math.round(total / 2);
    id.innerText = medianTotal;
  } else {
    for (let i = 0; i < array.length / 2; i++) {
      oddMedian = array[i];
    }
    id.innerText = oddMedian;
  }
}
