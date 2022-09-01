const routes = require("express").Router();
const rendersFront = require("../controller/rendersFront");
const cadastroNoDB = require("../controller/cadastroNoDB");

routes.post('/cadastrar', cadastroNoDB.Cadastro);
routes.get('/buscar', cadastroNoDB.Buscar);
routes.post('/buscarId/:id', cadastroNoDB.BuscarId);
routes.get('/contagem', cadastroNoDB.ContagemUsuarios);
routes.post('/cpf', cadastroNoDB.cpfValid);

routes.get('/', rendersFront.pagInicial);
routes.get('/question1', rendersFront.question1);
routes.post('/question2', rendersFront.question2);
routes.post('/question3', rendersFront.question3);
routes.post('/question4', rendersFront.question4);
routes.post('/question5', rendersFront.question5);
routes.post('/question6', rendersFront.question6);
routes.post('/question7', rendersFront.question7);
routes.post('/question8', rendersFront.question8);
routes.post('/finalCadastro', rendersFront.finalCadastro);
routes.post('/cadastrarCliente', rendersFront.cadastrarCliente);



module.exports = routes;