const express = require('express');
const bodyParser = require('body-parser');

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
    res.json(posts);
});

app.post("/new", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
