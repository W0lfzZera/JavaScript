const cep = /\d{5}-\d{3}/;

console.log(cep.test("17856-481"));
console.log(cep.test("asd"));
console.log(cep.test("559-87"));
console.log(cep.test("4578961-8781717"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(15)99709-2762"));