const PORT = 3000;
const express = require('express');
// const bodyParser = require('body-parser');
const posts = require('./model/posts');

const app = express();



app.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()));

});

app.post("/new", express.json(), (req, res) => { //express.json() é um middlaware que permite capturar o body da requisição

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");

});

app.delete("/deletePost", express.json(), (req, res) => {
    let id = req.body.id;

    posts.deletePost(id);

    res.send(`ID: ${id} deletado!`)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

