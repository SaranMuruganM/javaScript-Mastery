// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var index = dayInWeek - 1;
  var visitorReport;

  visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
  visitorReport += "on " + days[index];

  return visitorReport;
};

var visitors = [354, 132, 210, 221, 481, 333, 765];

var report = getVisitorReport(visitors, 5);

// console.log(report);

let week1 = visitors;
let week2 =[354, 13, 210, 221, 481, 783, 7];
let week3 =[3, 132, 21, 221, 481, 33, 7];
let week4 =[354, 132, 210, 22, 1, 43, 765];
let month = [week1, week2, week3, week4];

let getReports = (month, week, day) => {
  return getVisitorReport(month[week-1],day)
};

console.log(getReports(month,3,3));

/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */
