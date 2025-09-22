/*
     1° Passo Capturar os eventos de click e input
     2° Passo aplicar Regex nos inputs para aceitar somente números
     3° Passo  sortear número de acordo com o intervalo de número selecionado
     4° Mostrar resultados
     5° Aparecer input de sortear novamente.
*/

const btnNewNumber = document.getElementById("btn")
const quantityNumber = document.getElementById("quantity")
const numberMin = document.getElementById("min")
const numberMax = document.getElementById("max")

/*  
    
    Butão do "sorteio" após o click no butão, ele realiza o sorteio e altera as classes para mostrar o resultado na tela

*/

btnNewNumber.addEventListener("click", (event) => {
    event.preventDefault()  

    let form1 = document.getElementById("form-1")
    let form2 = document.getElementById("form-2")
    
    form1.classList.remove("display-intial")
    form1.classList.add("display-none")
    form2.classList.remove("display-none")
    form2.classList.add("display-intial")
    
    newNumber()
})

function newNumber() {

    const qtd = parseInt(quantityNumber.value)
    const min = parseInt(numberMin.value)
    const max = parseInt(numberMax.value)

    const checkbox = document.getElementById("check")

    result = []
    
    function LuckNumber() {
        // Realizar o sorteio dos números
        while (result.length < qtd) {
            Nresult = Math.floor(Math.random() * (max - min + 1)) + min;
             
            if (checkbox.checked) {
                if (result.includes(Nresult)) {

                } else {
                result.push(Nresult)
                }
            } else {
                result.push(Nresult)
            }
            
        }
    }
    console.log(result)

    LuckNumber()
    
}

