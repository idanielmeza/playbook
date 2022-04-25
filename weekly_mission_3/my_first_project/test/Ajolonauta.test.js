const Ajolonatua = require('../app/Ajolonauta');

describe('Pruebas de unidad Ajolonatua',()=>{
    it('Caso de prueba 1: Creacion de objeto',()=>{
        //Aqui se utiliza el codigo
        const mati = new Ajolonatua('mati');


        //Validar el resultado esperado
        expect(mati.name).toBe('mati');
    });
})