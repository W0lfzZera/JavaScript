let cachorro = {
  patas: 4,
  raca: "",
  latir: function () {
    console.log("Au Au");
  },
};

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.labrador);

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.raca);