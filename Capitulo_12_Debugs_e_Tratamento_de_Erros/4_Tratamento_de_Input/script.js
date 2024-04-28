function checarNumero(num) {
  let numero = Number(num);
  if(Number.isNaN(numero)) {
    alert("Por favor, passe só número para o programa");
  } else {
    return numero;
  }
}

console.log(checarNumero(39));
checarNumero("Fogão");

let numero = prompt("Digite um numero");

checarNumero(numero);