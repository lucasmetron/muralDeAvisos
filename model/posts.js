module.exports = {
    posts: [
        {
            id: "asd654FDS",
            title: "Prova de Geografia",
            description: "Prova será aplicada no dia 02/06/2021"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description })
    },

    deletePost(id) {
        this.posts.forEach((item, i) => {
            if (item.id == id) {
                this.posts.splice(i, 1)
            }
            console.log(this.posts);
        })

    }
}

let generateID = () => {
    return Math.random().toString(36).substr(2, 9) //base 36 seram todas as letras do alfabeto + os 10 numeros, substr(2,9) server para desprezar as duas primeiras posições e pegar o nove restantes
}
