// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Actualizaciones sobre el proyecto https://trello.com/b/TJUKbfm0/trello-challenge-amigo-secreto-esp
let nombre = '';
let listaAmigos = [];
let nuevoAMigo = '';
let lista = '';


function agregarAmigo() {
    if (document.querySelector('#amigo').value == '') {
        alert('No se puede agregar si esta vacio');
    } else {
        nombre = document.getElementById('amigo').value;
        //Valida si el nombre a insertar ya existe
        if (listaAmigos.includes(nombre)) {
            alert('Ese nombre ya fue agregado a la lista, cambialo');
        }else {
            //Guarda el nombre en el Array
            listaAmigos.push(nombre);
            //Crea un elemento <li>
            nuevoAMigo = document.createElement("li");
            // Crear un nodo de texto para el contenido del <li>
            let texto = document.createTextNode(nombre);
            nuevoAMigo.appendChild(texto);
            lista = document.querySelector('#listaAmigos');
            lista.appendChild(nuevoAMigo);
            console.log(listaAmigos);
            document.querySelector('#amigo').value = '';
        }
    }
}

function sortearAmigo() {
    //Se valida que hay nombre suficientes para realizar el sorteo
    if (listaAmigos.length <= 1) {
        alert('Necesitas minimo dos nombres para sortear')
    } else {
        //Genera un numero aleatorio del tamaño del array con la cantidad de nombre totales
        let numeroGenerado =  Math.floor(Math.random()*listaAmigos.length)+1;
        console.log(numeroGenerado);
        //Recorre el arreglo hasta encontrar la posicion con el numero elegido
        for (let i = 0; i < numeroGenerado; i++) {
            //Obtiene el valor de la posicion
            let elegido = listaAmigos[i];
            console.log(elegido);
            let ganador = document.getElementById('resultado');
            ganador.innerHTML = elegido;
        }
    }
}