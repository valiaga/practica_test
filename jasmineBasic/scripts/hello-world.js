var HolaMundo = function () {
    return 'Hola mundo';
}

if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = HolaMundo;
}