const letrasMaiusculas = /^[A-Z]+$/;

console.log(letrasMaiusculas.test("Teste"));
console.log(letrasMaiusculas.test("teste"));
console.log(letrasMaiusculas.test("TESTE"));
console.log(letrasMaiusculas.test("TestE"));