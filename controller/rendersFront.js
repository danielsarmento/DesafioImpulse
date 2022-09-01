const axios = require('axios');
const validarCpf = require('validar-cpf'); 
const Correntista = require('../models/correntista');


const pagInicial = (req, res) => {
    return res.render("index");
}

const question1 = (req, res) => {
        return res.render("question1")
}

//Email
const question2 = (req, res) => {
    nome = req.body.nome;
    console.log(nome);
    return res.render("question2", {nome})
}

//CPF
const question3 = (req, res) => {
    email = req.body.email;
    console.log(nome, email);
    return res.render("question3", {nome})
}

// CEP
const question4 = async (req, res) => {
    cpf = req.body.cpf;
    console.log(cpf)

    if(validarCpf(cpf)){
        console.log('CPF válido!')
    } else {
        return res.render("question3", {nome})
    }
    
    const dados = await Correntista.findAll({ where : { CPF : cpf}});
    
    console.log(dados)
    if(dados == null ){
        return res. render("question3", {nome})
    } else {
        return res. render("question4", {nome})
    }

    //return res.render("question4", {nome})
}

const question5 = async (req, res) => {
    cep = req.body.cep;
    console.log(cep);
    try{
        const {data} = await axios(`http://viacep.com.br/ws/${cep}/json/`)
        console.log(data);
        rua = data.logradouro;
        cidade = data.localidade;
        estado = data.uf;
        return res.render("question5", {nome, rua, cidade, estado})
    } catch (error){
        console.error(error)
    }
    
}

const question6 = (req, res) => {
    data = req.body.data;
    console.log(nome, email, cpf, cep, data);
    return res.render("question6", {nome})
}

const question7 = (req, res) => {
    genero = req.body.genero;
    console.log(nome, email, cpf, cep, data, genero);
    return res.render("question7", {nome})
}

const question8 = (req, res) => {
    E_civil = req.body.E_civil;
    console.log(nome, email, cpf, cep, data, genero, E_civil);
    return res.render("question8", {nome})
}

const finalCadastro = (req, res) => {
    profissao = req.body.profissao
    return res.render("finalCadastro", {nome, email, cpf, cep, data, genero, E_civil, profissao, estado, cidade, rua})
}

const cadastrarCliente = async (req, res) => {
    await Correntista.create({Nome: nome, Email: email, CPF: cpf, CEP: cep, Nascimento: data, Genero: genero, EstadoCivil: E_civil, Profissao: profissao})
        .then(() => {
            return res.status(200).json({
                erro: false,
                mensagem: 'Correntista cadastrado com sucesso!'
            })
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: 'Correntista não cadastrado!'
            })    
        })
}

module.exports = {
    pagInicial,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    finalCadastro,
    cadastrarCliente
};