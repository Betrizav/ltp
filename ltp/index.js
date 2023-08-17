let lista = [];

let cadastrar = function(){
    let inputNome = document.getElementById("nome");
    let nome = inputNome.value;

    let inputIdade = document.getElementById("idade");
    let idade = inputIdade.value;

    
    let inputCpf = document.getElementById("cpf");
    let cpf = inputCpf.value;

    let inputEndereco = document.getElementById("endNumRua");
    let endNumRua = inputEndereco.value;

    let inputRua = document.getElementById("rua");
    let rua = inputRua.value;

    let inputBairro = document.getElementById("endBairro");
    let endBairro = inputBairro.value;
    
    let aluno = new Aluno(nome , idade, cpf, endNumRua, rua, endBairro);

    lista.push(aluno);

    console.log(lista);

}


    



