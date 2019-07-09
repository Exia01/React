class Human{
    constructor() {
        this.species = 'Homo Sapiens'
    }
    printSpecies() {
        console.log(this.species)
    }
}

class Person extends Human{
    constructor() {
        super()
        this.name = "Josh"
    }
    printName() {
        console.log(this.name)
    }
}

const person = new Person()
person.printSpecies()
person.printName()


//newer format
class Kaiju { // using without constructor can assign properties and methods direclty
    canFly: true
    type = ''
    mythical = 'true'
    fly = `${this.canFly} on fly ability`
    printAbility = () => {
        console.log(this.fly)
    }
}

class BBdragon extends Kaiju{
    type = "Dragon"
    printMythicalType = () => {
        console.log(this.mythical)
    }
}

dragonite = new BBdragon()
dragonite.printMythicalType()