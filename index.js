const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let posts = [
    {
        id: "dagfafsgg",
        titulo: "Título teste",
        description: "Descrição teste"
    },

]

app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
});

app.post("/new", express.urlencoded(), (req, res) => { //express.json() é um middlaware que permite capturar o body da requisição
    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({ id, title, description })

    res.send("Post adcionado");
    console.log(posts)

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


let generateID = () => {
    return Math.random().toString(36).substr(2, 9) //base 36 seram todas as letras do alfabeto + os 10 numeros, substr(2,9) server para desprezar as duas primeiras posições e pegar o nove restantes
}