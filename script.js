
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

    //formatar a data ⬇️
    let Data = formatData(document.getElementById("data").value);
    
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

//formatar a data para o formato brasileiro
function formatData(data){
    // o split separa a string em partes, usando o "-" como separador
    let partes = data.split("-");
    // o return junta as partes na ordem desejada, usando "/" como separador, no caso isso vira uma array com 3 partes: [0] = ano, [1] = mês, [2] = dia.
    return partes[2] + "/" + partes[1] + "/" + partes[0];
} 
/*function menurotate(){
    document.querySelector(".menu").classList.toggle("ativo");
}*/
function toggleLeque() {
    document.querySelector(".leque").classList.toggle("ativo");
    document.querySelector(".menu-icon").classList.toggle("ativo");
}
