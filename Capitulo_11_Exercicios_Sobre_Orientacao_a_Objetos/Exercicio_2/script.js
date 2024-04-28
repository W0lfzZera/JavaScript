class Carrinho {
  constructor(itens, quantidadeTotal, valorTotal) {
    this.itens = itens;
    this.quantidadeTotal = quantidadeTotal;
    this.valorTotal = valorTotal;
  }

  adicionarItens(novoItem) {
    let contador = false;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == novoItem.id) {
        this.itens[itemCarrinho].quantidade += novoItem.quantidade;
        contador = true;
      }
    }

    if (contador === false) {
      this.itens.push(novoItem);
    }

    this.quantidadeTotal += novoItem.quantidade;
    this.valorTotal += novoItem.valor * novoItem.quantidade;
  }

  removerItens(novoItem) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == novoItem.id) {
        let objeto = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function (objeto) {
          return objeto.id == novoItem.id;
        });
        
        this.quantidadeTotal -= this.itens[itemCarrinho].quantidade;
        this.valorTotal -= this.itens[itemCarrinho].valor * this.itens[itemCarrinho].quantidade;
        
        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "Bola",
      quantidade: 2,
      valor: 35,
    },
    {
      id: 2,
      nome: "Camisa",
      quantidade: 3,
      valor: 100,
    },
    {
      id: 3,
      nome: "Tenis",
      quantidade: 1,
      valor: 250,
    },
  ],
  6,
  620
);

console.log(carrinho);

carrinho.adicionarItens({ id: 1, nome: "Bola", quantidade: 1, valor: 35 });

console.log(carrinho);

carrinho.adicionarItens({ id: 4, nome: "Calça", quantidade: 2, valor: 75 });

console.log(carrinho);

carrinho.removerItens({ id: 2, nome: "Camisa", valor: 100 });

console.log(carrinho);