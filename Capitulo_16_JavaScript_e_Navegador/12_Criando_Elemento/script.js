let lista = document.createElement("ul");

for (let i = 0; i < 5; i++) {
  let item = document.createElement("li");

  let texto = document.createTextNode("texto lista " + i);

  lista.appendChild(texto);

  lista.appendChild(item);
}

let container = document.getElementById("container-principal");

container.appendChild(lista);
