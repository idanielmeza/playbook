console.log('Creacion de un objeto con propiedades');

const mySecondObject = {
    name: 'Daniel',
    age: 22,
    mission: 'NodeJs',
    stack: ['NodeJs', 'ReactJs', 'Python', 'Django', 'FastAPI'],
    blog: {
        url: 'github.com/idanielmeza/blog',
        posts: 5
    }
}

console.log('Accediendo a las propiedades del objecto');

console.log(mySecondObject.name);
console.log(mySecondObject['name']);

console.log('Ejemplo con metodos');
const ajolonauta ={
    name: 'Ajolonga',
    mission: 'NodeJs',
    sayHello: ()=>{
        console.log('soy un ajolonauta')
    },
    tellMeMore: function(){
        return(`Alojonauta: ${this.name}`)
    }
};



console.log('Ajolonauta');
ajolonauta.sayHello();
console.log(ajolonauta.tellMeMore());