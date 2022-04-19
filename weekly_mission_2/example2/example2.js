//Objeto de js

const woopa = {
    name: 'Woopa',
    mission: 'NodeJs',
    age: 12,
    color: 'pink'
}

//Crear clase
class Ajolonauta{
    constructor(name, mission, age, color){
        this.name = name;
        this.mission = mission;
        this.age = age;
        this.color = color;
    }
    getName(){
        return `${this.name}`
    }
    getMission(){
        return `${this.mission}`
    }
    getAge(){
        return `${this.age}`
    }
    getColor(){
        return `${this.color}`
    }

    sayHello(){
        return `Hello, my name is ${this.getName()} and I'm a ${this.getAge()} years old ${this.getColor()} ${this.getMission()}`
    }
}

console.log(Ajolonauta);

const woppy = new Ajolonauta('woppy', 'NodeJs', 12, 'green');
const wooppi = new Ajolonauta('woopi', 'Java', 16, 'red');
const wuppi = new Ajolonauta('wuppi', 'Python', 18, 'yellow');

const ajolonautas = [woppy, wooppi, wuppi];

ajolonautas.forEach(a =>{
    console.log(a.sayHello());
})