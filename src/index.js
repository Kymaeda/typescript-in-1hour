console.log('OK');
var age = 11;
if (age > 20)
    'adult';
// Array
var numbers = [1, 2, 3];
// tuple
var user1 = [1, 'kyohei'];
// enum
// NOTE: use PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size.Small);
