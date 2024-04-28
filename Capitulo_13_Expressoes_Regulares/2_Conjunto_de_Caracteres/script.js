const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));
console.log(reg1.test("Temos o numero 23"));

const reg2 = /[0-9]/

console.log(reg2.test("Temos o número 65"));
console.log(reg2.test("Temos o número"));