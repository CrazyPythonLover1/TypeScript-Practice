let x : string = " This is a String";

let y : number = 900;

x = " this different value";

let test = String(y)
console.log(typeof(test))

alert("Hi I am Learning Typescript")


// How to Deal with Function & Array

function printString(value : string) {
    alert(value);
}

const myConst = " TypeScript Function ";

printString(myConst);

// Pass Array 

function ShowingNumber(value : Array<string>) {
    for (let x = 0; x<value.length; x++) {
        alert(value[x])
    }
}

let myArray = [ "one", "two", "three"]

ShowingNumber(myArray);

// how to Use built id TypeScript type Enums 

// Enums Return a Int Number

enum Color {Red = 1, Green, Blue}

let green : Color = Color.Green;

alert(green);

alert(typeof green);

let myVar : string = Color[Color.Blue]
let myVar1 : number = Color.Blue

console.log("myVar: " + myVar);
console.log("myVar1: " + myVar1);


let m : any;

const n = "this is string";

const o = 1;

m = 0;

console.log(typeof m)
