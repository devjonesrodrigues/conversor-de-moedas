const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){

    const inputValue = document.querySelector(".input-value").value
    const valueInReal = document.querySelector(".value-to-convert")
    const valueThatWaSonverted = document.querySelector(".currency-value")

    const euroToday = 5.31
    const dolarToday = 4.91
    const libraToday = 6.20
    const bitcoinToday = 200.780

    if(currencySelect.value == "dolar"){
        valueThatWaSonverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        valueThatWaSonverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }
    if(currencySelect.value == "libra"){
        valueThatWaSonverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }
    if(currencySelect.value == "bitcoin"){
        valueThatWaSonverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "GTC"
        }).format(inputValue / bitcoinToday)
    }
 



    valueInReal.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


}
convertButton.addEventListener("click", convertValues)

function selectChange(){

    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    

    convertValues()

}

currencySelect.addEventListener("change", selectChange)

