// const age = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i= 0; i < age.length; i++){
//     const element = age [i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

const numbers = [3, 4, 5, 6, 7, 8];
// function square (element){
//     return element * element;
// }
const square = element => element * element;
// const result = numbers.map(function(element){
//     return element * element;
// })
const result = numbers.map(element => element * element);
console.log(result);

const bigger = numbers.filter(element => element > 6);
console.log(bigger);















