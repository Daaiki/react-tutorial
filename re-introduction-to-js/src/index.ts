// console.log(3 / 2);
// console.log(Math.floor(3 / 2));
// console.log(0.1 + 0.2);

// console.log(parseInt('123', 10));
// console.log(parseInt('010', 10));

// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

const obj = {
  name: 'Carrot',
  _for: 'Max',
  details: {
    color: 'orange',
    size: 12,
  },
};

console.log(obj.details.color);
console.log(obj['details']['size']);

function avg(...args: number[]) {
  let sum = 0;
  for (const value of args) {
    sum += value;
  }
  return sum / args.length;
}
console.log(avg(2, 3, 4, 5));
