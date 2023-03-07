const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")


const stats ={

  "gols":{
    "reputacao": 40,
    "seguidores": 1000,
    "fama": 1000
  },

  "assistencias":{
    "reputacao": 20,
    "seguidores": 500,
    "fama": 300
  },

  "titulos":{
    "reputacao": 500,
    "seguidores": 20000,
    "fama": 2000
  }



}


controle.forEach((elemento)=>{
  elemento.addEventListener('click', (evento)=>{
    manipularDados(evento.target.dataset.controle, evento.target.parentNode)
    console.log(evento.target.dataset.stats)
    atualizaEstatisticas(evento.target.dataset.stats)
  })
})


function manipularDados(operacao,controle){
  const contador = controle.querySelector("[data-contador]")

  if(operacao === "-"){
    contador.value = parseInt(contador.value) - 1
  } else{
    contador.value = parseInt(contador.value) + 1
  }
}

function atualizaEstatisticas(stat){

  estatisticas.forEach((elemento)=>{

    elemento.textContent = parseInt(elemento.textContent) + stats [stat] [elemento.dataset.estatistica] 
  })


}