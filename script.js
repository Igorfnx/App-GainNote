
let adicionar = document.getElementById("adicionar");
 let total = 0;

let lista = []

function Mostrar() {
    //limpar a lista antes de mostrar
    let mostrar = document.getElementById("lista");
    mostrar.innerHTML = "";

    //mostrar a lista
    lista.forEach((elemento, index) => {
        let li = document.createElement("li");
        li.textContent = elemento;
    

//ao clicar no cliente
    li.addEventListener("click", () => {
        li.classList.toggle("feito");

        // após 2 segundos remover o item da lista
        setTimeout(() => {
            lista.splice(index, 1);
            Mostrar();
        }, 2000);
    })
        mostrar.appendChild(li);
});
}


function Listar() {
    //pegar os valores do formulário
    let select = document.getElementById("tipo");
    let cliente = document.getElementById("nome").value;
    let serviço = select.options[select.selectedIndex].text;
    let horario = document.getElementById("horario").value;
    let Data = document.getElementById("data").value;
    
    let listar = cliente + " - " + serviço + " - " + horario + " - " + Data ;

    //adicionar na lista
    lista.push(listar);
     Calcular();
     Mostrar();
 
    
}
function Calcular() {

   //pegar o valor do serviço
    let select = document.getElementById("tipo");
    
    //somar ao total
    let valor = Number(select.value);
     total += valor;

     //mostrar o total
    document.getElementById("mostrar-lucro").innerHTML = total + ",00";

    
}
