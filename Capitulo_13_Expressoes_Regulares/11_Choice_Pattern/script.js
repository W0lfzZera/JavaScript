const reg = /\w+: (Hector|Matheus|Maria)/;

console.log(reg.test("Nome: Hector"));
console.log(reg.test("Nome: Miguel"));
console.log(reg.test("Nome: Maria"));