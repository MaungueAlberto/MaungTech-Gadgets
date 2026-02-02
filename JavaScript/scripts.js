const btnPrev = document.getElementById("setaEsquerda");
const btnNext  = document.getElementById("setaDireita");

const produto = document.querySelectorAll(".item"); //Pegar todos itens com a classe .item
const pontos = document.querySelectorAll(".ponto");
const numero = document.querySelector(".numberSituado");

const lista = document.querySelector(".MTGLista");


let activo = 0;
const total =produto.length;
console.log(total);

let TempoDeTroca;

function Atualizar(direccao){

    document.querySelector(".item.item_activo").classList.remove("item_activo"); //Pegar na div//item  que tem as  classes *item  e *item_activo. Depois remover a classe *item_activo

    document.querySelector(".ponto.ponto_activo").classList.remove("ponto_activo");


    if(direccao > 0){

        activo +=1;
        // console.log(activo)
    
        if(activo == total) {

        activo = 0;
        // console.log(activo)

    }
        } else if (direccao < 0){
        activo -=1;

        if(activo < 0){
            activo = total - 1;
        }

    }

    produto[activo].classList.add("item_activo");
    pontos[activo].classList.add("ponto_activo");

    numero.textContent = String(activo + 1).padStart(2,"0");
}

clearInterval(TempoDeTroca);
TempoDeTroca = setInterval(() => {
    Atualizar(1);
}, 6000);


btnPrev.addEventListener("click", () =>{
    Atualizar(-1) //Retrocede um item   
})

btnNext.addEventListener("click", () =>{
    Atualizar(1) //avança um item
}) 