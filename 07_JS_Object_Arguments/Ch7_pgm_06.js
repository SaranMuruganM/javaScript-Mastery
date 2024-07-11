// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

var spaces = function (spaceLength) {
  var space = "                                         ";
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return space.substr(0, spaceLength);
};

let emptyBox = (width) => {
  let box;
  box = line(width) + "\n";
  box += line(1) + spaces(width - 2) + line(1) + "\n";
  box += line(1) + spaces(width - 2) + line(1) + "\n";
  box += line(1) + spaces(width - 2) + line(1) + "\n";
  box += line(width) + "\n";
  return box;
};

console.log(line(60));
console.log(line(40));
console.log(line(50));
console.log(emptyBox(9));
/* Further Adventures
 *
 * 1) Test line lengths from -20 to 60
 *    in steps of 10.
 *
 * 2) Define a spaces function that returns a string
 *    made up of a specified number of space characters.
 *    The line of spaces returned can have a length
 *    between 0 and 40.
 *
 * 3) Add an emptyBox function
 *    that draws an empty box of specified
 *    width and height 5.
 *
 *    emptyBox(12);
 *
 *    > ============
 *    > =          =
 *    > =          =
 *    > =          =
 *    > ============
 *
 */
