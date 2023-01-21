
    let botao = document.querySelector('button')
    botao.addEventListener('click', gerar)
    
function gerar(){
    let numero = document.getElementById('tabValue')
    let tabuada = document.getElementById('tab')
         
   
    if (numero.value.length == 0){
        alert('Digite um número ')

    } else{
        numero = Number(numero.value) 
        for (let cont = 1; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text =  `${numero} * ${cont} = ${numero * cont}`
    
            tabuada.appendChild(item)   
    
        }    

    }
   
}


