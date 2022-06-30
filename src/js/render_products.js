const contenedor = document.querySelector('.container_products')

const renderProducts = async () => {
    const products = await axios.get('http://localhost:4000/api/products')
        .then(res => res.data)
        .catch(err => console.log(err));

    products.forEach(element => {
        console.log(element)

        const fragmento = `
        <div class="product_card">
            <img src="${element.imagesUrls[0]}" alt="${element._id}">
            <h3>${element.name}</h3>
            <p>${element.price}</p>
        </div>
        `;

        contenedor.innerHTML += fragmento;
    });
};

renderProducts();