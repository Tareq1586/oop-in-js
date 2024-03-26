// procedural way
// let name = 'Md. Tareq Munawar';
// let birthday = '1995-04-17';
// let monthlySalary = 15000;
// let noOfMonths = 12;
// function calculate_age(dob){
//     const diff_ms = Date.now() - new Date(dob).getTime();
//     const age_dt = new Date(diff_ms);
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
// function getSalary(monthlySalary, noOfMonths){
//     return (monthlySalary * noOfMonths).toLocaleString();
// }
// console.log(calculate_age(birthday));
// console.log(getSalary(monthlySalary, noOfMonths));

// encapsulated way
// const sakib = {
//     name: 'Md. Tareq Munawar',
//     birthday: '1995-04-17',
//     monthlySalary: 15000,
//     noOfMonths: 12,
//     calculate_age(){
//         const diff_ms = Date.now() - new Date(this.birthday).getTime();
//         const age_dt = new Date(diff_ms);
//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     },
//     getSalary(){
//         return (this.monthlySalary * this.noOfMonths).toLocaleString();
//     },
// }
// console.log(sakib.calculate_age());
// console.log(sakib.getSalary());

// using class
// class Player{
//     constructor(name, birthday, monthlySalary, noOfMonths){
//         this.name = name;
//         this.birthday = birthday;
//         this.monthlySalary = monthlySalary;
//         this.noOfMonths = noOfMonths;
//     }
//     calculate_age(){
//         const diff_ms = Date.now() - new Date(this.birthday).getTime();
//         const age_dt = new Date(diff_ms);
//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     }
//     getSalary(){
//         return (this.monthlySalary * this.noOfMonths).toLocaleString();
//     }
// }
// const tareq = new Player('Md. Tareq Munawar', '1995-04-17', 15000, 12);
// const tauky = new Player('Maruf Hasan', '1996-01-01', 20000, 12);
// console.log(tareq.calculate_age());
// console.log(tauky.getSalary());

// making property private
// class Player{
//     #name;
//     #birthday;
//     #noOfMonths;
//     #monthlySalary;
//     constructor(name, birthday, monthlySalary, noOfMonths){
//         this.#name = name;
//         this.#birthday = birthday;
//         this.#monthlySalary = monthlySalary;
//         this.#noOfMonths = noOfMonths;
//     }
//     calculate_age(){
//         const diff_ms = Date.now() - new Date(this.#birthday).getTime();
//         const age_dt = new Date(diff_ms);
//         return Math.abs(age_dt.getUTCFullYear() - 1970);
//     }
//     getSalary(){
//         return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
//     }
// }
// const tareq = new Player('Md. Tareq Munawar', '1995-04-17', 15000, 12);
// console.log(tareq.birthday);
// console.log(tareq.calculate_age());


