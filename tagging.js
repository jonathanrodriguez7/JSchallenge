document.addEventListener("DOMContentLoaded", function() {
    var botaoverdeSpans = document.querySelectorAll("#values span")
    var botaoverdeTexts = []
  
    botaoverdeSpans.forEach(function(span) {
      botaoverdeTexts.push(span.textContent)
    })
  
    console.log("botao verde texts:", botaoverdeTexts)
  
    var botaoEL = document.querySelectorAll("#buttons a")
  
    botaoEL.forEach(function(EL, i) {
      EL.addEventListener("click", function() {
        console.log("Botao" + (i + 1) + " clickei, botaoverde text", botaoverdeTexts[i])
      })
    })
  })