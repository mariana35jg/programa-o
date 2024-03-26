const botoes = document.querySelectorAll(«.botao»);
const textos = document.querySelectorAll(“.aba-conteudo”);
console.log(botoes)
for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {
    textos[j].classList.remove(“ativo”);
    for(let j=0;j<botoes.length;j++) { botoes[j].classList.remove(«ativo»);
        textos[j].classList.remove(“ativo”);
    }
    botoes[i].classList.add(«ativo»);
    }
    }
    const contadores = document.querySelectorAll(“.contador”);
    const tempoObjetivo1 = new Date(“2024-10-05”);
    let tempoAtual = new Date();
    contadores[0].textContent = tempoObjetivo1 - tempoAtual;
    contadores[0] 
    contadores[0].textContent = “Contagem regressiva”;
