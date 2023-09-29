
let productosDestacados = [
    { nombre: 'Cuaderno Harry Potter', precio: 3600, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado con espiral A4. ', foto: './IMG/Fotos ecommerce/cuaderno-harry-potter-2.png'},
    { nombre: 'Lápices Acuarelados', precio: 3170, categoria: 'Lápices', detalles: 'Lápices de Colores Acuarelados x 12. ', foto: './IMG/Fotos ecommerce/8-lapices-acuarelables.png'},
    { nombre: 'Lápices Flúo', precio: 1975, categoria: 'Lápices', detalles: 'Lápices de Colores Pinto Fluo x 8', foto: './IMG/Fotos ecommerce/pinto-fluo.png'}, 
    { nombre: 'Marcadores Sharpie', precio: 4114, categoria: 'Marcadores', detalles: 'Vintage Travel x 8 ', foto: './IMG/Fotos ecommerce/12-blister-por-8.png'},
    { nombre: 'Marcadores Glitter', precio: 3472, categoria: 'Marcadores', detalles: 'Colores pastel x 6 ', foto: './IMG/Fotos ecommerce/mooving.png'},
    { nombre: 'Marcadores Sharpie', precio: 5989, categoria: 'Marcadores', detalles: 'Punta Fina. Tropical x 12. ', foto: './IMG/Fotos ecommerce/sharpie-tropical.png'},
    { nombre: 'Marcadores Filgo', precio: 6498, categoria: 'Marcadores', detalles: 'Marker 036 x 20. ', foto: './IMG/Fotos ecommerce/marker-036.png'},
    { nombre: 'Marcadores Glitter', precio: 4774, categoria: 'Marcadores', detalles: 'Marcador Turbo Glitter x 8. ', foto: './IMG/Fotos ecommerce/TURBO-GLITTER.png'},
    { nombre: 'Marcadores Jumbo', precio: 2939, categoria: 'Marcadores', detalles: 'Marcador Pinto Jumbo x 10. ', foto: './IMG/Fotos ecommerce/jumbo.png'},
    { nombre: 'Perforadora', precio: 4463, categoria: 'Crafting', detalles: 'Artistica 1". Mariposa', foto: './IMG/Fotos ecommerce/perforadora-relieve-mariposa.png'},
    { nombre: 'Perforadora', precio: 4463, categoria: 'Crafting', detalles: 'Artistica 2". Estampilla', foto: './IMG/Fotos ecommerce/PERFORADORA-ESTAMPILLA.png'},
    { nombre: 'Perforadora', precio: 12496, categoria: 'Crafting', detalles: 'Artistica 2". Estrella.', foto: './IMG/Fotos ecommerce/perforadora-estrela-5-cm.png'},
    { nombre: 'Perforadora', precio: 4304, categoria: 'Crafting', detalles: 'Pinza Estrella 1/4". Estrella', foto: './IMG/Fotos ecommerce/PINZA-ESTRELLA.png'},
    { nombre: 'Tijera', precio: 839, categoria: 'Crafting', detalles: 'Artística. Corte con forma. 6-1/2', foto: './IMG/Fotos ecommerce/tijera.png'},
    { nombre: 'Cartulina', precio: 2159, categoria: 'Papeleria', detalles: 'Flúor. A4. Colores surtidos x 16', foto: './IMG/Fotos ecommerce/CARTULINA-FLUO.png'},
    { nombre: 'Papel Misionero', precio: 3470, categoria: 'Papeleria', detalles: 'A4. 125gr. x 100 hojas', foto: './IMG/Fotos ecommerce/CRAFT-125-GRS.png'},
    { nombre: 'Papel Ilustrado', precio: 9951, categoria: 'Papeleria', detalles: '30x30cm 180grs x 24', foto: './IMG/Fotos ecommerce/papeles-ilustrados.png'},
    { nombre: 'Papel Ilustrado', precio: 4135, categoria: 'Papeleria', detalles: '15x20cm 180grs x 24', foto: './IMG/Fotos ecommerce/papel-ilustrado-correo-bonito.png'},
    { nombre: 'Papeles Pastel', precio: 9134, categoria: 'Papeleria', detalles: '30x30cm 160grs x 35', foto: './IMG/Fotos ecommerce/PAPELES-PASTELES.png'},
    { nombre: 'Resaltador Sharpie', precio: 5694, categoria: 'Resaltadores', detalles: 'Snote x 12 unidades.', foto: './IMG/Fotos ecommerce/s-note-12.png'},
    { nombre: 'Resaltador Sharpie', precio: 7864, categoria: 'Resaltadores', detalles: 'Sharpie Tank + Pocket x16', foto: './IMG/Fotos ecommerce/sharpie-tank.png'},
    { nombre: 'Resaltador Filgo', precio: 4170, categoria: 'Resaltadores', detalles: 'Creativo Lighter Fun x 12', foto: './IMG/Fotos ecommerce/ligther-fun.png'},
    { nombre: 'Acuarelas', precio: 6642, categoria: 'Escolar', detalles: '36 Colores Bandeja    + Pincel', foto: './IMG/Fotos ecommerce/acuarelas.png'},
    { nombre: 'Señaladores', precio: 809, categoria: 'Escolar', detalles: 'Banderitas Pastel x 8 unidades.', foto: './IMG/Fotos ecommerce/banderitas.png'},
    { nombre: 'Broches', precio: 1496, categoria: 'Escolar', detalles: 'Madera. 25mm x 50. Colores surtidos.', foto: './IMG/Fotos ecommerce/13-broche-color.png'},
   
]

representarCards()
representarCardsDestacadas()


function representarCards() {
    for(let i=0; i<productos.length; i++) {
        document.querySelector('.cards-container').insertAdjacentHTML ("afterbegin", 
            '<section id="cards">' +
                '<img src="' + productos[i].foto + '" alt="">' +
                '<p style="font-variant:small-caps; font-size:0.8em; color:#ADADAD;"> '+ productos[i].categoria +'</p>' +
                '<p style="margin-left:0.5em; margin-right:0.5em; "><span style="font-variant:small-caps; font-size:1em; font-weight:bold;">'+ productos[i].nombre + '</span>: '+  productos[i].detalles  +'</p>' +
                '<p style="font-size:1.3em; font-weight:bold; color:#ec5151; margin-top:0.2em">$'+ productos[i].precio +'</p>' +
                "<div id='botones'><a href='./carrito.html'><button id='cart'><b>Agregar al Carrito</b></button></a><button id='fav'><i class='fa-regular fa-heart'></i></button></div>" +  
            '</section>')      
    }
}

function representarCardsDestacadas() {
    for(let i=0; i<productosDestacados.length; i++) {
        document.querySelector('.cards-container-destacadas').innerHTML += 
            '<section id="cards-destacadas">' +
            '<img src="' + productosDestacados[i].foto + '" alt="">' +
            '<p><span style="font-variant:small-caps; font-size:0.7em; font-weight:bold;">'+ productosDestacados[i].nombre +'</p>' +
            '<p style="font-size:0.8em; font-weight:bold; color:#ec5151; margin-top:0.3em">$'+ productosDestacados[i].precio +'</p>' +
            '<br>' +
            "<div id='botones-d'><a href='./carrito.html'<button id='cart-d'><i class='fa-solid fa-cart-shopping'></i></button></a><button id='fav-d'><i class='fa-regular fa-heart'></i></button></div>" + 
            '</section>'
    }
}

let btnFav = document.querySelectorAll("#fav")
let btnCart = document.querySelectorAll("#cart")

let cambio = false
for(i=0; i<btnFav.length;i++){
    btnFav[i].addEventListener("click", function(){
        this.innerHTML = "<i class='fa-solid fa-heart'></i>"
        if (cambio) {
            this.innerHTML = "<i class='fa-solid fa-heart'></i>"
            cambio = false
        }else{
            this.innerHTML = "<i class='fa-regular fa-heart'></i>"
          cambio = true
        }
})
}

let btnFavD = document.querySelectorAll("#fav-d")
let btnCartD = document.querySelectorAll("#cart-d")

let cambioD = false
for(i=0; i<btnFavD.length;i++){
    btnFavD[i].addEventListener("click", function(){
        this.innerHTML = "<i class='fa-solid fa-heart'></i>"
        if (cambioD) {
            this.innerHTML = "<i class='fa-solid fa-heart'></i>"
            cambioD = false
        }else{
            this.innerHTML = "<i class='fa-regular fa-heart'></i>"
          cambioD = true
        }
})
}

//Carrousel
/* const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')


punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{
        let posicion  = i
        let operacion = posicion * -33.33

        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
}) */

