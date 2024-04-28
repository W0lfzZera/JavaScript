const validandoData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validandoData.test("09/09/2004"));
console.log(validandoData.test("9/9/2004"));
console.log(validandoData.test("09-09-2004"));
console.log(validandoData.test("09/09/04"));