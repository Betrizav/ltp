class Pessoa {
    constructor(nome, idade, cpf, endNumRua, endBairro){
        this.nome = nome,
        this.idade = idade,
        this.cpf = cpf,
        this.endNumRua = endNumRua,
        this.endBairro = endBairro
    }
    static gerarId(){
        return Math.floor(Math.random()*30);
    }
}