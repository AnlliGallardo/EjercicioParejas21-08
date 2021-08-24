

const getProductos = async (url) =>{
    let impProductos = document.querySelector(".gridProductos")
    impProductos.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(producto => {
        const {imagen,nombre,descripcion,categoria} = producto;
        impProductos.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="detalleProducto">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>
        `
    });
}

const filtrar = async (url) =>{
    let impProductos = document.querySelector(".gridFiltro")
    impProductos.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    let filtro = data.filter(cita => cita.nombre.toLowerCase()  === input.toLowerCase())
    filtro.forEach(producto => {
        const {imagen,nombre,descripcion,precio, referencia,categoria} = producto;
        impProductos.innerHTML += `
        <div class="col mascotas">
        <a href="#" class="detalleProducto">
            <div class="card bg-dark text-white gradiente">                
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${raza}</p>
                </div>
            </div>
        </a>
    </div>
        `
    });
}

filtro.addEventListener('click', async() => {
    filtrar('http://localhost:4003/productos/');
})

document.addEventListener('DOMContentLoaded', () => {
    getProductos('http://localhost:4003/productos/');
})


