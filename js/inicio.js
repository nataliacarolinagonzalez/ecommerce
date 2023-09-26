let productos = [
    { nombre: 'Cuaderno Escolar', precio: 4900, categoria: 'Cuadernos', detalles: 'Cuadriculado 21x27cm. Caritas.', foto: './IMG/Fotos ecommerce/1-cuaderno-caritas.png' },
    { nombre: 'Cuaderno Escolar', precio: 4900, categoria: 'Cuadernos', detalles: 'Liso 21x27cm. Celeste.', foto: './IMG/Fotos ecommerce/2-cuaderno-liso-celeste.png' },
    { nombre: 'Cuaderno Escolar', precio: 2618, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado A4. Unicorn ', foto: './IMG/Fotos ecommerce/cuaderno-unicornio.png' },
    { nombre: 'Cuaderno Universitario', precio: 5060, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado A4. Trust. ', foto: './IMG/Fotos ecommerce/cuadernotrust-rayado.png' },
    { nombre: 'Cuaderno Universitario', precio: 5060, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado A4. Choose. ', foto: './IMG/Fotos ecommerce/cuaderno-A4-Choose.png' },
    { nombre: 'Cuaderno Harry Potter', precio: 3600, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado con espiral A4. ', foto: './IMG/Fotos ecommerce/cuaderno-harry-potter-2.png'},
    { nombre: 'Lápices Acuarelados', precio: 3170, categoria: 'Lápices', detalles: 'Lápices de Colores Acuarelados x 12. ', foto: './IMG/Fotos ecommerce/8-lapices-acuarelables.png'},
    { nombre: 'Lápices Flúo', precio: 1975, categoria: 'Lápices', detalles: 'Lápices de Colores Pinto Fluo x 8', foto: './IMG/Fotos ecommerce/pinto-fluo.png'}, 
    { nombre: 'Lápices con goma', precio: 579, categoria: 'Lápices', detalles: 'Stay Wild. Animales. Color verde x 1', foto: './IMG/Fotos ecommerce/10-lapiz-con-goma.png'}, 
    { nombre: 'Lápices de colores', precio: 3969, categoria: 'Lápices', detalles: 'Lápices Pasteles Pastel Tentación x 20 ', foto: './IMG/Fotos ecommerce/lapiz-pastel.png'}, 
    { nombre: 'Lápices de colores', precio: 17356, categoria: 'Lápices', detalles: 'Mooving Lata Todos tus Colores x 48', foto: './IMG/Fotos ecommerce/lata-por-48.png'}, 
    { nombre: 'Lápices de colores', precio: 3789, categoria: 'Lápices', detalles: 'Lápices de colores Colors 3.0 x 24.', foto: './IMG/Fotos ecommerce/giotto-3.0-por-24.png'},
    { nombre: 'Marcadores Sharpie', precio: 4114, categoria: 'Marcadores', detalles: 'Vintage Travel x 8 ', foto: './IMG/Fotos ecommerce/12-blister-por-8.png'},
    { nombre: 'Marcadores Glitter', precio: 3472, categoria: 'Marcadores', detalles: 'Colores pastel x 6 ', foto: './IMG/Fotos ecommerce/mooving.png'},
    { nombre: 'Marcadores Sharpie', precio: 5989, categoria: 'Marcadores', detalles: 'Punta Fina. Tropical x 12. ', foto: './IMG/Fotos ecommerce/sharpie-tropical.png'},
    { nombre: 'Marcadores Filgo', precio: 6498, categoria: 'Marcadores', detalles: 'Marker 036 x 20. ', foto: './IMG/Fotos ecommerce/marker-036.png'},
    { nombre: 'Marcadores Glitter', precio: 4774, categoria: 'Marcadores', detalles: 'Marcador Turbo Glitter x 8. ', foto: './IMG/Fotos ecommerce/TURBO-GLITTER.png'},
    { nombre: 'Marcadores Jumbo', precio: 2939, categoria: 'Marcadores', detalles: 'Marcador Pinto Jumbo x 10. ', foto: './IMG/Fotos ecommerce/jumbo.png'},
    { nombre: 'Perforadora', precio: 2924, categoria: 'Crafting', detalles: 'Artistica 3/4". Huella', foto: './IMG/Fotos ecommerce/PERFORADORA-PISADA.png'},
    { nombre: 'Perforadora', precio: 4463, categoria: 'Crafting', detalles: 'Artistica 1". Mariposa', foto: './IMG/Fotos ecommerce/perforadora-relieve-mariposa.png'},
    { nombre: 'Perforadora', precio: 4463, categoria: 'Crafting', detalles: 'Artistica 2". Estampilla', foto: './IMG/Fotos ecommerce/PERFORADORA-ESTAMPILLA.png'},
    { nombre: 'Perforadora', precio: 12496, categoria: 'Crafting', detalles: 'Artistica 2". Estrella.', foto: './IMG/Fotos ecommerce/perforadora-estrela-5-cm.png'},
    { nombre: 'Perforadora', precio: 4304, categoria: 'Crafting', detalles: 'Pinza Estrella 1/4". Estrella', foto: './IMG/Fotos ecommerce/PINZA-ESTRELLA.png'},
    { nombre: 'Cutter', precio: 3020, categoria: 'Crafting', detalles: 'Mango ergonómico. Blanco', foto: './IMG/Fotos ecommerce/11-BISTURI-BLANCO.png'},
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
    { nombre: 'Notas adhesivas', precio: 1042, categoria: 'Escolar', detalles: 'Maw Mania Neon 51x51', foto: './IMG/Fotos ecommerce/cubo-neon.png'},
    { nombre: 'Binder Clips', precio: 1276, categoria: 'Escolar', detalles: 'Pastel. 25mm x 6 unidades', foto: './IMG/Fotos ecommerce/clips-25mm.png'},
    { nombre: 'Binder Clips', precio: 1387, categoria: 'Escolar', detalles: 'Pastel 19mm x 12 unidades', foto: './IMG/Fotos ecommerce/clips-19mm.png'},
    { nombre: 'Señaladores', precio: 809, categoria: 'Escolar', detalles: 'Banderitas Pastel x 8 unidades.', foto: './IMG/Fotos ecommerce/banderitas.png'},
    { nombre: 'Broches', precio: 1496, categoria: 'Escolar', detalles: 'Madera. 25mm x 50. Colores surtidos.', foto: './IMG/Fotos ecommerce/13-broche-color.png'},
]


let productosDestacados = [
    { nombre: 'Cuaderno Escolar', precio: 4900, categoria: 'Cuadernos', detalles: 'Cuadriculado 21x27cm. Caritas.', foto: './IMG/Fotos ecommerce/1-cuaderno-caritas.png' },
    { nombre: 'Cuaderno Escolar', precio: 4900, categoria: 'Cuadernos', detalles: 'Liso 21x27cm. Celeste.', foto: './IMG/Fotos ecommerce/2-cuaderno-liso-celeste.png' },
    { nombre: 'Cuaderno Escolar', precio: 2618, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado A4. Unicorn ', foto: './IMG/Fotos ecommerce/cuaderno-unicornio.png' },
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
                "<div id='botones'><button id='cart'><b>Agregar al Carrito</b></button><button id='fav'><i class='fa-regular fa-heart'></i></button></div>" +  
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
            "<div id='botones-d'><a href='http://www.google.com' <button id='cart-d'><i class='fa-solid fa-cart-shopping'></i></button></a><button id='fav-d'><i class='fa-regular fa-heart'></i></button></div>" + 
            '</section>'
    }
}

//no funca
let btnFav = document.querySelectorAll("#fav")
let btnCart = document.querySelectorAll("#cart")

btnFav.addEventListener("click", function(){
    console.log("apretee")
    btnFav.innerHTML = "<i class='fa-solid fa-heart'></i>"
    let p = document.createElement("p")
    p.textContent =+ "meti un favorito"
    document.body.appendChild(p)
     
})


