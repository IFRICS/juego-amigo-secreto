let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";

    mostrarLista();
}

// Mostrar lista de amigos en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultado anterior

    let li = document.createElement("li");
    li.innerHTML = "🎉 El amigo sorteado es: <strong>" + amigoSorteado + "</strong>";
    resultado.appendChild(li);
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

