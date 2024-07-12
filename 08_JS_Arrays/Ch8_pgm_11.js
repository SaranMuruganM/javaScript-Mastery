// Finding the total shopping bill

var getTotalBill = function (items) {
  let info={
	total:0,
	counts:0
  }
  items.forEach(function (cost, i) {
  	info.total += cost.cost*cost.numberBought;
  });

  items.forEach((count) => {
    info.counts++;
  });

  return info;
};

let items = [
  { cost: 1.99, numberBought: 2 },
  { cost: 4.95, numberBought: 9 },
  { cost: 3.6, numberBought: 2 },
  { cost: 8.2, numberBought: 2 },
  { cost: 9.5, numberBought: 4 },
  { cost: 1, numberBought: 3 },
];
// var costs = [1.99, 4.95, 2.5, 9.87, 10.5];
// var numOfEach = [2, 1, 5, 2, 6];
let objinfo=getTotalBill(items);
console.log("The total cost is $" +objinfo.total);

/* Further Adventures
 *
 * 1) Add an extra item to the shopping trip.
 *
 * 2) Change the function so that forEach iterates
 *    over itemCounts instead of itemCosts.
 *    Can you make it work?
 *
 * 3) Create a single array of objects with
 *    cost and numberBought properties.
 *
 *    items = [ { cost: 1.99, numberBought: 2 },
 *              { cost: 4.95, numberBought: 1 } ];
 *
 * 4) Update getTotalBill to accept a single array
 *    of items.
 *
 */
