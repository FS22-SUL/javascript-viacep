fetch("https://viacep.com.br/ws/60812450/json/")
.then(resposta => resposta.json())
.then(jsonTratado => {
    // console.log(jsonTratado);
    console.log(`A minha rua é a: ${jsonTratado.logradouro}`);
    
})

