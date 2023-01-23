console.log('OK')
let age: number = 11;
if (age > 20)
  'adult'

// Array
let numbers: number[] = [1, 2, 3]

// tuple
let user1: [number, string] = [1, 'kyohei']

// enum
// NOTE: use PascalCase
enum Size { Small, Medium, Large }
console.log(Size.Small)

// functions
const calcTax = (price: number, year = 2021): number => {
  if (year >= 2022) return Math.floor(price * 1.1);
  return price
};
const result = calcTax(100, 2022)
console.log(result)

const result_2021 = calcTax(100)
console.log(result_2021);

