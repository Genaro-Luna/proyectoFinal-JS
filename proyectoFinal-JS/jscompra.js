const nombreInput = document.getElementById(`nombre`)
const apellidoInput = document.getElementById(`apellido`)
const botonIngresar = document.getElementById(`ingresar`)
const divTitulo = document.getElementById(`divTitulo`)
const listaProductos = document.getElementById(`lista`)



class Producto{
    constructor(id, nom, precio){
        this.id = id
        this.nom = nom
        this.precio = precio
    }
}
    
const iphone = new Producto(1, "iPhone", 300)
const notebook = new Producto(2, "Notebook", 500)
const pc = new Producto(3, "Pc", 700)
const ps5 = new Producto(4, "Ps5", 800)
const xbox = new Producto(5, "Xbox X", 800)

const productosExistentes = [iphone, notebook, pc, ps5, xbox]


botonIngresar.onclick = () => {
    if(nombreInput.value || apellidoInput.value){
        const usuario = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
    }
        localStorage.setItem(`usuario`, JSON.stringify(usuario))

        Swal.fire({
            title: `BIENVENIDO`,
            text: `${usuario.nombre} ${usuario.apellido}`,
            icon: 'success',
            confirmButtonText: 'Continuar',
        })

        pantallaDeCompra(usuario)
    }
}

function pantallaDeCompra(usuario){
    divTitulo.remove()

    const tituloSaludo = document.createElement(`h2`)
    tituloSaludo.innerText = `Que deseas sumar al carrito`
    divSaludo.append(tituloSaludo)

    listaProductos.innerHTML = `<input type="text" name="buscador" id="buscador" placeholder="Quiero ver...">`


    productosExistentes.forEach(prodArray =>{
        listaProductos.innerHTML += 
            `<div id="articulo${prodArray.id}" class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${prodArray.nom}</h5>
                        <p class="card-text"></p>
                        <p class="card-text">Precio: ${prodArray.precio}</p>
                        <p class="card-text"></p>
                        <button class="btn btn-dark" id="botonAgregar">Agregar</button
                    </div>
            </div>`
    })
}



const usuario = JSON.parse(localStorage.getItem(`usuario`))
if(usuario){
    pantallaDeCompra(usuario)
}



document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      document.querySelectorAll(`.card`).forEach(prod =>{

          prod.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?prod.classList.remove("filtro")
            :prod.classList.add("filtro")
      })

  }


})


// botonAgregar.onclick = () => {
//     Toastify({
//         text: `Producto agregado al carrito!`,
//         duration: 3000,
//     }).showToast()
// }