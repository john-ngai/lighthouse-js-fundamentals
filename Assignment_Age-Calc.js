function ageCalculator(name, yearOfBirth, currentYear) {
  return `${name} is ${currentYear - yearOfBirth} years old.`;
}

console.log(ageCalculator('John', 1996, 2021));