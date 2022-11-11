document.addEventListener("DOMContentLoaded", function()
{

    const inputNombre = document.querySelector("#nombre");
    const inputApellido = document.querySelector("#apellido");
    const inputCorreo = document.querySelector ("#correo");
    const cantidad = document.querySelector("#cantInput");
    const categoria = document.querySelector("#categoria")
    const botonResumen = document.querySelector("#botonResumen")
    const cantidadTotal = document.querySelector("#cantTotal")
    const formulario = document.querySelector("#formTp")
    const botonBorrar = document.querySelector("#botonBorrar")


    console.log (inputNombre);
    console.log (inputApellido);
    console.log (inputCorreo);
    console.log (cantidad);
    console.log (categoria);
    console.log (botonResumen);
    console.log (cantidadTotal);
    console.log (formulario);
    console.log (botonBorrar);
  

    inputNombre.addEventListener("blur", validar);
    inputApellido.addEventListener("blur", validar);
    inputCorreo.addEventListener("blur", validar);
    botonResumen.addEventListener("click", calcTotal);
    botonBorrar.addEventListener("click", limpiarHTML);





//Los 3 eventos usan la misma función reutilizable

function validar(e) {
    //¿como ponerlo abajo de cada campo?
    //Recorremos el dom en primer lugar
    console.log (e.target.parentElement.parentElement);
    //console.log(e.target.id);
    //console.log (e.target.value)
    //Para personalizar que encuentre que es lo que FALTA usamos STRINGS para que sea adaptable la info

    if (e.target.value ==="")
    //Para especificar el error ponemos en el argumento de mostrarAlerta:
    //{ mostrarAlerta("El campo es obligatorio")
    //Para personalizar que encuentre que es lo que FALTA usamos STRINGS para que sea adaptable la inf
    {mostrarAlerta (`El ${e.target.id} es obligatorio`, e.target.parentElement)
        //De las constantes y los eventos viajamos hasta la funcion validar y aqui creamos un elemento nuevo
    //en este caso un parrafo, un texto
   }
    else {
        console.log("Hay algo")
    }
    calcTotal();
}
//Agregamos otro parametro a la funcion mostrarAlerta. AHORA SON MENSAJE MAS REFERENCIA 
    function mostrarAlerta (mensaje, referencia){
        const error = document.createElement("P");
        //Le agregamos a text content directamentre MENSAJE, eso manda a llamar a la funcion y se ejecuta
        error.textContent = mensaje;
        //Agregamos una classlist de ALERTA
        error.classList.add("bg-danger", "text-black", "p-1", "text-center");
           // Agregamos un elemento dentro del nombre para que sea su "hijo" dentro del HTML
    //El hijo seria el error que estamos construyendo
    referencia.appendChild(error);
    console.log(error);

    }
   

    function calcTotal () {
        valor = cantidad.value;
        const precio = 200;
        categ =categoria.value;
        var Total2 =valor*(precio);

        if (Total2=Total2)
        {totalTotal=valor*(precio)};
    
        if (categ==1)
        {var Total1=(80/100)*Total2
         var totalTotal= valor*(precio)-Total1};

        if (categ==2){
        var Total1=(50/100)*Total2
        var totalTotal= valor*(precio)-Total1};

        if  (categ==3)
        {var Total1=(20/100)*Total2
         var totalTotal=valor*(precio)-Total};

        
        cantidadTotal.textContent = "Total a pagar" + totalTotal + "$";
        
    }
    function limpiarHTML ()
    {
    cantidadTotal.textContent= "$";
    }
     
    




    })