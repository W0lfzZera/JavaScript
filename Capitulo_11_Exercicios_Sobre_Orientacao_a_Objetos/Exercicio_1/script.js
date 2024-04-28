class Banco {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    return this.saldo -= valor;
  }
}

let saldo = new Banco(1000);

console.log(saldo);

saldo.deposito(500);

console.log(saldo);

saldo.saque(700);

console.log(saldo);