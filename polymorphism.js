class Player{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    getName(){
        return this.#name;
    }
    getAge(){
        return this.#age;
    }
    getPlayerDetails(){
        return `${this.#name} is ${this.#age} years old`;
    }
}
class Cricketer extends Player{
    #centuries;
    constructor(name, age, centuries){
        super(name, age);
        this.#centuries = centuries;
    }
    getPlayerDetails(){
        return `${this.getName()} এর বয়স ${this.getAge()} বছর`;
    }
}
class Footballer extends Player{
    #goals;
    constructor(name, age, goals){
        super(name, age);
        this.#goals = goals;
    }
}
const tamim = new Cricketer('Tamim Iqbal', 36, 10);
console.log(tamim.getPlayerDetails());