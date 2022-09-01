const express = require ('express');
const path = require('path');
const app = express();
const routes = require("./routes/routes")

const Correntista = require('./models/correntista')
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(routes)


app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000 => http://localhost:3000')
});