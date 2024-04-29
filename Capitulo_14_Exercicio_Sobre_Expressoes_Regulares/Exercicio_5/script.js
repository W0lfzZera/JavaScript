const nome = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(nome.test("w0lf904"));
console.log(nome.test("w0lf_904"));
console.log(nome.test("W0lf904"));