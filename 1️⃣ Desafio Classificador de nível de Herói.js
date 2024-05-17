// Capturando o elemento do botão da página html, através do getElementById, informando o Id
const btnSalvar = window.document.getElementById("btn_salvar")

// Capturando o elemento p da página html, através do get
let paragrafo = window.document.querySelector("p#status")

// Ativando a strutura de evento de click mouse no Botão Salvar
btnSalvar.addEventListener("click", function(event){
    event.preventDefault()  // Evita que a página seja recarregada por padrão. Isso facilita a captura e a validação de dados

    // Capturando o elemento formulário dentro do documento html, através do Dom com o getElemetById, informando o Id
    const formulario = window.document.getElementById("formulario_de_captura")

    // Capturando os dados das caixas de texto (inputs), informando o elemento formulário, e acessando os atributos name de cada caixa de texto
    let nomeHeroi = formulario.nome.value
    let classeHeroi = formulario.classe.value
    let xpHero = formulario.xp.value

    // Apresentando os dados capturados no console, apenas para verificação
    console.log(nomeHeroi)
    console.log(classeHeroi)
    console.log(xpHero)
    
    // Estrutura de decisão para apresentar algumas mensagens abaixo
    if (xpHero < 1000){
        paragrafo.innerHTML = `O Herói de nome <strong>${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de <strong>FERRO</strong>`   
    }else if(xpHero >= 1001 && xpHero <= 2000){
        paragrafo.innerHTML = `O Herói de nome <strong>${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de <strong>BRONZE</strong>`
    }else if(xpHero >= 2001 && xpHero <= 5000){
        paragrafo.innerHTML = `O Herói de nome <strong> ${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de <strong>PRATA</strong>`  
    }else if( xpHero >= 5001 && xpHero <= 7000){
        paragrafo.innerHTML = `O Herói de nome <strong>${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de <strong>OURO</strong>`
    }else if(xpHero >= 7001 && xpHero <= 8000){
        paragrafo.innerHTML = `O Herói de nome <strong>${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de <strong>PLATINA</strong>`
    }else if(xpHero >= 8001 && xpHero <= 9000){
        paragrafo.innerHTML = `O Herói de nome <strong>${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de  <strong>ASCENDENTE</strong>`
    }else if(xpHero >= 9001 && xpHero < 10000){
        paragrafo.innerHTML = `O Herói de nome <strong>${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de <strong>IMORTAL</strong>`    
    }else{
        paragrafo.innerHTML = `O Herói de nome <strong>${nomeHeroi} </strong>pertencente a classe <strong>${classeHeroi}</strong> está no nível de <strong>RADIANTE</strong>`
    }
            

})




