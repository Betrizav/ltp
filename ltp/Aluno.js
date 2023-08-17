class Aluno extends Pessoa{
    constructor(nome, idade, cpf, endNumRua, endBairro){
        super(nome, idade, cpf, endNumRua, endBairro);
        this.id = Pessoa.gerarId();
    }
}