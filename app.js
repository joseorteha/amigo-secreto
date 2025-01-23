// Array para almacenar los nombres de los amigos ingresados
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();  // Elimina espacios en blanco innecesarios

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento UL donde se mostrará la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista para evitar duplicados
    lista.innerHTML = '';

    // Recorrer el array de amigos y agregar cada uno como un elemento <li>
    amigos.forEach((amigo) => {
        const li = document.createElement('li');  // Crear elemento de lista
        li.textContent = amigo;  // Asignar el nombre del amigo al elemento
        lista.appendChild(li);  // Agregar el <li> a la lista en el HTML
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos en la lista antes de sortear
    if (amigos.length === 0) {
        alert('La lista está vacía. Agrega nombres antes de sortear.');
        return;
    }

    // Generar un índice aleatorio basado en la cantidad de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo seleccionado aleatoriamente
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById('resultado').innerHTML = 
        `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Función para limpiar la lista de amigos y los resultados en pantalla
function limpiarLista() {
    // Vaciar el array de amigos
    amigos = [];

    // Limpiar la lista de amigos mostrada en pantalla
    document.getElementById('listaAmigos').innerHTML = '';

    // Limpiar el resultado del sorteo en pantalla
    document.getElementById('resultado').innerHTML = '';
}

// Event listener para capturar la tecla Enter en el campo de entrada
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();  // Llama a la función agregarAmigo() si se presiona Enter
    }
});
