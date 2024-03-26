// class Cricketer{
//     #name;
//     #age;
//     #centuries;
//     constructor(name, age, centuries){
//         this.#name = name;
//         this.#age = age;
//         this.#centuries = centuries;
//     }
//     getPlayerDetails(){
//         return `${this.#name} is ${this.#age} years old`;
//     }
// }
// class Footballer{
//     #name;
//     #age;
//     #goals;
//     constructor(name, age, goals){
//         this.#name = name;
//         this.#age = age;
//         this.#goals = goals;
//     }
//     getPlayerDetails(){
//         return `${this.#name} is ${this.#age} years old`;
//     }
// }

// here is the example of inheritance
// class Player{
//     #name;
//     #age;
//     constructor(name, age){
//         this.#name = name;
//         this.#age = age;
//     }
//     getPlayerDetails(){
//         return `${this.#name} is ${this.#age} years old`;
//     }
// }
// class Cricketer extends Player{
//     #centuries;
//     constructor(name, age, centuries){
//         super(name, age);
//         this.#centuries = centuries;
//     }
// }
// class Footballer extends Player{
//     #goals;
//     constructor(name, age, goals){
//         super(name, age);
//         this.#goals = goals;
//     }
// }
// const tareq = new Cricketer('Md. Tareq Munawar', 28, 10);
// console.log(tareq.getPlayerDetails());