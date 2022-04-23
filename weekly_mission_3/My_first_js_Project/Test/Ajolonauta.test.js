const Ajolonauta = require('./../App/Ajolonauta')

describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de Prueba 1: Creacion de objeto', () => { 

        // Aqui puedes usar el codigo como lo deseas utilizar 
        const woopa = new Ajolonauta("Woopa")
        
        // Validar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})