const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com.br"));
console.log(validaDominio.test("www.facebook.br"));
console.log(validaDominio.test("udemy.com"));
