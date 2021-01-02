let x = " This is a String";
let y = 900;
x = " this different value";
let test = String(y);
console.log(typeof (test));
alert("Hi I am Learning Typescript");
// How to Deal with Function & Array
function print(value) {
    alert(value);
}
const myConst = " TypeScript Function ";
print(myConst);
// Pass Array 
function ShowingNumber(value) {
    for (let x = 0; x < value.length; x++) {
        alert(value[x]);
    }
}
let myArray = ["one", "two", "three"];
ShowingNumber(myArray);
//# sourceMappingURL=test.js.map