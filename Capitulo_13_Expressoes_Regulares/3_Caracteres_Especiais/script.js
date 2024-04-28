const pontoRegex = /./; // Aceita tudo

console.log(".")

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("152"));
console.log(pontoRegex.test("adad152"));

console.log("\n \\d");

const dRegex = /\d/; // [0-9]

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("152"));
console.log(dRegex.test("adad152"));

console.log("\n \\D");

const dRegex2 = /\D/; //[^0-9]

console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("152"));
console.log(dRegex2.test("adad152"));

console.log("\n \\s");

const sRegex = /\s/; // Qualquer caracter com espaço

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("152"));
console.log(sRegex.test("adad152"));

console.log("\n \\S");

const sRegex2 = /\S/; // Qualquer caracter sem espaço

console.log(sRegex2.test("asd"));
console.log(sRegex2.test(" "));
console.log(sRegex2.test("152"));
console.log(sRegex2.test("adad152"));

console.log("\n \\w");

const wRegex = /\w/; // Apenas alfanuméricos

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("152"));
console.log(wRegex.test("adad152"));

console.log("\n \\W");

const wRegex2 = /\W/; // Apenas não alfanuméricos

console.log(wRegex2.test("asd"));
console.log(wRegex2.test(" "));
console.log(wRegex2.test("152"));
console.log(wRegex2.test("adad152"));