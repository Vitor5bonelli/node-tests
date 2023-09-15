const port = process.env.PORT || 55155

const express = require("express")
const {engine} = require("express-handlebars")
const app = express()

app.use(express.static(__dirname + "/public"))

app.engine('handlebars', engine())
app.set("view engine", "handlebars")
app.set('views', './views');

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.use((req, res) => {
    res.status(404)
    res.render("404")
})

app.use((req, res) => {
    res.status(500)
    res.render("500")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})