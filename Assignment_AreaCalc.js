function calculateRectangleArea(length, width) {
  if (length * width <= 0) {
    return undefined;
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height) {
  if ((base * height) / 2 <= 0) {
    return undefined;
  } else {
    return (base * height) / 2;
  }
}

function calculateCircleArea(radius) {
  if (radius <= 0) {
    return undefined;
  } else {
    return Math.PI * Math.pow(radius, 2);
  }
}

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined