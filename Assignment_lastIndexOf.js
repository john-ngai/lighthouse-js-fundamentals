function lastIndexOf(array, value) {
  let i = array.length - 1; // i = 2
  while (i >= 0) {
    if (array[i] === value ) {
      return i;
    }
    i--;
  }
  return -1;
}

console.log(
  lastIndexOf([ 5, 5, 5 ], 5)
);