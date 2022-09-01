const Sequelize = require('sequelize');
const connectionDB = require('../dataBase/connectionDB');

// criar tabela no database             Nome da Tabela
const Correntista = connectionDB.define('correntistas', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: true
    },
    CEP: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Nascimento: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Genero: {
        type: Sequelize.STRING,
        allowNull: true
    },
    EstadoCivil: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Profissao: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

// Quando não houver a tabela, ele cria
Correntista.sync();
//Correntista.sync({ alter: true})

module.exports = Correntista;