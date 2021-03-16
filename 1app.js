// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./1names");
const sayHi = require("./1utils");
const data = require("./1alternate");

// console.log(names);
sayHi("Ivan");
sayHi(names.john);
console.log(data);
