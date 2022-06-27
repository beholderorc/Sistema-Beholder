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
    var tipoPessoa = req.body.tipoPessoa

    //DADOS PESSOAIS
    var nome = req.body.nome
    var cpfCnpj = req.body.cpfCnpj
    var cel = req.body.cel
    var nascimento = req.body.nascimento
    var email = req.body.email
    var senha = req.body.senha
    
    //ENDEREÇO
    var cep = req.body.cep
    var logradouro = req.body.logradouro
    var numero = req.body.numero
    var complemento = req.body.complemento
    var bairro = req.body.bairro
    var cidade = req.body.cidade
    var uf = req.body.uf

    //ATIVIDADES (falta)
    var construtor = req.body.construtor
    var projetista = req.body.projetista
    var orcamentista = req.body.orcamentista
    var tecnologo = req.body.tecnologo
    var engenheiro = req.body.engenheiro
    var arquiteto = req.body.arquiteto

    res.send(orcamentista)
})

app.post("/resposta",(req, res) => {
    res.send("Formulário TESTE recebido!")
})

app.listen(5000,()=>{
    console.log("App rodando!")
})