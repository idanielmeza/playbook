const MissionCommander = require('../app/missionCommander');

describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
      const result = 1 + 2 
      expect(result).toBe(10);
    });

    test('Caso de prueba 2', () => {
      const danny = new MissionCommander('Danny');
        expect(danny.name).toBe('Danny');
    });
  })
  