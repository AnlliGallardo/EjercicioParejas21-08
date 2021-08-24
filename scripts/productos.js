let formulario = document.getElementById('formulario');
let btnRef = document.getElementById('btnRef');
let btnNom = document.getElementById('btnNom');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');



formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

let name = document.getElementById('name').value;
let desc = document.getElementById('lastName').value;
let precio = document.getElementById('email').value;
let img = document.getElementById('name').value;
let cate = document.getElementById('lastName').value;
let ref = document.getElementById('email').value;

  
    let resp = await fetch('http://localhost:4003/productos/',{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            descripcion: desc,
            precio: precio,
            imagen: img,
            categoria: cate,
            referencia: ref
         
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 

})

btnRef.addEventListener('click', async () => {

    let refe = document.getElementById('refe').value;
    document.getElementById('refe').readOnly = true;

    let resp = await fetch('http://localhost:4003/productos/');
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.refe === referencia)
    const {imagen,nombre,descripcion,precio,referencia,id,categoria} = modificar;
 
    document.getElementById('name').value = nombre;
    document.getElementById('desc').value = descripcion;
    document.getElementById('precio').value =precio;
    document.getElementById('img').value = imagen;
    document.getElementById('cate').value = categoria;
    document.getElementById('ref').value = referencia;
    document.getElementById('id').value = id;
    
})
btnNom.addEventListener('click', async () => {

    let nom = document.getElementById('name').value;
    document.getElementById('refe').readOnly = true;

    let resp = await fetch('http://localhost:4003/productos/');
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.nom === nombre)
    const {imagen,nombre,descripcion,precio,referencia,id,categoria} = modificar;
 
    document.getElementById('name').value = nombre;
    document.getElementById('desc').value = descripcion;
    document.getElementById('precio').value =precio;
    document.getElementById('img').value = imagen;
    document.getElementById('cate').value = categoria;
    document.getElementById('ref').value = referencia;
    document.getElementById('id').value = id;
    
})


btnEditar.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let descMod = document.getElementById('lastName').value;
    let precioMod = document.getElementById('email').value;
    let imgMod = document.getElementById('name').value;
    let cateMod = document.getElementById('lastName').value;
    let refMod = document.getElementById('email').value;

    let resp = await fetch(`http://localhost:4002/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameMod,
            descripcion: descMod,
            precio: precioMod,
            imagen: imgMod,
            categoria: cateMod,
            referencia: refMod
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 

})

btnEliminar.addEventListener('click', async() => {

    let idModificar = document.getElementById('id').value;
    let resp = await fetch(`http://localhost:4002/usuarios/${idModificar}`,{
        method: 'DELETE',
    })

})