const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(nottoaz.test("Aqui tem a"));
console.log(nottoaz.test("asd"));
console.log(nottoaz.test("2324"));
console.log(nottoaz.test("2324dda"));