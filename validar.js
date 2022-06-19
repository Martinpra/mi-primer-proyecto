const nombre1 = document.getElementById('nombre');
const correo1 = document.getElementById('correo');
const mensaje1 = document.getElementById('mensaje')
const error = document.getElementById('error');


function validarformulario(){
    console.log('enviando formulario');
   
    const mensajesError = [];

    if (nombre1.value === null || nombre1.value === '') {
        mensajesError.push('Ingresa tu Nombre');

    }
    else
 
    if ( correo1.value === null || correo1.value === '') {
        mensajesError.push('Ingresa tu Correo Electronico');
        
    }
    else 
    if ( mensaje1.value === null || mensaje1.value === '') {
        mensajesError.push('Ingresa tu mensaje de consulta');
        
    }
    
    else {
        alert("Su consulta fue enviada con exito");
    }
    error.innerHTML = mensajesError.join(', ');
    return false;
   
}


   
   


