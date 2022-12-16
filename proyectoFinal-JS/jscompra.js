const nombreInput = document.getElementById(`nombre`)
const apellidoInput = document.getElementById(`apellido`)
const botonIngresar = document.getElementById(`ingresar`)
const divTitulo = document.getElementById(`divTitulo`)
const barraBuscador = document.getElementById(`buscador`)
const listaProductos = document.getElementById(`lista`)
const main = document.getElementById(`login`)


class Producto{
    constructor(id, nom, precio, img){
        this.id = id
        this.nom = nom
        this.precio = precio
        this.img = img
    }
}
    
const iphone14 = new Producto(1, "iPhone 14", 2000, "img/iphone14.jpg")
const iphone12 = new Producto(2, "iPhone 12", 1200, "img/iphone12.jpg")
const iphoneX = new Producto(3, "iPhone X", 600, "img/iphoneX.jpg")
const notLenovo = new Producto(4, "Notebook Lenovo", 800, "img/note lenovo.jpg")
const notHp = new Producto(5, "Notebook HP", 500, "img/note hp.jpg")
const notNoblex = new Producto(6, "Notebook Noblex", 300, "img/note noblex.jpg")
const pc = new Producto(7, "PC + Perifericos", 400, "img/pc domestica.jpg")
const pcGamer = new Producto(8, "PC GAMER", 650, "img/pc gamer.jpg")
const ps5 = new Producto(9, "Ps5", 2500, "img/ps5.jpg")
const xboxX = new Producto(10, "Xbox X", 2500, "img/xbox x.jpg")
const nintendoSwitch = new Producto(11, "Nintendo Switch", 550, "img/nintendo switch.jpg")
const auriculares = new Producto(12, "Auriculares JBL", 80, "img/jbl.jpg")

const productosExistentes = [iphone14, iphone12, iphoneX, notLenovo, notHp, notNoblex, pc, pcGamer, ps5, xboxX, nintendoSwitch, auriculares]


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
        main.remove()
    }
}

function pantallaDeCompra(usuario){
    main.remove()

    const tituloSaludo = document.createElement(`h2`)
    tituloSaludo.innerText = `Tenemos lo que buscas!`
    divSaludo.append(tituloSaludo)

    barraBuscador.innerHTML = `<input type="text" name="buscador" id="buscador" placeholder="Quiero ver...">`

    productosExistentes.forEach(prodArray =>{
        listaProductos.innerHTML += 
            `<div id="articulo${prodArray.id}" class="card" style="width: 18rem;">
                <img src="${prodArray.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${prodArray.nom}</h5>
                        <p class="card-text"></p>
                        <p class="card-text">Precio: $${prodArray.precio}</p>
                        <p class="card-text"></p>
                        <button class="btn btn-dark" id="botonAgregar">Agregar</button>
                    </div>
            </div>`
    })

    const botonesAgregar = document.querySelectorAll(`#botonAgregar`)
    for(const boton of botonesAgregar){
        boton.addEventListener(`click`, () => {
            Toastify({
                backgroundColor: "green",
                text: `Producto agregado al carrito!`,
                duration: 3000,
            }).showToast()
        })
    
    }
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

