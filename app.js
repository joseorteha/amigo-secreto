// Array para almacenar los nombres ingresados
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre a la lista y actualizar la interfaz
    amigos.push(nombre);
    actualizarLista();
    input.value = ''; // Limpiar el campo de entrada
}

// Función para actualizar la lista visible de nombres
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega nombres antes de sortear.');
        return;
    }

    // Selección aleatoria de un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Event Listeners para manejar la tecla "Enter"
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Función para limpiar la lista de amigos y resultados
function limpiarLista() {
    amigos = [];  // Vaciar el array de amigos
    document.getElementById('listaAmigos').innerHTML = '';  // Limpiar la lista en pantalla
    document.getElementById('resultado').innerHTML = '';  // Limpiar el resultado del sorteo
}

