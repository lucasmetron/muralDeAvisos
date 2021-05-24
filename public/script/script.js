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
                    ${post.description}<br>
                    
                    </div>
                </div>

                <div class="card-footer">
                    <span class="id" >ID post: ${post.id}</span>
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

    if (title === "" || description === "") {
        document.body.innerHTML += `
        <div class="topo">
            <div class="alert alert-danger alert-dismissible fade show" id="error">

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                <strong>Erro:</strong> Os campos Título e descrição, não devem estar vazios!

            </div>
        </div>`;

    } else {

        let post = {
            title,
            description
        }

        let options = {
            method: "POST",
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify(post)
        }

        fetch("http://192.168.0.105:3000/api/new", options).then(res => {
            console.log(res)
            updatePosts();
            document.querySelector("#title").value = "";
            document.querySelector("#desc").value = "";
            document.querySelector("#del").value = "";
        })



    }



}

function del() {
    let id = document.querySelector("#del").value;

    if (id === "") {
        document.body.innerHTML += `
        <div class="topo">
            <div class="alert alert-danger alert-dismissible fade show" id="error">

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                <strong>Erro:</strong> O campo ID, não deve estar vazio!

            </div>
        </div>`;
    } else {

        let idDel = {
            id
        }

        let options = {
            method: "DELETE",
            headers: new Headers({
                "content-type": "application/json"
            }),
            body: JSON.stringify(idDel)
        }

        fetch("http://192.168.0.105:3000/api/deletePost", options).then(res => {
            console.log(res)
            document.querySelector("#del").value = "";
            document.querySelector("#title").value = "";
            document.querySelector("#desc").value = "";
            updatePosts();
        })



    }


}