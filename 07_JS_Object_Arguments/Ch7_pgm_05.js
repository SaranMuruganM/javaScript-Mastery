// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

let showLargest=(num1,num2)=>{
    console.log("Largest number is "+Math.max(num1,num2));
}

let showSmallest=(num1,num2,num3)=>{
    console.log("Smallest number is " +Math.min(num1,num2,num3));
}

showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(-70, 2);
showLargest(-70, 10);
showSmallest(70, 2,5);



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */