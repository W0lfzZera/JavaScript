let onibus = {
  rodas: 8,
  limitePassageiros: 40,
  portas: 2,
};

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus.janelas);
console.log(onibus.rodas);