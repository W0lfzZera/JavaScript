const idade = 17;
const cnh = false;

if(idade >= 18 && cnh == false)
{
    console.log("Não está apto para dirigir, mas pode fazer a CNH");
}
else if(idade >= 18 && cnh == true)
{
    console.log("Está apto para dirigir");
}
else
{
    console.log("Não está apto para dirigir");
}