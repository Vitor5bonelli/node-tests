const port = process.env.PORT || 55155

const glugPhrases = [
    "Ciggy is dead.",
    "Vandals will be expunged from the island.",
    "Cooperate with the clops.",
    "Consume",
    "Sludge is money",
    "Ghost was here 👻"
]

const express = require("express")
const {engine} = require("express-handlebars")
const app = express()

app.use(express.static(__dirname + "/public"))

app.engine('handlebars', engine())
app.set("view engine", "handlebars")
app.set('views', './views');

app.get("/", (req, res) => {
    const randomPhrase = glugPhrases[Math.floor(Math.random() * glugPhrases.length)]
    res.render("home", {phrase: randomPhrase})
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