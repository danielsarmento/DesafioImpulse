const Correntista = require('../models/correntista');

const Cadastro = async (req, res) => {
    console.log(req.body)
    await Correntista.create(req.body)
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
const Buscar = async (req, res) => {

    const dados = await Correntista.findAll()
        .then((dados) => {
            return res.status(200).json({
                erro: false,
                Correntistas: dados,
                mensagem: 'Estes são os correntistas cadastrados!'
            })
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: 'Usuário não cadastrado!'
            })    
        })
} 

const BuscarId = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    const usuario = await Correntista.findByPk(id)
        .then((usuario) => {
            return res.status(200).json({
                erro: false,
                usuario: usuario,
                mensagem: 'Estes são os correntistas cadastrados!'
            })
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: 'Usuário não cadastrado!'
            })    
        })
} 

const ContagemUsuarios = async (req, res) => {
    const usuarios = await Correntista.findAll()
        .then((usuarios) => {
            const NumUsuarios = usuarios.length
            return res.status(200).json({
                erro: false,
                NumeroUsuario: NumUsuarios,
                mensagem: 'Estes são os correntistas cadastrados!'
            })
        })
        .catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: 'Usuário não cadastrado!'
            })    
        })
}

const cpfValid = async (req, res) => {
    const { cpf } = req.body
    const usuarios = await Correntista.findAll({where : { cpf : cpf }}) 
    return res.status(200).json(usuarios)
        
}

module.exports = {
    Cadastro,
    Buscar,
    BuscarId,
    ContagemUsuarios,
    cpfValid
};