import readlineSync from "readline-sync";

let firstName = readlineSync.question ("waht is your first name");
let born = readlineSync.question ("What is your Birthyear?");
let cityBorn = readlineSync.question ("in which City you where Born?");
let city = readlineSync.question ("which city you live now");
let year = readlineSync.question ("the actuall year")

console.log(`hallo, mein name ist ${firstName}, ich wurde vor ${year - born} in ${cityBorn} geboren, jetzt lebe ich in ${city}`);