let productos = [
   
    { nombre: 'Cuaderno Escolar', 
    precio: 4900, 
    categoria: 'Cuadernos', 
    detalles: 'Liso 21x27cm. Celeste.', 
    oto: './IMG/Fotos ecommerce/2-cuaderno-liso-celeste.png', 
    tock: '180', 
    marca:"Rivadavia", 
    envio:"si" 
},
    { nombre: 'Cuaderno Escolar', precio: 2618, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado A4. Unicorn ', foto: './IMG/Fotos ecommerce/cuaderno-unicornio.png',stock: '380', marca:"Rivadavia", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Cuaderno Universitario', precio: 5060, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado A4. Trust. ', foto: './IMG/Fotos ecommerce/cuadernotrust-rayado.png', stock: '500', marca:"Rivadavia", edadDesde:"0", edadHasta:"100", envio:"si"  },
    { nombre: 'Cuaderno Universitario', precio: 5060, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado A4. Choose. ', foto: './IMG/Fotos ecommerce/cuaderno-A4-Choose.png', stock: '80', marca:"Rivadavia", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Cuaderno Harry Potter', precio: 3600, categoria: 'Cuadernos', detalles: 'Cuaderno Rayado con espiral A4. ', foto: './IMG/Fotos ecommerce/cuaderno-harry-potter-2.png', stock: '98', marca:"Éxito", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Lápices Acuarelados', precio: 3170, categoria: 'Lápices', detalles: 'Lápices de Colores Acuarelados x 12. ', foto: './IMG/Fotos ecommerce/8-lapices-acuarelables.png', stock: '380', marca:"Faber", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Lápices Flúo', precio: 1975, categoria: 'Lápices', detalles: 'Lápices de Colores Pinto Fluo x 8', foto: './IMG/Fotos ecommerce/pinto-fluo.png', stock: '90', marca:"Mooving", edadDesde:"0", edadHasta:"100", envio:"si" }, 
    { nombre: 'Lápices con goma', precio: 579, categoria: 'Lápices', detalles: 'Stay Wild. Animales. Color verde x 1', foto: './IMG/Fotos ecommerce/10-lapiz-con-goma.png', stock: '470', marca:"Rivadavia", edadDesde:"0", edadHasta:"100", envio:"si" }, 
    { nombre: 'Lápices de colores', precio: 3969, categoria: 'Lápices', detalles: 'Lápices Pasteles Pastel Tentación x 20 ', foto: './IMG/Fotos ecommerce/lapiz-pastel.png', stock: '38', marca:"Mooving", edadDesde:"0", edadHasta:"100", envio:"si" }, 
    { nombre: 'Lápices de colores', precio: 17356, categoria: 'Lápices', detalles: 'Mooving Lata Todos tus Colores x 48', foto: './IMG/Fotos ecommerce/lata-por-48.png', stock: '88', marca:"Mooving", edadDesde:"0", edadHasta:"100", envio:"si" }, 
    { nombre: 'Lápices de colores', precio: 3789, categoria: 'Lápices', detalles: 'Lápices de colores Colors 3.0 x 24.', foto: './IMG/Fotos ecommerce/giotto-3.0-por-24.png', stock: '550', marca:"Giotto", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Marcadores Sharpie', precio: 4114, categoria: 'Marcadores', detalles: 'Vintage Travel x 8 ', foto: './IMG/Fotos ecommerce/12-blister-por-8.png', stock: '380', marca:"Sharpie", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Marcadores Glitter', precio: 3472, categoria: 'Marcadores', detalles: 'Colores pastel x 6 ', foto: './IMG/Fotos ecommerce/mooving.png',stock: '1000', marca:"Giotto", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Marcadores Sharpie', precio: 5989, categoria: 'Marcadores', detalles: 'Punta Fina. Tropical x 12. ', foto: './IMG/Fotos ecommerce/sharpie-tropical.png', stock: '1380', marca:"Sharpie", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Marcadores Filgo', precio: 6498, categoria: 'Marcadores', detalles: 'Marker 036 x 20. ', foto: './IMG/Fotos ecommerce/marker-036.png', stock: '397', marca:"Filgo", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Marcadores Glitter', precio: 4774, categoria: 'Marcadores', detalles: 'Marcador Turbo Glitter x 8. ', foto: './IMG/Fotos ecommerce/TURBO-GLITTER.png', stock: '1380', marca:"Giotto", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Marcadores Jumbo', precio: 2939, categoria: 'Marcadores', detalles: 'Marcador Pinto Jumbo x 10. ', foto: './IMG/Fotos ecommerce/jumbo.png', stock: '657', marca:"Giotto", edadDesde:"0", edadHasta:"100", envio:"si" },
    { nombre: 'Perforadora', precio: 2924, categoria: 'Crafting', detalles: 'Artistica 3/4". Huella', foto: './IMG/Fotos ecommerce/PERFORADORA-PISADA.png', stock: '652', marca:"Ibi Craft", edadDesde:"7", edadHasta:"100", envio:"si" },
    { nombre: 'Perforadora', precio: 4463, categoria: 'Crafting', detalles: 'Artistica 1". Mariposa', foto: './IMG/Fotos ecommerce/perforadora-relieve-mariposa.png',  stock: '32', marca:"Ibi Craft", edadDesde:"7", edadHasta:"100", envio:"si"},
    { nombre: 'Perforadora', precio: 4463, categoria: 'Crafting', detalles: 'Artistica 2". Estampilla', foto: './IMG/Fotos ecommerce/PERFORADORA-ESTAMPILLA.png',  stock: '124', marca:"Ibi Craft", edadDesde:"7", edadHasta:"100", envio:"si"},
    { nombre: 'Perforadora', precio: 12496, categoria: 'Crafting', detalles: 'Artistica 2". Estrella.', foto: './IMG/Fotos ecommerce/perforadora-estrela-5-cm.png',  stock: '255', marca:"Ibi Craft", edadDesde:"7", edadHasta:"100", envio:"si"},
    { nombre: 'Perforadora', precio: 4304, categoria: 'Crafting', detalles: 'Pinza Estrella 1/4". Estrella', foto: './IMG/Fotos ecommerce/PINZA-ESTRELLA.png',  stock: '352', marca:"Ibi Craft", edadDesde:"7", edadHasta:"100", envio:"si"},
    { nombre: 'Cutter', precio: 3020, categoria: 'Crafting', detalles: 'Mango ergonómico. Blanco', foto: './IMG/Fotos ecommerce/11-BISTURI-BLANCO.png', stock: '11', marca:"Ibi Craft", edadDesde:"7", edadHasta:"100", envio:"si"},
    { nombre: 'Tijera', precio: 839, categoria: 'Crafting', detalles: 'Artística. Corte con forma. 6-1/2', foto: './IMG/Fotos ecommerce/tijera.png',  stock: '52', marca:"Ibi Craft", edadDesde:"7", edadHasta:"100", envio:"si"},
    { nombre: 'Cartulina', precio: 2159, categoria: 'Papeleria', detalles: 'Flúor. A4. Colores surtidos x 16', foto: './IMG/Fotos ecommerce/CARTULINA-FLUO.png',  stock: '154', marca:"Ibi Craft", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Papel Misionero', precio: 3470, categoria: 'Papeleria', detalles: 'A4. 125gr. x 100 hojas', foto: './IMG/Fotos ecommerce/CRAFT-125-GRS.png', stock: '14', marca:"Ibi Craft", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Papel Ilustrado', precio: 9951, categoria: 'Papeleria', detalles: '30x30cm 180grs x 24', foto: './IMG/Fotos ecommerce/papeles-ilustrados.png', stock: '321', marca:"Ibi Craft", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Papel Ilustrado', precio: 4135, categoria: 'Papeleria', detalles: '15x20cm 180grs x 24', foto: './IMG/Fotos ecommerce/papel-ilustrado-correo-bonito.png', stock: '2', marca:"Ibi Craft", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Papeles Pastel', precio: 9134, categoria: 'Papeleria', detalles: '30x30cm 160grs x 35', foto: './IMG/Fotos ecommerce/PAPELES-PASTELES.png', stock: '5', marca:"Ibi Craft", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Resaltador Sharpie', precio: 5694, categoria: 'Resaltadores', detalles: 'Snote x 12 unidades.', foto: './IMG/Fotos ecommerce/s-note-12.png', stock: '154', marca:"Sharpie", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Resaltador Sharpie', precio: 7864, categoria: 'Resaltadores', detalles: 'Sharpie Tank + Pocket x16', foto: './IMG/Fotos ecommerce/sharpie-tank.png', stock: '189', marca:"Sharpie", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Resaltador Filgo', precio: 4170, categoria: 'Resaltadores', detalles: 'Creativo Lighter Fun x 12', foto: './IMG/Fotos ecommerce/ligther-fun.png', stock: '258', marca:"Filgo", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Acuarelas', precio: 6642, categoria: 'Escolar', detalles: '36 Colores Bandeja    + Pincel', foto: './IMG/Fotos ecommerce/acuarelas.png', stock: '184', marca:"Luxor", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Notas adhesivas', precio: 1042, categoria: 'Escolar', detalles: 'Maw Mania Neon 51x51', foto: './IMG/Fotos ecommerce/cubo-neon.png', stock: '1544', marca:"Luxor", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Binder Clips', precio: 1276, categoria: 'Escolar', detalles: 'Pastel. 25mm x 6 unidades', foto: './IMG/Fotos ecommerce/clips-25mm.png', stock: '15', marca:"Mooving", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Binder Clips', precio: 1387, categoria: 'Escolar', detalles: 'Pastel 19mm x 12 unidades', foto: './IMG/Fotos ecommerce/clips-19mm.png', stock: '14', marca:"Mooving", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Señaladores', precio: 809, categoria: 'Escolar', detalles: 'Banderitas Pastel x 8 unidades.', foto: './IMG/Fotos ecommerce/banderitas.png', stock: '24', marca:"Mooving", edadDesde:"0", edadHasta:"100", envio:"si"},
    { nombre: 'Broches', precio: 1496, categoria: 'Escolar', detalles: 'Madera. 25mm x 50. Colores surtidos.', foto: './IMG/Fotos ecommerce/13-broche-color.png', stock: '31', marca:"Mooving", edadDesde:"0", edadHasta:"100", envio:"si"},
]





[
    {
      "nombre": "Cuaderno Escolar",
      "precio": 7900,
      "stock": 200,
      "marca": "Punto Uno",
      "categoria": "Cuadernos",
      "detalles": "Cuadriculado 21x27cm. Caritas",
      "envio": true,
      "foto": "https://acdn.mitiendanube.com/stores/607/264/products/4dedba09-2d1b-4f42-8bb7-93bc9baf52941-971cfb35a3a88775f216763208578138-1024-1024.webp",
      "id": "1"
    },
    
    {
      "nombre": "nombre 12", 
      "precio": 66,
      "stock": 48,
      "marca": "marca 12",
      "categoria": "categoria 12",
      "detalles": "detalles 12",
      "envio": false,
      "foto": "foto 12",
      "id": "12"
    },
    {
      "nombre": "nombre 13",
      "precio": 94,
      "stock": 29,
      "marca": "marca 13",
      "categoria": "categoria 13",
      "detalles": "detalles 13",
      "envio": false,
      "foto": "foto 13",
      "id": "13"
    },
    {
      "nombre": "nombre 14",
      "precio": 7,
      "stock": 41,
      "marca": "marca 14",
      "categoria": "categoria 14",
      "detalles": "detalles 14",
      "envio": false,
      "foto": "foto 14",
      "id": "14"
    },
    {
      "nombre": "nombre 15",
      "precio": 17,
      "stock": 50,
      "marca": "marca 15",
      "categoria": "categoria 15",
      "detalles": "detalles 15",
      "envio": false,
      "foto": "foto 15",
      "id": "15"
    }
  ]