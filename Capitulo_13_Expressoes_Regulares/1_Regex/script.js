const reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

let texto = "Tem bola na cesta";

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));
console.log(reg2.test(texto));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("1181851515151quadrado51515181871"));