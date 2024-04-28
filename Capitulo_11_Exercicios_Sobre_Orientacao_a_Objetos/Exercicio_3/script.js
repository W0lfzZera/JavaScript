class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set novaRua(novaRua) {
    return this.rua = novaRua;
  }

  set novoBairro(novoBairro) {
    return this.bairro = novoBairro;
  }

  set novaCidade(novaCidade) {
    return this.cidade = novaCidade;
  }

  set novoEstado(novoEstado) {
    return this.estado = novoEstado;
  }
}

let endereco = new Endereco("Rua Catanduva", "Jardim Leocádia", "Sorocaba", "São Paulo");

console.log(endereco);

endereco.novaRua = "Av. Nicola Caporrino";
endereco.novoBairro = "Residencial São Marcos";
endereco.novaCidade = "Tatuí";
endereco.novoEstado = "Roraima";

console.log(endereco);