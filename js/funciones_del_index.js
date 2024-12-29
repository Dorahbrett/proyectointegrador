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
            cardDiv.className = "col-sm-3 m-1 p-2 card p-2 flex-fill mb-3";
                    cardDiv.innerHTML = `
                        <div class="card-body d-grid">
                            <h4 class="card-title">${product.title}</h4>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text">Precio:$${product.price}</p>
                            <button id= "agregarAlCarrito" class="btn btn-dark btn-block">Agregar al carrito</button>
                        </div>
                            <img class="card-img-bottom" src="${product.thumbnail}" alt="${product.title}">
                    `;

                    //aca hacemos que al darle click al boton se agregue al carrito
                    const botonAgregar = cardDiv.querySelector("button");
                    botonAgregar.addEventListener("click", () =>{
                
                        agregarCarrito(product);
                
                
                    });
                
                    function agregarCarrito(product){
                
                    let cart= JSON.parse(localStorage.getItem("cart")) || []; 
                
                    cart.push(product);

                    localStorage.setItem("cart", JSON.stringify(cart));
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${product.title} se agrego al carrito de compras`,
                        showConfirmButton: false,
                        timer: 2500
                      });
                    }
                 


    // agregar producto al contenedor de cards
    productosContainer.appendChild(cardDiv);

});
})
        .catch((error) => console.error("Error al cargar los productos:", error));
}
// cargar productos al div
fetchProductos();

const formulario = document.getElementById(`formularioContacto`);
formulario.addEventListener(`submit`, (enviar)=> {

// revisar el formulario antes de enviar
enviar.preventDefault();
// aca vemos cuales son los campos que vamos a revisar
const nombre = document.getElementById(`nombre`).value.trim();
const apellido = document.getElementById(`apellido`).value.trim();
const email = document.getElementById(`email`).value.trim();
const mensaje = document.getElementById(`mensaje`).value.trim();

//funcion para revisar si llenaron todos los campos
if (nombre === "" || apellido === "" || email === "" || mensaje === ""){
    //si algun campo le falta dato sale mensaje de alerta
    Swal.fire("Por favor llena todos los datos");
    return;
}
    else {
    //si ningun campo esta vacio entonces se envia
    formulario.submit();
    //despues de que se envian se borran los datos de los campos
    formulario.reset();

}

})
});
