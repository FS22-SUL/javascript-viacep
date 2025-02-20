function buscarCep() {
    let cepValue = document.querySelector("#cep").value;
    if (cepValue.length == 8) {
        fetch(`https://viacep.com.br/ws/${validarCep(cepValue)}/json/`)
        .then(resposta => resposta.json())
        .then(jsonTratado => {
            let logradouroInput = document.querySelector("#logradouro");
            let bairroInput = document.querySelector("#bairro");
            let localidadeInput = document.querySelector("#localidade");
            let estadoInput = document.querySelector("#estado");

            logradouroInput.value = jsonTratado.logradouro;
            bairroInput.value = jsonTratado.bairro;
            localidadeInput.value = jsonTratado.localidade;
            estadoInput.value = jsonTratado.estado;
        })
    }
}

function validarCep(cep) {
    let verSeENumero = /[0-9]{8}/;

    if (!verSeENumero.test(cep)) {
        alert("O cep só pode conter numeros")
        return;
    }

    return cep;
}



