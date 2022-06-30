// /src/comments.json

const contenedor = document.querySelector(".comments_container");

const renderizarcomment = async () => {
    const comment = await axios.get("/src/comments.json")
    .then(res => res.data)
    .catch(error => console.log(error));

    console.log(comment)

    comment.forEach(element => {

        console.log(element);

        const fragmento = `<div class="comment">
    <h3>${element.typeQuery}</h3>
    <p>${element.details}</p>
    <p class="name">${element.name}</p>
</div>`

        contenedor.innerHTML += fragmento;
    });
}

renderizarcomment();