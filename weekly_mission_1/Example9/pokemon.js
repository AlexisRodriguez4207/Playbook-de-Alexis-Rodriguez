class Pokemon {
  constructor (name) {
    this.count = 0;
    this.name = name;
    }

    // SayHello
    sayHello () {
        console.log(`Mi Pokemon ${this.name} te saluda!!!`)
    } 
    
    // SayMessage
    sayMessage (message) {
        console.log(`Mi Pokemon ${this.name} dice: ${message}`)
    }
}

// Exportar clase en este modulo
module.exports = Pokemon

