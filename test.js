let x = " This is a String";
let y = 900;
x = " this different value";
let test = String(y);
console.log(typeof (test));
alert("Hi I am Learning Typescript");
// How to Deal with Function & Array
function printString(value) {
    alert(value);
}
const myConst = " TypeScript Function ";
printString(myConst);
// Pass Array 
function ShowingNumber(value) {
    for (let x = 0; x < value.length; x++) {
        alert(value[x]);
    }
}
let myArray = ["one", "two", "three"];
ShowingNumber(myArray);
// how to Use built id TypeScript type Enums 
// Enums Return a Int Number
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let green = Color.Green;
alert(green);
alert(typeof green);
let myVar = Color[Color.Blue];
let myVar1 = Color.Blue;
console.log("myVar: " + myVar);
console.log("myVar1: " + myVar1);
let m;
const n = "this is string";
const o = 1;
m = 0;
console.log(typeof m);
//# sourceMappingURL=test.js.map