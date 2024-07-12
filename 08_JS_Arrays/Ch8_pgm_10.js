// Using the arguments passed by forEach - compact

// ["Dax", "Jahver", "Kandra"].forEach(function (item, index, wholeArray) {
//   console.log("Item: " + item);
//   console.log("Index: " + index);
//   console.log("Array: " + wholeArray);
// });

let setwidthHeight = (name, width, height) => {
  return {
    name: name,
    width: width,
    height: height,
  };
};

let keyboard = setwidthHeight("keyboard", 40, 80);
let monitior = setwidthHeight("monitor", 40, 80);
let pad = setwidthHeight("pad", 40, 80);
let note = setwidthHeight("note", 40, 80);

let rectangleObjects = [keyboard, monitior, pad, note];
// console.log("rectangle " + rectangleObjects);

var getBorder = function () {
  return "================================";
};

let assignArea = (rectangle) => {
  rectangle.area = rectangle.width * rectangle.height;
};

let showInfo = (rectangle) => {
  let obj;
  obj = "\n" + "Name: " + rectangle.name;
  obj += "\n" + getBorder();
  obj += "\n" + "width: " + rectangle.width;
  obj += "\n" + "height: " + rectangle.height;
  obj += "\n" + "area: " + rectangle.area;
  obj += "\n" + getBorder();
  obj += "\n";
  console.log(obj);
};

rectangleObjects.forEach(assignArea);
rectangleObjects.forEach(showInfo);

/* Further Adventures
 *
 * 1) Create an array of rectangle objects.
 *    Each rectangle should have a length
 *    property and a width property.
 *
 * 2) Define an assignArea function that
 *    takes a rectangle as an argument and
 *    assigns an area property holding
 *    the area of the rectangle.
 *
 * 3) Define a showInfo function that
 *    takes a rectangle as an argument and
 *    displays its properties on the console.
 *
 * 4) Use forEach and your two functions
 *    to display info about each of
 *    the rectangles in the array.
 *
 */
