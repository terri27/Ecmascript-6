
const obj = {
    name: 'Ivan',
    age: 21,
    country: 'PA',
}

let {name, ...all } = obj;
console.log(name, all);


//Propiedades de propagación con ellas vamos a poder unir uno o dos o tres o n elementos queramos de objetos a un nuevo objeto 
const obj1 = {
    name: 'Ivan',
    age: 21,
    
}

const obj2 = {
    ...obj1,
    country: 'PA',
}

console.log(obj2);



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ?setTimeout(() => resolve('Hello World'), 3000)
            :reject(new Error('Test error'))
    });
};

//la llamamos 
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))
    //nueva forma de llamar a lo que termino


    const regetData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regetData.exec('2018-04-20');
    const year = match[1]
    const month = match[2]
    const day = match[3]

    console.log(year, month, day);