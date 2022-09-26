
const data = {
    frontend: 'Ivan',
    backend: 'Jonny',
    design: 'Yeicob',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);



const data2 = {
    frontend: 'Ivan',
    backend: 'Jonny',
    design: 'Yeicob',
}

const values = Object.values(data2);
console.log(values);


const string = 'Hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, '-----'))


const obj = {
name: 'ivan',
}

const helloWorld = () =>{
return new Promise((resolve, reject) => {
    (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
})
};


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();


//otra forma 

const anotherFunction = async () => {
    try {
        const hello =  await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();