let calculadora = {
  soma: function (num1, num2) {
    console.log(num1 + num2);
  },
  subtrair: function (num1, num2) {
    console.log(num1 - num2);
  },
  multiplicar: function (num1, num2) {
    console.log(num1 * num2);
  },
  dividir: function (num1, num2) {
    console.log(num1 / num2);
  },
};

calculadora.soma(4, 8);
calculadora.subtrair(4, 8);
calculadora.multiplicar(4, 8);
calculadora.dividir(4, 8);