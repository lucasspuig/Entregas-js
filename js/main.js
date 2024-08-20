

for (let i = 0; i <= 0; i++) {
    let edadObligatoria = 18;
    let edadUsuario = parseInt(prompt("Ingresa tu edad para acceder a la fiesta mas grande de Latinoamerica"));
    if (edadUsuario >= edadObligatoria) {
        console.log("Acceso confirmado");
        
}  else{
        alert("Este evento es para +18");
        console.log("Acceso denegado, no cumples con los requisitos");
        break;
    }






    function dato1(nombreApellido) {
        console.log("Hola " + nombreApellido);
    }
    nombreApellido = prompt("Nombre y apellido");

    dato1(nombreApellido);


let email = prompt("Ingrese direccion de correo electronico");

console.log("Direccion de correo: " + email);





    let envio = 3000;
    let vip = 25000;
    let ingreso = prompt("Seleccione con numero la cantidad de entradas ¨VIP¨ \n 0- Ninguna \n 1- Una entrada: $25.000 \n 2- Dos entrada: $50.000 \n 3- Tres entradas: $75.000")
    
    if (ingreso == "0" || ingreso == "cero" || ingreso == "CERO") {
        alert("Presiona aceptar para seleccionar tu  entrada General.");
    }
    else if (ingreso == "1" || ingreso == "uno" || ingreso == "UNO" ) {
        
        let resultadoVip1 = envio + vip;
        parseFloat(alert("Seleccionaste 1 Entrada Vip, valor mas envio: " + resultadoVip1));
        console.log("valor mas envio: " + resultadoVip1);
    }else if (ingreso == "2" || ingreso == "dos" || ingreso == "DOS") {
        
        let resultadoVip2 = vip * 2 + envio;
        parseFloat(alert("Seleccionaste Entrada Vip, valor mas envio: " + resultadoVip2));
        console.log("valor mas envio: " + resultadoVip2);
    } else if (ingreso == "3" || ingreso == "dos" || ingreso == "TRES") {
        let totalVip3 = vip * 3 + envio;
        let resultadoVip3 = totalVip3
        parseFloat(alert("Seleccionaste Entrada Vip, valor mas envio: " + resultadoVip3))
        console.log("valor mas envio: " + resultadoVip3);
    }else{
        alert("No seleccionaste ninguna opcion.")
        break;
    }






    let general = 15000;
    let ingreso2 = prompt("Seleccione con numero la cantidad de entradas ¨GENERAL¨ \n 0- Ninguna \n 1- Una entrada: $15.000 \n 2- Dos entrada: $30.000 \n 3- Tres entradas: $45.000")
    
    if (ingreso2 == "0" || ingreso2 == "cero" || ingreso2 == "CERO") {
        alert("Presiona aceptar para continuar con la operacion.");
    }
    else if (ingreso2 == "1" || ingreso2 == "uno" || ingreso2 == "UNO" ) {
        
        let resultadoGene1 = envio + general;
        parseFloat(alert("Seleccionaste 1 Entrada Vip, valor mas envio: " + resultadoGene1));
        console.log("valor mas envio: " + resultadoGene1);

    }else if (ingreso2 == "2" || ingreso2 == "dos" || ingreso2 == "DOS") {
        
        let resultadoGene2 = envio + general * 2;
        parseFloat(alert("Seleccionaste 2 Entradas Vip, valor mas envio: " + resultadoGene2));
        console.log("valor mas envio: " + resultadoGene2);

    } else if (ingreso2 == "3" || ingreso2 == "dos" || ingreso2 == "TRES") {
        
        let resultadoGene3 = envio + general * 3;
        parseFloat(alert("Seleccionaste 3 Entradas General, valor mas envio: " + resultadoGene3))
        console.log("valor mas envio: " + resultadoGene3);
    }else{
        alert("No seleccionaste ninguna opcion.")
        break;
    }
    
    

    const bebidas = [
        { id: 1, nombre: "fernet", precio: 800},
        { id: 2, nombre: "vodka", precio: 800},
        { id: 3, nombre: "cerveza", precio: 800},
        { id: 4, nombre: "campari", precio: 800},
        { id: 5, nombre: "agua", precio: 200},
        { id: 6, nombre: "coca cola", precio: 500},
        { id: 7, nombre: "sprite", precio: 500},
        { id: 8, nombre: "agua saborizada", precio: 200},
        ];
        
        console.table(bebidas);



function dato2(direccion) {
    console.log("Tu entrada sera enviada a este domicilio  " + direccion + " /Demora estimada 5 dias/");
} 

direccion = prompt("Direccion donde se enviaran las entradas");

dato2(direccion);




const datosPersonales = {
    NombreCompleto : nombreApellido,
    entradasVip: ingreso,
    entradasGenerales: ingreso2,
    mail: email,
    direcionCompleta: direccion,
    
}
console.table(datosPersonales);






//arreglo de precios
const precioActualizado = bebidas.map(el=>{
    return{
        id: el.id,
        nombre: el.nombre,
        precios: el.precio * 1.5 
        };
    });
    
    console.table(precioActualizado);

for (const element of precioActualizado) {
    console.log(element);
    
}
alert("Muchas gracias por su compra")
}
