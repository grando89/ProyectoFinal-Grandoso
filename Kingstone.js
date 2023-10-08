


class Producto{

    constructor( genero, nombre , precio, stock , sabor){
    this.genero = genero;
    this.nombre = nombre;
    this.efecto = precio;
    this.stock = stock;
    this.sabor = sabor;
    
}

    get_datos(){
        console.log("<---DATOS PRODUCTO---->")
        console.log("genero:", this.genero);
        console.log("nombre:", this.nombre);
        console.log("precio:", this.precio);
        console.log("stock:", this.stock);
        console.log("sabor:", this.sabor);
        console.log("-----------------------");
    }


update_stock(cantidad){

    if (this.stock >= cantidad){
        this.stock = this.stock - cantidad;
        return true

    }
    else{
        console.log("No poseemos esa cantidad solicitada");
        console.log("El stock disponible es de  :", this.stock, "gramos");
        return false
    }
}

}








let listaProductos =[];
    
    
    listaProductos.push(new Producto ("hibrida" ,  "silver Haze" , 1200 , 100 ,"citrus"));
    listaProductos.push(new Producto  ("indica" , "chocolope", 1270, 230 , "chocolate"));
    listaProductos.push(new Producto ( "hibrida" , "sour diesel",1900, 120, "acre" ));
    listaProductos.push(new Producto ( "indica", "lemon tangerine", 2100, 50, "alimonado"));
    listaProductos.push(new Producto ( "indica" , "mango haze", 2000, 20, "mango"));
    listaProductos.push(new Producto ("sativa", "blue cheese", 1700, 18 , "queso"));   
    listaProductos.push(new Producto ("sativa", "blue berry", 2300, 170, "mora"));
    listaProductos.push(new Producto ("hibrida", "white rhino", 1200, 10 , "madera"));
    listaProductos.push(new Producto ("hibrida", "vainilla kush", 1100, 70, "vainilla" ));
    listaProductos.push(new Producto ("sativa", "black diamond", 2200, 172, "frutal"));
    listaProductos.push(new Producto ("sativa", "blue dream", 2400, 90, "dulce"));
    listaProductos.push(new Producto ("indica", "Og Kush", 3000, 190, "pino"));
    listaProductos.push(new Producto ("hibrida", "White Widow", 3200, 92, "picante"));
    listaProductos.push(new Producto ("indica", "Pineapple Express", 4000, 7, "anana"));
    listaProductos.push(new Producto ("sativa", "Ak 47", 3400, 100, "terroso"));
  
    

let imagenesSativa = ["imagenes/sativa/ak47.jpg" ,"imagenes/sativa/blackdiamond.jpg", "imagenes/sativa/blueberry.jpg", "imagenes/sativa/bluecheese.jpg", "imagenes/sativa/bluedream.jpg"]

let imagenesIndica = ["imagenes/indica/chocolope.jpg" ,"imagenes/indica/lemontangerine.jpg", "imagenes/indica/mangohaze.jpg", "imagenes/indica/ogkush.jpg", "imagenes/indica/pineappleexpress.jpg"]

let imagenesHibrida = ["imagenes/hibrida/silverhaze.jpg" ,"imagenes/hibrida/sourdiesel.jpg", "imagenes/hibrida/vainillakush.jpg", "imagenes/hibrida/whiterinho.jpg", "imagenes/hibrida/whitewidow.jpg"]






for ( let i = 0; i < 15; i++) {

        localStorage.setItem((listaProductos[i].nombre), JSON.stringify(listaProductos[i]))
        
        }


        
        function loopsativa() {
            let listadoSativa = [];
    
            for (let i = 0; i < 15; i++) {
            let productoSativa = (listaProductos[i].nombre);
            let productoRecuperado = JSON.parse(localStorage.getItem(productoSativa));
        
            if (productoRecuperado.genero === "sativa") {
                listadoSativa.push(productoRecuperado.nombre);
            }
            }
        
            return listadoSativa;
        }
        

        function loopindica(){
            let listadoIndica = [];
            
            for (let i = 0; i < 15; i++) {
                if (listaProductos[i].genero === "indica") {
                    listadoIndica.push(listaProductos[i].nombre);
                }
            }
        
            return listadoIndica
        }
        
            
        function loophibrida(){
        
            let listadoHibrida = [];
        
                    for( let i = 0 ;  i < 15 ; i++){
                    
                    if(listaProductos[i].genero == "hibrida"){
                    listadoHibrida.push(listaProductos[i].nombre);
                    }
                    }
                    return listadoHibrida
                    }
        
        
        let precioSativa = 2000;
        let precioIndica = 1500;
        let precioHibrida = 3000;

    




        
        function verificarEdad(edad) {
            if (edad >= 18) {
            
                
            } else {
                alert("El ingreso es solo apto para mayores de 18 años.");
            }
        }
        
        
        
        
        
        
        let btnEdad = document.getElementById("btnEdad");
        let inputEdad = document.getElementById("edad");
        
        btnEdad.addEventListener("click", function() {
        
            let edad = (inputEdad.value); 
            
            if (edad < 18) {
               
                Swal.fire({
                    title:"Debe ser mayor de 18 para ingresar",
                    text:"Intente nuevamente",
                    icon:"error",
                    color:"yellow",
                    background:"purple",
                })
            }
            else{
                Swal.fire({
                    title:"Bienvenido a KINGSTONE",
                    icon:"success",
                    color:"yellow",
                    background:"green",
                })
                } })


                function borrar(){
                    let btn_borrar = document.querySelectorAll(".borrarElemento");
                        
                    for( let btn of btn_borrar ){
                    
                        btn.addEventListener("click" , function(){
                    
                            let fila = this.parentNode.parentNode;
                    
                    
                            fila.remove();
                        }
                    )}
                    }







    
let formularioSativa= document.getElementById("formularioSativa");    
let compraS = document.getElementById("btnCompraS")
let inputSativa = document.getElementById("inputSativa")
let resultadoSativa = document.getElementById("resultadoSativa")
let gramosS = document.getElementById("gramosS")

compraS.addEventListener("click", function(){
    let nombreProducto = inputSativa.value;
    let cantidadGramos = gramosS.value;
    let precioFinal = cantidadGramos * precioSativa;
    
    for (let i = 0; i < listaProductos.length; i++) {
        let producto = listaProductos[i];
        if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() &&
        cantidadGramos <= producto.stock){
    
    

let fila = document.createElement("tr");

fila.innerHTML = 
`<td>${""}</td>
<td>${nombreProducto}</td>
<td>${cantidadGramos}</td>
<td>${precioFinal} </td>
<td><button class="btn btn-danger borrarElemento">Borrar</button></td`;

let tbody = document.getElementById("tbody");
tbody.appendChild(fila);

}
if  (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() &&
cantidadGramos > producto.stock){
    Swal.fire({
            title:"No disponemos de stock suficiente",
            icon:"error",
            color:"red",
            background:"orange",
        })
        } 
}
borrar()
}

)
        
        
        let btnSativa = document.getElementById("btnSativa");
        
        btnSativa.addEventListener("click", function(){
            
        
        
            let listaSativa = document.getElementById("listaSativa")
            listaSativa.style.backgroundColor ="";
            listaSativa.style.fontSize ="25px";
            formularioSativa.style.display ="block";
        
            listaSativa.innerHTML = "";


            imagenesSativa.forEach(function(rutaImagen) {
                let li = document.createElement("li");
                let img = document.createElement("img");
                img.src = rutaImagen; 
                li.appendChild(img);
                listaSativa.appendChild(li);
        
                
            });
    
        });

        
let formularioIndica= document.getElementById("formularioIndica");    
let compraI = document.getElementById("btnCompraI")
let inputIndica = document.getElementById("inputIndica")
let resultadoIndica= document.getElementById("resultadoIndica")
let gramosI = document.getElementById("gramosI")

compraI.addEventListener("click",function(){
    let nombreProducto = inputIndica.value;
    let cantidadGramos = gramosI.value;
    let precioFinal = cantidadGramos * precioIndica;


    for (let i = 0; i < listaProductos.length; i++) {
        let producto = listaProductos[i];
        if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() &&
        cantidadGramos <= producto.stock){

    
    

let fila = document.createElement("tr");

fila.innerHTML = 
`<td>${""}</td>
<td>${nombreProducto}</td>
<td>${cantidadGramos}</td>
<td>${precioFinal} </td>
<td><button class="btn btn-danger borrarElemento">Borrar</button></td`;

let tbody = document.getElementById("tbody");
tbody.appendChild(fila);

}
if  (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() &&
cantidadGramos > producto.stock){
    Swal.fire({
            title:"No disponemos de stock suficiente",
            icon:"error",
            color:"red",
            background:"orange",
        })
        } 
}
borrar()
}

)
        
        let btnIndica = document.getElementById("btnIndica");
        
        btnIndica.addEventListener("click", function(){
        
        
        
        let listaIndica = document.getElementById("listaIndica")
        listaIndica.style.backgroundColor ="";
        listaIndica.style.fontSize ="25px";
        formularioIndica.style.display ="block";

        listaIndica.innerHTML = "";
        
        imagenesIndica.forEach(function(rutaImagen) {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = rutaImagen; 
            li.appendChild(img);

            listaIndica.appendChild(li);
            
            
        });
        
        });
        
        
let formularioHibrida= document.getElementById("formularioHibrida");    
let compraH = document.getElementById("btnCompraH")
let inputHibrida = document.getElementById("inputHibrida")
let resultadoHibrida= document.getElementById("resultadoHibrida")
let gramosH = document.getElementById("gramosH")

compraH.addEventListener("click",function(){
    let nombreProducto = inputHibrida.value;
    let cantidadGramos = gramosH.value;
    let precioFinal = cantidadGramos * precioHibrida;


    for (let i = 0; i < listaProductos.length; i++) {
        let producto = listaProductos[i];
        if (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() &&
        cantidadGramos <= producto.stock){
            let fila = document.createElement("tr");

fila.innerHTML = 
`<td>${""}</td>
<td>${nombreProducto}</td>
<td>${cantidadGramos}</td>
<td>${precioFinal} </td>
<td><button class="btn btn-danger borrarElemento">Borrar</button></td`;

let tbody = document.getElementById("tbody");
tbody.appendChild(fila);

}

if  (producto.nombre.toLowerCase() === nombreProducto.toLowerCase() &&
cantidadGramos > producto.stock){
    Swal.fire({
            title:"No disponemos de stock suficiente",
            icon:"error",
            color:"red",
            background:"orange",
        })
        } 
}


borrar()

}


)      
        let btnHibrida = document.getElementById("btnHibrida");
        
        btnHibrida.addEventListener("click", function(){
            

        
            let listaHibrida = document.getElementById("listaHibrida")
            listaHibrida.style.backgroundColor ="";
            listaHibrida.style.fontSize ="25px";
            formularioHibrida.style.display ="block";
            
            listaHibrida.innerHTML = "";


            imagenesHibrida.forEach(function(rutaImagen) {
                let li = document.createElement("li");
                let img = document.createElement("img");
                img.src = rutaImagen; 
                li.appendChild(img);
    
                listaHibrida.appendChild(li);
                
                
            });
        });
        
        










