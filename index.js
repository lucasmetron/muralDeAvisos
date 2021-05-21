const express = require('express');
// const bodyParser = require('body-parser');
const posts = require("./model/posts")

const app = express();
const PORT = 3000;



app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll));
});

app.post("/new", express.json(), (req, res) => { //express.json() é um middlaware que permite capturar o body da requisição

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adcionado");

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

