
var botones = document.getElementsByClassName("botones")
var textos = document.getElementsByClassName("texto")

// iterar sobre cada boton
for (let i = 0; i < botones.length; i++) {
    // escuchamos el evento click de cada botn
    botones[i].addEventListener("click", function (event) {
        const botonData = event.target.dataset.boton 
        
        // iteramos cada uno de los textos
        for(let j = 0; j < textos.length; j++){
            const textoData = textos[j].dataset.texto
            
            // si el data es igual lo mostramos
            if(botonData == textoData){
                textos[j].style.display = "block"
            }

            // si el data es distinto lo ocultamos
            else {
                textos [j].style.display = "none"
            } 
        }
    })
}

// function mostrar(event){
//     const botonData = event.target.dataset.boton 
        
//     // iteramos cada uno de los textos
//     for(let j = 0; j < textos.length; j++){
//         const textoData = textos[j].dataset.texto
        
//         // si el data es igual lo mostramos
//         if(botonData == textoData){
//             textos[j].style.display = "block"
//         }

//         // si el data es distinto lo ocultamos
//         else {
//             textos [j].style.display = "none"
//         } 
//     }
// }

// var boton1 = document.getElementsById("boton1")
// boton1.addEventListener("click", mostrar)


// var boton1 = document.getElementsById("boton1")
// boton1.addEventListener("click", mostrar)

fetch('https://randomuser.me/api/')
  .then((respuesta) => respuesta.json())
	.then((data) => {
		const persona = data.results[0]
console.log(persona)
		document.getElementById("nombre").innerHTML =  " <b>Nombre:<b> " + persona.name.first + " " + persona.name.last

        document.getElementById("email").innerHTML = " <b>Email:<b> " + persona.email

        document.getElementById("telefono").innerHTML = " <b>Telefono:<b> " + persona.phone

        document.getElementById("direccion").innerHTML =  
        " <b>Calle:</b> " + persona.location.street.name + "<br>"
        + "<b>Número:</b> " + persona.location.street.number + "<br>" 
        + "<b>Ciudad:</b> " + persona.location.city + "<br>"
        + " <b>País:</b> " + persona.location.country + "<br>"
        + " <b>Estado:</b> " + persona.location.state + "<br>"
        
        // + persona.location.street.number + " <b>Número:</b> "  +
        //  persona.location.city + " <b>Ciudad:</b> "  + persona.location.country + " <b>País:</b> " + persona.location.state + " <b>Estado:</b> "

	});

