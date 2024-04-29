const validarId = /\d+ID\b/; // \b Informa que tal palavra deve estar no final da string

console.log(validarId.test("134849id"));
console.log(validarId.test("134849ID"));
console.log(validarId.test("134849Id"));
console.log(validarId.test("134849"));