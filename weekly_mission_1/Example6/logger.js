class Logger{
    constructor(name){
        this.count = 0;
        this.name = name
    }

    log(message){
        this.count++; //Se aumenta el contador interno al llamar este método
        console.log('['+this.name+ ']: ' + message)
    }
}

module.exports = new Logger('Default') //Instaciacion del Objetoy se exporta
module.exports.Logger = Logger //Clase
