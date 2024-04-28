class ContaBancaria {
  constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  deposito(valor) {
    this.saldoCorrente += valor;
  }
  saque(valor) {
    this.saldoCorrente -= valor;
  }
  poupancaCorrente(valor) {
    this.saldoCorrente += valor;
    this.saldoPoupanca -= valor;
  }
  correntePoupanca(valor) {
    this.saldoCorrente += valor;
    this.saldoPoupanca -= valor;
  }
  jurosAniversario() {
    let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
    this.saldoPoupanca += juros;
  }
}

class ContaEspecial extends ContaBancaria {
  constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
    super(saldoCorrente, saldoPoupanca, jurosPoupanca * 2);
  }
}

let conta = new ContaBancaria(1000, 500, 5);

console.log(conta);

conta.deposito(200);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.poupancaCorrente(100);

console.log(conta);

conta.correntePoupanca(50);

console.log(conta);

conta.jurosAniversario();

console.log(conta);

let conta2 = new ContaEspecial(5000, 1000, 9);

console.log(conta2);
