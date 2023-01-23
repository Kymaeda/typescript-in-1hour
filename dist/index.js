"use strict";
console.log('OK');
let age = 11;
if (age > 20)
    'adult';
let numbers = [1, 2, 3];
let user1 = [1, 'kyohei'];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size.Small);
const calcTax = (price, year = 2021) => {
    if (year >= 2022)
        return Math.floor(price * 1.1);
    return price;
};
const result = calcTax(100, 2022);
console.log(result);
const result_2021 = calcTax(100);
console.log(result_2021);
//# sourceMappingURL=index.js.map