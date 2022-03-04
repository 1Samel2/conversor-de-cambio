const button = document.getElementById('button-active')

const select = document.getElementById("currency-select")


const converterValues = async () => {   /* Muito importante colocar o Async junto com o  await, fetch para consumir uma api, lembre que o js funciona de cima para baixo */
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json()) /* muito importante colocar o .the  */

const dolar = data.USDBRL.high

const euro = data.EURBRL.high

const bitcoin = data.BTCBRL.high

    console.log(data)

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dòlar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if(select.value === "₿ Bitcoin"){
        currencyValueText.innerHTML = "0" 
    currencyValueText.innerHTML = inputReais / bitcoin
}}


const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "US$ Dòlar americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./ASSETS/estados-unidos.svg"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./ASSETS/Euro.svg"

    }
    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./ASSETS/Btcoin.png"
    }


    converterValues()

}

button.addEventListener('click', converterValues);

select.addEventListener('change', changeCurrency)