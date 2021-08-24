const getProductos = async (url) =>{
    let impProductos = document.querySelector(".gridProductos")
    impProductos.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(producto => {
        const {imagen,nombre,descripcion,categoria,precio,referencia} = producto;
        impProductos.innerHTML += `
        <div class="row">
        <div class="col-6 mx-1">
        <button id="producto1" class="btn-perro btn btn-secondary">
                    <div class="row">
                    <div class="col-4 icono-perro">
                        <img id="produc1" src="${imagen}">
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${nombre}</p>
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${descripcion}</p>
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${categoria}</p>
                        <div class="col-6 categoria-perro">
                        <p class="p">${precio}</p>
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${referencia}</p>
                    </div>
                    </div>
                </div>
            </button>
        </div>
        `
    });
}

const filtrar = async (url) =>{
    let nom = document.getElementById('name').value;
    let resp = await fetch(url);
   let data = await resp.json();
   console.log(data);
   let filtro = data.filter(user => user.nombre === nom)
    
    filtro.forEach(producto => {
        const {imagen,nombre,descripcion,precio, referencia,categoria} = producto;
        impProductos.innerHTML += `
        <div class="row">
        <div class="col-6 mx-1">
        <button id="producto1" class="btn-perro btn btn-secondary">
                <div class="row">
                    <div class="col-4 icono-perro">
                        <img id="produc1" src="${imagen}">
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${nombre}</p>
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${descripcion}</p>
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${categoria}</p>
                        <div class="col-6 categoria-perro">
                        <p class="p">${precio}</p>
                    </div>
                    <div class="col-6 categoria-perro">
                        <p class="p">${referencia}</p>
                    </div>
                    </div>
                </div>
            </button>
        </div>
        `
    });
}

// const buscar = async (url) =>{
//     let impProductos = document.querySelector(".gridBuscar")
//     impProductos.innerHTML = '';
//     const resp = await fetch(url);
//     const data = await resp.json();
//     let filtro = data.find(cita => cita.nombre.toLowerCase()  === input.toLowerCase())
//     filtro.forEach(producto => {
//         const {imagen,nombre,descripcion,precio,referencia,categoria} = producto;
//         impProductos.innerHTML += `
//         <div class="row">
//         <div class="col-6 mx-1">
//         <button id="producto1" class="btn-perro btn btn-secondary">
//                 <div class="row">
//                     <div class="col-4 icono-perro">
//                         <img id="produc1" src="${imagen}">
//                     </div>
//                     <div class="col-6 categoria-perro">
//                         <p class="p">${nombre}</p>
//                     </div>
//                     <div class="col-6 categoria-perro">
//                         <p class="p">${descripcion}</p>
//                     </div>
//                     <div class="col-6 categoria-perro">
//                         <p class="p">${categoria}</p>
//                         <div class="col-6 categoria-perro">
//                         <p class="p">${precio}</p>
//                     </div>
//                     <div class="col-6 categoria-perro">
//                         <p class="p">${referencia}</p>
//                     </div>
//                     </div>
//                 </div>
//             </button>
//         </div>
//         `
//     });
// }

// Buscar.addEventListener('click', () => {
//     buscar('http://localhost:4003/productos/');
//     document.querySelector(".gridProdutos").style.display = 'none';
// })

filtro.addEventListener('click', () => {
    filtrar('http://localhost:4003/productos/');
    document.getElementById('pro').style.display = 'none';
})

Volver.addEventListener('click', () => {
    document.querySelector(".gridProdutos").style.display = 'grid';
    document.querySelector(".gridFiltro").style.display = 'none';
    document.querySelector(".gridBuscar").style.display = 'none';
    
})

document.addEventListener('DOMContentLoaded', () => {
    getProductos('http://localhost:4003/productos/');
})


