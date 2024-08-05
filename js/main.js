

for (let i = 0; i <= 0; i++) {
    let edadObligatoria = 18;
    let edadUsuario = parseInt(prompt("Ingresa tu edad para acceder a la fiesta mas grande de Latinoamerica"));
    if (edadUsuario >= edadObligatoria) {
        console.log("Acceso confirmado");
        
}  else{
        console.log("Acceso denegado, no cumples con los requisitos");
        break;
    }

    function dato1(nombreApellido) {
        console.log("Hola " + nombreApellido);
    }
    nombreApellido = prompt("Nombre y apellido");

    dato1(nombreApellido);


    let envio = 300;
    let vip = 1000;
    let ingreso = prompt("Seleccione con numero la cantidad de entradas ¨VIP¨ \n 0- Ninguna \n 1- Una entrada: $1000 \n 2- Dos entrada: $2000 \n 3- Tres entradas: $3000")
    
    if (ingreso == "0" || ingreso == "cero" || ingreso == "CERO") {
        alert("Presiona aceptar para seleccionar tu  entrada General.");
    }
    if (ingreso == "1" || ingreso == "uno" || ingreso == "UNO" ) {
        
        let resultadoVip1 = envio + vip;
        parseFloat(alert("Seleccionaste 1 Entrada Vip, valor mas envio: " + resultadoVip1));
        console.log(resultadoVip1);
    }else if (ingreso == "2" || ingreso == "dos" || ingreso == "DOS") {
        
        let resultadoVip2 = vip * 2 + envio;
        parseFloat(alert("Seleccionaste Entrada Vip, valor mas envio: " + resultadoVip2));
        console.log(resultadoVip2);
    } else if (ingreso == "3" || ingreso == "dos" || ingreso == "TRES") {
        
        let resultadoVip3 = vip * 3 + envio;
        parseFloat(alert("Seleccionaste Entrada Vip, valor mas envio: " + resultadoVip3))
        console.log(resultadoVip3);
    }else{
        alert("No seleccionaste ninguna opcion.")
    }
    
    let general = 500;
    let ingreso2 = prompt("Seleccione con numero la cantidad de entradas ¨GENERAL¨ \n 0- Ninguna \n 1- Una entrada: $500 \n 2- Dos entrada: $1000 \n 3- Tres entradas: $1500")
    
    if (ingreso == "0" || ingreso == "cero" || ingreso == "CERO") {
        console.log("Error, vuelve a ingresar los datos para obtener una entrada");
    }
    if (ingreso == "1" || ingreso == "uno" || ingreso == "UNO" ) {
        
        let resultadoGene1 = envio + general;
        parseFloat(alert("Seleccionaste 1 Entrada Vip, valor mas envio: " + resultadoGene1));
        console.log(resultadoGene1);

    }else if (ingreso == "2" || ingreso == "dos" || ingreso == "DOS") {
        
        let resultadoGene2 = envio + general * 2;
        parseFloat(alert("Seleccionaste 2 Entradas Vip, valor mas envio: " + resultadoGene2));
        console.log(resultadoGene2);

    } else if (ingreso == "3" || ingreso == "dos" || ingreso == "TRES") {
        
        let resultadoGene3 = envio + general * 3;
        parseFloat(alert("Seleccionaste 3 Entradas General, valor mas envio: " + resultadoGene3))
        console.log(resultadoGene3);
    }else{
        alert("No seleccionaste ninguna opcion.")
    }   
    

function dato2(direccion) {
    console.log("Tu entrada sera enviada a este domicilio  " + direccion + " /Demora estimada 5 dias/");
} 


direccion = prompt("Direccion donde se enviaran las entradas");

dato2(direccion);

}
