const Sequelize = require('sequelize');

const connectionDB = new Sequelize ('impultech', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

connectionDB.authenticate()
    .then(() => {
        console.log('Data Base conectada!')
    })
    .catch(() => {
        console.log('Conexão com Data Base não efetuada!')
    });

module.exports = connectionDB