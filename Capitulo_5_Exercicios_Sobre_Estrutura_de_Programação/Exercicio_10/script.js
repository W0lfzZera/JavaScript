let numero = prompt("Qual o número deseja?");
let primo = false;

if(numero > 1)
{
    for(let i = 2; i < numero; i++)
    {
        if(numero % i == 0)
        {
            primo = true;
            break;
        }
    }
    if(primo == true)
    {
        console.log(`O número ${numero} não é primo`);
    }
    else
    {
        console.log(`O número ${numero} é primo`);
    }
}
else
{
    console.log(`O número ${numero} não é primo`);
}