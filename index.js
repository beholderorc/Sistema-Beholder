const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/",function(req,res){
    res.render("t-1")
})

app.get("/cadastro",function(req,res){
    res.render("t-2")
})

app.listen(5000,()=>{
    console.log("App rodando!")
})