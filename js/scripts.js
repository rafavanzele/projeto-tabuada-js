// 1 - SELEÇÃO DE ELEMENTOS
const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationInput = document.querySelector('#multiplicator')

const multiplicationTable = document.querySelector('#multiplication-operations')


// 3 - FUNÇÕES
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ' ' //aqui estou limpando o conteudo html desta div sempre que der um calcular na tabuada

    for(i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i
        console.log(result)
    }
}



// 2 - EVENTOS
multiplicationForm.addEventListener('submit', (e) => { //primeiro de tudo vou esperar o evento de submit do form
    e.preventDefault() //estou cancelando o refresh da pagina ao clicar no submit do form
    
    const multiplicationNumber = +numberInput.value //aqui selecionei o valor do input number; o + transforma o numero em inteiro
    const multiplicatorNumber = +multiplicationInput.value //idem ao anterior

    if(!multiplicationNumber || !multiplicatorNumber) return //a logica so funcionará se o usuario preencher os dois inputs com numeros

    console.log(multiplicationNumber, multiplicatorNumber)
})