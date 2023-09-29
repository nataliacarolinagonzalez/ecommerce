function agregar(e) {
    e.preventDefault()

    let refNombre = document.getElementById('nombre')
    let refPrecio = document.getElementById('precio')
    let refStock = document.getElementById('stock')
    let refMarca = document.getElementById('marca')
    let refCategoria = document.getElementById('categoria')
    let refDetalles = document.getElementById('detalles')
    let refFoto = document.getElementById('foto')
    let refEnvio = document.getElementById('envio')

    let nombre = refNombre.value
    let precio = refPrecio.value
    let stock = refStock.value
    let marca = refMarca.value
    let categoria = refCategoria.value
    let detalles = refDetalles.value
    let foto = refFoto.value
    let envio = refEnvio.checked

    productos.push({
        nombre : nombre,
        precio : precio,
        stock : stock,
        marca : marca,
        categoria : categoria,
        detalles : detalles,
        foto : foto,
        envio : envio
    })

    representarTablaProductos()

    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDetalles.value = ''
    refFoto.value = ''
    refEnvio.checked = false
}
representarTablaProductos()
function representarTablaProductos() {
    
    let filasTabla = '<tr>' +
                        '<th>nombre</th>' +
                        '<th>precio</th>' +
                        '<th>stock</th>' +
                        '<th>marca</th>' +
                        '<th>categoría</th>' +
                        '<th>detalles</th>' +
                        '<th>foto</th>' +
                        '<th>envío</th>' +
                    '</tr>'

    
        for(let i=0; i<productos.length; i++) {
            filasTabla += 
                '<tr>' +
                    '<td>'+ productos[i].nombre  +'</td>' +
                    '<td> $'+ productos[i].precio +'</td>' +
                    '<td> '+ productos[i].stock +'</td>' +
                    '<td> '+ productos[i].marca +'</td>' +
                    '<td> '+ productos[i].categoria +'</td>' +
                    '<td> '+ productos[i].detalles +'</td>' +
                    '<td><img width="50" src="' + productos[i].foto + '" alt="foto de '+productos[i].nombre+'"></td>' +
                    '<td>'+ (productos[i].envio? 'Si':'No') +'</td>' +
                '</tr>'
        }


    document.querySelector('table').innerHTML = filasTabla
}



    

