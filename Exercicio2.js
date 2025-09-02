function buscarCEP(cep){
    fetch(`https://cep.awesomeapi.com.br/${cep}`)
    .then(response => response.json())
    .then(responseJSON => console.log(responseJSON))
    .catch(e => console.error(e))
}

console.log(buscarCEP("02066012"));