/*adicionar quantidade no carrinho*/ 


const numero = document.querySelector("#quantidadecarrinho"); 


function somar(){
    let carrinho = parseInt(numero.innerText);
  
    carrinho += 1;
    numero.innerText = carrinho

}

function subtrair(){
    let carrinho = parseInt(numero.innerText);
  
    carrinho -= 1;

    numero.innerText = carrinho

    if (carrinho === -1){ /*verifica se o carrinho está negativo, 
                            se estiver soma 1 para se manter em 0*/
        carrinho += 1;
        numero.innerText = carrinho
    }


    
}

