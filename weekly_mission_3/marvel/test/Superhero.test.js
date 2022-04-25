const Superhero = require('../app/Superhero');

describe('Unit Test for Superhero', () => {
    test('Caso 1: Get a superhero', () => {
        const spiderman = new Superhero('Spiderman','Peter Porky','Oscar Matias');

        expect(spiderman.name).toBe('Spiderman');
        expect(spiderman.actor).toBe('Oscar Matias');
        expect(spiderman.heroName).toBe('Peter Porky');

    });
});