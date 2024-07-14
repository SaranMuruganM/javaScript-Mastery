const a = [4, 5, 8, 9,4]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Find a union b
// Find a intersection b
// Find a with b
union=[...a,...b]
let uniques=[... new Set(union)]
console.log(`a union b : ${uniques}`);

let B=new Set(b)
let intersection=[... new Set(a.filter(item=>B.has(item)))];
console.log(intersection);
console.log(`a intersection b : ${uniques}`);

let difference=[... new Set(a.filter(item=>!B.has(item)))];
console.log(difference);
console.log(`a difference b : ${uniques}`);



