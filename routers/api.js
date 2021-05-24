const express = require('express');
const router = express.Router();
const posts = require('../model/posts');
const cors = require('cors')
const options = {
    origin: "http://localhost:3000"
}

router.use(cors());

router.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()));

});

router.post("/new", express.json(), (req, res) => { //express.json() é um middlaware que permite capturar o body da requisição

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");

});

router.delete("/deletePost", express.json(), (req, res) => {
    let id = req.body.id;

    posts.deletePost(id);

    res.send(`ID: ${id} deletado!`)
})


module.exports = router;