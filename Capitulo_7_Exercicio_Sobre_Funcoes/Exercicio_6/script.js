function verificar(dado) {
  if (dado === "string") {
    console.log("Este dado é uma String");
  } else if (dado === "number") {
    console.log("Este dado é um Number");
  } else if (dado === "boolean") {
    console.log("Este dado é um Boolean");
  }
}

verificar(typeof 19);
verificar(typeof "Hector");
verificar(typeof true);