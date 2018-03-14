// var HolaMundo = require('../../scripts/hello-world.js');

describe('Test para Hola mundo', function () {
    it('Para verificar que puede devolver un saludo', () => {
        expect(HolaMundo())
            .toEqual('Hola mundo');
    });
    it('test', function () {
        expect(true).toEqual(true)
    })
});