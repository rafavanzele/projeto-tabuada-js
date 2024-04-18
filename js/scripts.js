// 1 - SELEÇÃO DE ELEMENTOS
const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationInput = document.querySelector('#multiplicator')

const multiplicationTitle = document.querySelector('#multiplication-title span')

const multiplicationTable = document.querySelector('#multiplication-operations')


// 3 - FUNÇÕES
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = '' //aqui estou limpando o conteudo html desta div sempre que der um calcular na tabuada

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i
        console.log(result)
        
        const template = `<div class="row">
                            <div class="operation">${number} x ${i} = </div>
                            <div class="result">${result}</div>
                          </div> `
        
        //agora vou usar esse objeto que permite transportar uma string para o html:
        const parser = new DOMParser() 
        
        const htmlTemplate = parser.parseFromString(template, 'text/html')

        const row = htmlTemplate.querySelector('.row')

        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerText = number
}



// 2 - EVENTOS
multiplicationForm.addEventListener('submit', (e) => { //primeiro de tudo vou esperar o evento de submit do form
    e.preventDefault() //estou cancelando o refresh da pagina ao clicar no submit do form
    
    const multiplicationNumber = +numberInput.value //aqui selecionei o valor do input number; o + transforma o numero em inteiro
    const multiplicatorNumber = +multiplicationInput.value //idem ao anterior

    if(!multiplicationNumber || !multiplicatorNumber) return //a logica so funcionará se o usuario preencher os dois inputs com numeros

    createTable(multiplicationNumber, multiplicatorNumber)
})