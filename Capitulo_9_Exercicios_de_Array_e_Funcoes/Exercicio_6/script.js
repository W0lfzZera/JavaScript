let numeros1 = [1, 4, 6, 7, 3, 4, 6, 3];
let numeros2 = [9, 3, 5];

function verificarTamanho(num) {
  if (num.length < 5) {
    console.log("Poucos elementos");
  } else if (num.length > 5) {
    console.log("Muitos elementos");
  }
}

verificarTamanho(numeros1);
verificarTamanho(numeros2);