let productos = [
    { nombre: 'TV', precio: 145154, stock: 44, marca: 'Samsung', categoria: 'Computación', detalles: 'detalles del TV...', envio: false, foto: 'https://samsungar.vtexassets.com/arquivos/ids/176324-800-auto?width=800&height=auto&aspect=true' },
    { nombre: 'Mouse', precio: 4567, stock: 65, marca: 'Genius', categoria: 'Computación', detalles: 'detalles del mouse...', envio: true, foto: 'https://tienda.anywayinsumos.com.ar/15425-thickbox_default/mouse-genius-usb-dx-110-120-rojo.jpg' },
    { nombre: 'Mesa', precio: 8765, stock: 100, marca: 'Pinolandia', categoria: 'Hogar', detalles: 'Mesa de pino', envio: true, foto: 'https://http2.mlstatic.com/D_NQ_NP_790402-MLA70515144291_072023-O.webp' },
    { nombre: 'Heladera', precio: 34567, stock: 23, marca: 'Philips', categoria: 'Electrodoméstico', detalles: 'Color blanca', envio: false, foto: 'https://mancihogar.com.ar/wp-content/uploads/2022/10/370.jpg' },
    { nombre: 'Memoria DDR', precio: 65432, stock: 78, marca: 'Kingston', categoria: 'Computación', detalles: '16GB', envio: true, foto: 'https://www.totalcompu.com.ar/image/thumbnails/18/8f/memoria_ddr_1gb_kingston_con_gtia_zona_sur_oferta_1247_MLA4742383680_072013_F_1__jpg-100599-600x600.jpg' },  
    { nombre: 'TV', precio: 1, stock: 44, marca: 'Samsung', categoria: 'Computación', detalles: 'detalles del TV...', envio: false, foto: 'https://samsungar.vtexassets.com/arquivos/ids/176324-800-auto?width=800&height=auto&aspect=true' },
    { nombre: 'Mouse', precio: 4567, stock: 65, marca: 'Genius', categoria: 'Computación', detalles: 'detalles del mouse...', envio: true, foto: 'https://tienda.anywayinsumos.com.ar/15425-thickbox_default/mouse-genius-usb-dx-110-120-rojo.jpg' },
    { nombre: 'Mesa', precio: 8765, stock: 100, marca: 'Pinolandia', categoria: 'Hogar', detalles: 'Mesa de pino', envio: true, foto: 'https://http2.mlstatic.com/D_NQ_NP_790402-MLA70515144291_072023-O.webp' },
    { nombre: 'Heladera', precio: 34567, stock: 23, marca: 'Philips', categoria: 'Electrodoméstico', detalles: 'Color blanca', envio: false, foto: 'https://mancihogar.com.ar/wp-content/uploads/2022/10/370.jpg' },
    { nombre: 'Memoria DDR', precio: 65432, stock: 78, marca: 'Kingston', categoria: 'Computación', detalles: '16GB', envio: true, foto: 'https://www.totalcompu.com.ar/image/thumbnails/18/8f/memoria_ddr_1gb_kingston_con_gtia_zona_sur_oferta_1247_MLA4742383680_072013_F_1__jpg-100599-600x600.jpg' },
    { nombre: 'TV', precio: 1, stock: 44, marca: 'Samsung', categoria: 'Computación', detalles: 'detalles del TV...', envio: false, foto: 'https://samsungar.vtexassets.com/arquivos/ids/176324-800-auto?width=800&height=auto&aspect=true' },
    { nombre: 'Mouse', precio: 4567, stock: 65, marca: 'Genius', categoria: 'Computación', detalles: 'detalles del mouse...', envio: true, foto: 'https://tienda.anywayinsumos.com.ar/15425-thickbox_default/mouse-genius-usb-dx-110-120-rojo.jpg' },
    { nombre: 'Mesa', precio: 8765, stock: 100, marca: 'Pinolandia', categoria: 'Hogar', detalles: 'Mesa de pino', envio: true, foto: 'https://http2.mlstatic.com/D_NQ_NP_790402-MLA70515144291_072023-O.webp' },
    { nombre: 'Heladera', precio: 34567, stock: 23, marca: 'Philips', categoria: 'Electrodoméstico', detalles: 'Color blanca', envio: false, foto: 'https://mancihogar.com.ar/wp-content/uploads/2022/10/370.jpg' },
    { nombre: 'Memoria DDR', precio: 65432, stock: 78, marca: 'Kingston', categoria: 'Computación', detalles: '16GB', envio: true, foto: 'https://www.totalcompu.com.ar/image/thumbnails/18/8f/memoria_ddr_1gb_kingston_con_gtia_zona_sur_oferta_1247_MLA4742383680_072013_F_1__jpg-100599-600x600.jpg' },  
    { nombre: 'TV', precio: 1, stock: 44, marca: 'Samsung', categoria: 'Computación', detalles: 'detalles del TV...', envio: false, foto: 'https://samsungar.vtexassets.com/arquivos/ids/176324-800-auto?width=800&height=auto&aspect=true' },
    { nombre: 'Mouse', precio: 4567, stock: 65, marca: 'Genius', categoria: 'Computación', detalles: 'detalles del mouse...', envio: true, foto: 'https://tienda.anywayinsumos.com.ar/15425-thickbox_default/mouse-genius-usb-dx-110-120-rojo.jpg' },
    { nombre: 'Mesa', precio: 8765, stock: 100, marca: 'Pinolandia', categoria: 'Hogar', detalles: 'Mesa de pino', envio: true, foto: 'https://http2.mlstatic.com/D_NQ_NP_790402-MLA70515144291_072023-O.webp' },
    { nombre: 'Heladera', precio: 34567, stock: 23, marca: 'Philips', categoria: 'Electrodoméstico', detalles: 'Color blanca', envio: false, foto: 'https://mancihogar.com.ar/wp-content/uploads/2022/10/370.jpg' },
    { nombre: 'Memoria DDR', precio: 65432, stock: 78, marca: 'Kingston', categoria: 'Computación', detalles: '16GB', envio: true, foto: 'https://www.totalcompu.com.ar/image/thumbnails/18/8f/memoria_ddr_1gb_kingston_con_gtia_zona_sur_oferta_1247_MLA4742383680_072013_F_1__jpg-100599-600x600.jpg' }, 
    { nombre: 'Mouse', precio: 4567, stock: 65, marca: 'Genius', categoria: 'Computación', detalles: 'detalles del mouse...', envio: true, foto: 'https://tienda.anywayinsumos.com.ar/15425-thickbox_default/mouse-genius-usb-dx-110-120-rojo.jpg' },
    { nombre: 'Mesa', precio: 8765, stock: 100, marca: 'Pinolandia', categoria: 'Hogar', detalles: 'Mesa de pino', envio: true, foto: 'https://http2.mlstatic.com/D_NQ_NP_790402-MLA70515144291_072023-O.webp' },
    { nombre: 'Heladera', precio: 34567, stock: 23, marca: 'Philips', categoria: 'Electrodoméstico', detalles: 'Color blanca', envio: false, foto: 'https://mancihogar.com.ar/wp-content/uploads/2022/10/370.jpg' },
    { nombre: 'Memoria DDR', precio: 65432, stock: 78, marca: 'Kingston', categoria: 'Computación', detalles: '16GB', envio: true, foto: 'https://www.totalcompu.com.ar/image/thumbnails/18/8f/memoria_ddr_1gb_kingston_con_gtia_zona_sur_oferta_1247_MLA4742383680_072013_F_1__jpg-100599-600x600.jpg' }, 
]


let productosDestacados = [
    { nombre: 'TV', precio: 1, stock: 44, marca: 'Samsung', categoria: 'Computación', detalles: 'detalles del TV...', envio: false, foto: 'https://samsungar.vtexassets.com/arquivos/ids/176324-800-auto?width=800&height=auto&aspect=true' },
    { nombre: 'Mouse', precio: 4567, stock: 65, marca: 'Genius', categoria: 'Computación', detalles: 'detalles del mouse...', envio: true, foto: 'https://tienda.anywayinsumos.com.ar/15425-thickbox_default/mouse-genius-usb-dx-110-120-rojo.jpg' },
    { nombre: 'Mesa', precio: 8765, stock: 100, marca: 'Pinolandia', categoria: 'Hogar', detalles: 'Mesa de pino', envio: true, foto: 'https://http2.mlstatic.com/D_NQ_NP_790402-MLA70515144291_072023-O.webp' },
    { nombre: 'Heladera', precio: 34567, stock: 23, marca: 'Philips', categoria: 'Electrodoméstico', detalles: 'Color blanca', envio: false, foto: 'https://mancihogar.com.ar/wp-content/uploads/2022/10/370.jpg' },
    { nombre: 'Memoria DDR', precio: 65432, stock: 78, marca: 'Kingston', categoria: 'Computación', detalles: '16GB', envio: true, foto: 'https://www.totalcompu.com.ar/image/thumbnails/18/8f/memoria_ddr_1gb_kingston_con_gtia_zona_sur_oferta_1247_MLA4742383680_072013_F_1__jpg-100599-600x600.jpg' },  
]

function representarCards() {
    for(let i=0; i<productos.length; i++) {
        document.querySelector('.cards-container').innerHTML += 
            '<section id="cards">' +
                '<img src="' + productos[i].foto + '" alt="">' +
                '<p style="font-variant:small-caps; font-size:0.8em; color:#ADADAD;"> '+ productos[i].categoria +'</p>' +
                '<p><span style="font-variant:small-caps; font-size:1.1em; font-weight:bold;letter-spacing: 0.1em;">'+ productos[i].nombre + '</span>: '+  productos[i].detalles  +'</p>' +
                '<p style="font-size:1.3em; color:#ec5151; margin-top:0.3em"><b>$</b>'+ productos[i].precio +'</p>' +
                '<br>' +
                /* "<div><button><b>Agregar al Carrito</b>" + "</button>" +
                "<a href='./favoritos.html'><img id='fav' src='./IMG/favoritos.png'alt='Favoritos'></a>" + "</div>" */
                "<button><b id='btn-carrito-cards'>Agregar al carrito</b>             <span class='icon-heart' style='font-size: 1.4em;'></span></button>" +
                 
                
            '</section>'
    }
}


function representarCardsDestacadas() {
    for(let i=0; i<productosDestacados.length; i++) {
        document.querySelector('.cards-container-destacadas').innerHTML += 
            '<section id="cards-destacadas">' +
                '<img src="' + productosDestacados[i].foto + '" alt="">' +
                '<p style="font-variant:small-caps;"> '+ productosDestacados[i].categoria +'</p>' +
                '<h3>'+ productosDestacados[i].nombre  +'</h3>' +
                '<p> '+ productosDestacados[i].detalles +'</p>' +
                '<p> $'+ productosDestacados[i].precio +'</p>' +
                '<br>' +
                '<button><b>Agregar al Carrito</b> '+'</button>' +
                "<a href='./favoritos.html'><img src='./IMG/favoritos.png' alt='Favoritos'></a>"
            '</section>'
    }
}
representarCards()
representarCardsDestacadas()


