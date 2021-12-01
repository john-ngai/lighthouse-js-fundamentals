function concat(array1, array2) {
  const newArray = [];
  for (const index1 in array1) {
    newArray.push(array1[index1]);
  }
  for (const index2 in array2) {
    newArray.push(array2[index2]);
  }
  return newArray;
}

console.log(
  concat([ 5, 10 ], [])
);