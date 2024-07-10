// Using the square function

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

let cube = function (numberToCube) {
  let result = numberToCube ** 3;
  console.log(
    numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result
  );
};

let squareRoot = function (num) {
  let result = Math.sqrt(num);
  console.log("Square root of " + num + " is " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

cube(5);
cube(-2);
cube(1111);
cube(0.5);

squareRoot(9);
squareRoot(81);
squareRoot(10);

/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */
