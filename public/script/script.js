document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {
    fetch("http://192.168.0.105:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        let postElements = "";
        let posts = JSON.parse(json);

        posts.forEach((post) => {
            let postElment = `
            <div id=${post.id} class="card mb-4">
            <div class="card-header">
                <h5 class="card-title">${post.title}</h5>
            </div>
            <div class="card-body">
                <div class="card-text">
                    ${post.description}
                </div>
            </div>
        </div>`;

            postElements += postElment;
        })

        document.querySelector("#posts").innerHTML = postElements;


    })

}

function newPost() {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#desc").value;

    let postOb = {
        title,
        description
    }

    fetch("http://192.168.0.105:3000/api/new").then(res => {
        console.log("deu certo")
    })
    console.log(postOb)
}
