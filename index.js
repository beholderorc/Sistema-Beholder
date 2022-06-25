const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",function(req,res){
    res.render("t-1")
})

app.get("/cadastro",function(req,res){
    res.render("t-2")
})

app.get("/teste",function(req,res){
    res.render("t-teste")
})

app.post("/salvarcadastro",(req, res) => {

    // TIPO DE PESSOA (falta)

    //DADOS PESSOAIS
    let nome = req.body.nome
    let cpfCnpj = req.body.cpfCnpj
    let cel = req.body.cel
    let nascimento = req.body.nascimento
    let email = req.body.email
    let senha = req.body.senha
    
    //ENDEREÇO
    let cep = req.body.cep
    let logradouro = req.body.logradouro
    let numero = req.body.numero
    let complemento = req.body.complemento
    let bairro = req.body.bairro
    let cidade = req.body.cidade
    let uf = req.body.uf


    res.send(tipoPessoa)
})

app.post("/resposta",(req, res) => {
    res.send("Formulário TESTE recebido!")
})

app.listen(5000,()=>{
    console.log("App rodando!")
})