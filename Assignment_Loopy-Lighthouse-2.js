/*
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.

  - range should be an array of 2 numbers representing the start and end values for the loop.
  - multiples should be an array of 2 numbers representing the multiples you want to replace with words.
  - words should be an array of 2 strings representing the words that will replace the multiples.

For example, say we called the function with the following arguments:

  loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
*/

let minutes = 30;
let numStart, numEnd, multipleOne, multipleTwo, wordOne, wordTwo;

const findRange = range => {
  for (const i in range) {
    if (i === '0') {
      numStart = range[i];
    } else if (i === '1') {
      numEnd = range[i]
    }
  }
}

const findMultiples = multiples => {
  for (const i in multiples) {
    if (i === '0') {
      multipleOne = multiples[i];
    } else if (i === '1') {
      multipleTwo = multiples[i]
    }
  }
}

const findWords = words => {
  for (const i in words) {
    if (i === '0') {
      wordOne = words[i];
    } else if (i === '1') {
      wordTwo = words[i]
    }
  }
}

const initLoop = () => {
  for (let i = numStart; i <= numEnd; i++) {
    if (i % multipleOne === 0 && i % multipleTwo === 0) {
      console.log(`${wordOne}${wordTwo}`);
    } else if (i % multipleOne === 0) {
      console.log(`${wordOne}`);
    } else if (i % multipleTwo === 0) {
      console.log(`${wordTwo}`);
    } else {
      console.log(i);
    }
  }
}

const loopyLighthouse = (range, multiples, words) => {
  findRange(range);
  findMultiples(multiples);
  findWords(words);
  initLoop();
}

loopyLighthouse([1, 10], [2, 3], ['John', 'Denver']);

console.log(`\nIt took me ${minutes} minutes to complete this assignment. -mrjohnming`)