const marca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marca.test("Marca: Nike"));
console.log(marca.test("Marca: asd"));
console.log(marca.test("Adidas"));
console.log(marca.test("Marca: Puma"));
console.log(marca.test("Marca: asics"));