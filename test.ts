let x : string = " This is a String";

let y : number = 900;

x = " this different value";

let test = String(y)
console.log(typeof(test))

alert("Hi I am Learning Typescript")


// How to Deal with Function & Array

function print(value : string) {
    alert(value);
}

const myConst = " TypeScript Function ";

print(myConst);

// Pass Array 

function ShowingNumber(value : Array<string>) {
    for (let x = 0; x<value.length; x++) {
        alert(value[x])
    }
}

let myArray = [ "one", "two", "three"]

ShowingNumber(myArray);