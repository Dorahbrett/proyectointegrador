document.addEventListener("DOMContentLoaded",()=>{

    var productosContainer=document.getElementById("productosContainer");

    //traer productos de la api
    function fetchProductos(){
        fetch("https://dummyjson.com/products?limit=20")
        .then((response)=> response.json())
        .then((data) => {
        const productos = data.products;

    //aca limpiamos cada card, la dejamos vacia
        productosContainer.innerHTML= "";   
    
    //aca rellena cada una de las 20 cards con la info de cada producto de la api
        productos.forEach((product) => {
            
            const cardDiv = document.createElement("div");
            cardDiv.className = "card p-2 flex-fill mb-3";
                    cardDiv.innerHTML = `
                        <div class="card-body d-grid">
                            <h4 class="card-title">${product.title}</h4>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Precio:$${product.price}</p>
                            <button class="btn btn-primary btn-block">Agregar al carrito</button>
                        </div>
                            <img class="card-img-bottom" src="${product.thumbnail}" alt="${product.title}">
                    `;


    // agregar producto al contenedor de cards
    productosContainer.appendChild(cardDiv);

});
})
        .catch((error) => console.error("Error al cargar los productos:", error));
}
// cargar productos al div
fetchProductos();
});

//aca hacemos que al darle click al boton se agregue al carrito
    const botonAgregar = cardDiv.querySelector("button");
    botonAgregar.addEventListener("click", () =>{

        agregarCarrito(product);


    });

    function agregarCarrito(product){

    let carrito= JSON.parse(localStorage.getItem("carrito")) || []; 

    carrito.push(product);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${product.title} se agrego al carrito de compras`);
    }
 




   

