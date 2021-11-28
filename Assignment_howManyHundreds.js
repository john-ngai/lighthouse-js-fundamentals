function howManyHundreds(num) {
  if (num % 100 !== 0) {
    return (num - (num % 100)) / 100;
  } else {
    return num / 100;
  }
}

console.log(howManyHundreds(894));
