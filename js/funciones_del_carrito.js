document.addEventListener("DOMContentLoaded", () =>
{
    const carritoArticulosStorage = JSON.parse(localStorage.getItem(`cart`)) || [];
    const carritoTableBody = document.getElementById(`articulo-carrito`);
    const totalGeneral = document.getElementById(`total`);
    let total = 0;

    carritoArticulosStorage.forEach(articulo => {
        
        const row = document.createElement(`tr`);
        
        //buscando los datos de la fila
        var celdaProducto = document.createElement(`td`);
        celdaProducto.textContent = articulo.title
        row.appendChild(celdaProducto);

        const celdaCantidad = document.createElement(`td`);
        celdaCantidad.textContent = 1;
        row.appendChild(celdaCantidad);

        var celdaPrecio = document.createElement(`td`);
        celdaPrecio.textContent = `$${articulo.price}`;
        row.appendChild(celdaPrecio);

        const cantidad = parseInt(celdaCantidad.textContent, 10);
        const subtotal = articulo.price * cantidad;
        const celdaSubtotal = document.createElement(`td`);
        celdaSubtotal.textContent = `$${subtotal}`;
        row.appendChild(celdaSubtotal);

        //agregando datos a la fila
        carritoTableBody.appendChild(row);

        total += subtotal;

    })
    totalGeneral.textContent = total.toFixed(2);

    document.getElementById(`vaciarCarrito`).addEventListener(`click`, () =>
    {
        localStorage.removeItem(`cart`);
        window.location.href = `index.html`;
    });

    if (carritoArticulosStorage.length === 0) {

        document.getElementById(`mensajeVacio`).style.display = `block`
    } else {
        document.getElementById(`mensajeVacio`).style.display = `none`
    }

    document.getElementById(`vaciarCarrito`).addEventListener(`click`, () =>
        {
            localStorage.removeItem(`cart`);
            window.location.href = `index.html`;
        });

    document.getElementById(`finalizarCompra`).addEventListener(`click`,() =>
    {
        Swal.fire({
            title: "Felicidades, compra procesada!",
            icon: "success",
            confirButtonText: `Aceptar`
          });
          localStorage.removeItem(`cart`);
          setTimeout(()=>{
            window.location.href = `index.html`;
        
          }, 4000);
    
})
})