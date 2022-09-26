let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(3));

let array1 = [1,2,3,4,5];

console.log(array1.flatMap( value => [value, value * 2]));

let hello = '        helllo world';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello world       ';
console.log(hello2);
console.log(hello2.trimEnd());



try {
    
} catch {
    error
}

let entries = [["name", "ivan"], ["aage", 21]];
console.log(Object.fromEntries(entries));



let mySymbol = 'my symbol';
let symbol =  Symbol(mySymbol);
console.log(symbol.description);