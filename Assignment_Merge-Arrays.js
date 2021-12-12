/*
Define a function called merge

The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.

For example:
  merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]); // Output: [ 1, 2, 3, 4, 4, 5, 6 ]
  merge([ 4 ], [ 2, 5, 8 ]); // Output: [ 2, 4, 5, 8 ]
  merge([ 1, 2, 6 ], []); // Output: [ 1, 2, 6 ]
*/

let minutes = 10;

const merge = (arrayOne, arrayTwo) => {
  const newArray = [];
  for (const a in arrayOne) {
    newArray.push(arrayOne[a]);
  }
  for (const b in arrayTwo) {
    newArray.push(arrayTwo[b]);
  }
  newArray.sort();
  return newArray;
}

// merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);

// You may paste the following code after your function definition to help you verify it works correctly:
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

console.log(`\nIt took me ${minutes} minutes to complete this assignment. -mrjohnming`)