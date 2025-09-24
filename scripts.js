// Recuperando inputs
const btnNewNumber = document.getElementById("btn")
const quantityNumber = document.getElementById("quantity")
const numberMin = document.getElementById("min")
const numberMax = document.getElementById("max")
const form1 = document.getElementById("form-1")
const form2 = document.getElementById("form-2")
const list = document.getElementById("draw")

/*  
Butão do "sorteio" após o click no butão, ele realiza o sorteio e altera as classes para mostrar o resultado na tela
*/

btnNewNumber.addEventListener("click", (event) => {
    event.preventDefault()  

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
        
        result.forEach((numero) => {
            // Criando elementos para receber os resultados
            const resultLi = document.createElement("li")
            const resultSpan = document.createElement("span")
            
            resultSpan.textContent = numero
            
            // Onde será adicinado(o que será adicionado)
            resultLi.append(resultSpan) 
            list.append(resultLi)
        });
    }


    console.log(result)

    LuckNumber()
}

