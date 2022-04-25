const Spiderman = require('../app/Spiderman');

describe("Unit test for spiderman class", () => {
    test('1.- Create an spiderman object',()=>{
        //Instanciar un objecto spiderman con la siguiente información:
        
        const tomHolland = new Spiderman('Spiderman Avenger', 20,'Tom Holland', 3,'Sony/Marvel');
        expect(tomHolland.name).toBe('Spiderman Avenger');
        expect(tomHolland.age).toBe(20);
        expect(tomHolland.realName).toBe('Tom Holland');
        expect(tomHolland.movies).toBe(3);
        expect(tomHolland.company).toBe('Sony/Marvel');
    })

    test('2.- Create a method getInfo()',()=>{
        //Crear un método getInfo() que retorne un string con la información del objeto
        const tomHolland = new Spiderman('Spiderman Avenger', 20,'Tom Holland', 3,'Sony/Marvel');
        expect(tomHolland.getInfo()).toBe('Hey , Im Spiderman Avenger from Sony/Marvel');
    })

})