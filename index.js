const button = document.getElementById('button-active')

const dolar = 5.2

const converterValues = () =>{
const inputReais = document.getElementById('input-real').value
console.log(inputReais / dolar)

}

button.addEventListener('click', converterValues)