//Paramtros por defectos 

//Como se trabajaba andes de es6
function newFunction(name, age, country){
    var name = name || "Ivan";
    var age = age || 21;
    var country = country || 'Panama';
    console.log(name, age, country);
}

//Como se trabaja ahora en es6
function newFunction2(name = 'ivan', age = 21, country = 'Panama'){
    console.log(name, age, country);
};

//llamado de la funcion 
//se puede llamar de dos formas 

newFunction2();
newFunction2('Yeicob', 34, 'CO');


//Concatenación antes de ES6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Concatenar ahora con ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);



//Multilineas en los stringsantes de ES6
let lorem = "loren fjfjff jgjggj rrtitti gggjgoddde ttjt tfkfkf\n"
+ "Otra frase epica que necesitamos.";

//nueva forma de ES6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


//Destructuración de elementos
let person = {
    'name': 'Ivan',
    'age': 21,
    'country': 'PA',
}
//acceder a los elementos de forma normal antes
console.log(person.name, person.age, person.country);

//como destructuramos los elementos en ES6
let{ name, age, country } = person;
console.log(name, country);


//Operador de propagación : que nos permite expandir de ciertas situaciones varios elementos

let team1 = ['Ivan', 'Yeicob', 'Jonny'];
let team2 = ['Jotta', 'Jafeth', 'Lili'];

//version ES6
//Los 3 puntos une los elementos en uno solo es decir que los trae 
let education = ['David', ...team1, ...team2];
console.log(education);

//var si se mantiene global en el codigo es decir se asigna de forma global
//Let = solo esta disponible en el scope es decir en el bloque de codigo donde lo estamos asignando

{
    var globalVar = "Global var";
}

{
    let globalLet = "Global let";
    console.log(globalLet);//aquí si funciona 
}

console.log(globalVar);
console.log(globalLet);//aquí no funciona 


//Const = lo que nos permite es establecer una variable pero si queremos reacignar no nos deja ya que es una constante y no nos deja cambiar su valor.
const a = 'b';
a = 'a';


//Propiedad de objetos mejoradas

let name = 'Ivan';
let age = 21;

//antes se creaba objetos de esta forma 
obj = {name: name, age: age };

//nueva forma de ES6
obj2 = {name, age};
console.log(obj2);


//Arrow funtion tieneuna sintaxis mas reducida

const names = [
    {name: 'Ivan', age: 21},
    {name: 'Yeicob', age: 7},
]

//iteramos como se hacia antes 
let listOfNames = names.map(function(item){
    console.log(item.name);
});

//ahora iteramos con arrow function con ES6
let listOfNames2 = names.map(item => console.log(item.age));

//Otra forma de ver arrow function
const listOfNames3 = (name, age, country) => {
    ...
}

//otra manera 
const listOfNames4 = name =>{
    ...
}

//otra mas 

const square = num => num * num;


//Promesas lo cual vamos a trabajar el asincornismo 

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('HEY!!');
        }else{
            reject('UPSS!!');
        }
    });
}

//ejecutamos la promesa
helloPromise()
    .then(response => console.log(response))
    .then(( )=> console.log('Hola'))
    .catch(error => console.log(error));



    //Clases
    class calculator {
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        //metodo 
        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    //lo utilizamos '
    const calc = new calculator();
    console.log(calc.sum(2,19));


    //import y export basicamente es trabajar con modulos 
    import { hello } from './module.js';

    hello();


    //Generators = es una funcion especial que retorna una serie de valores según el algoritmo definido 
    function* helloWorld(){
        if(true){
            yield 'Hello, ';
        }
        if (true) {
            yield 'World';
        }
    };

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    