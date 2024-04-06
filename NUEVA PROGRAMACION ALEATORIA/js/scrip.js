let usuarios = [];

function agregarUsuario() {
    const nombreUsuario = document.getElementById("nombreUsuario").value;
    const pictograma = document.getElementById("seleccionPictograma").value;

    if (nombreUsuario.trim() === "") {
        alert("Por favor, ingresa un nombre de usuario válido.");
        return;
    }

    if (usuarios.some(usuario => usuario.nombre === nombreUsuario)) {
        alert("El nombre de usuario ya está en la lista.");
        return;
    }

    usuarios.push({ nombre: nombreUsuario, pictograma: pictograma });
    actualizarListaUsuarios();
}

function actualizarListaUsuarios() {
    const listaUsuariosElement = document.getElementById("listaUsuarios");
    listaUsuariosElement.innerHTML = "";

    usuarios.forEach(usuario => {
        const usuarioElement = document.createElement("div");
        usuarioElement.textContent = `${usuario.nombre} - ${usuario.pictograma}`;
        listaUsuariosElement.appendChild(usuarioElement);
    });
}

function moverUsuario(direccion) {
    const listaUsuariosElement = document.getElementById("listaUsuarios");
    const usuarioSeleccionado = listaUsuariosElement.querySelector(".seleccionado");

    if (!usuarioSeleccionado) {
        alert("Selecciona un usuario de la lista.");
        return;
    }

    const index = Array.from(listaUsuariosElement.children).indexOf(usuarioSeleccionado);
    if (direccion === "arriba" && index > 0) {
        listaUsuariosElement.insertBefore(usuarioSeleccionado, listaUsuariosElement.children[index - 1]);
    } else if (direccion === "abajo" && index < usuarios.length - 1) {
        listaUsuariosElement.insertBefore(usuarioSeleccionado, listaUsuariosElement.children[index + 2]);
    }
}

function siguientePantalla() {
    // Aquí puedes agregar la lógica para pasar a la siguiente pantalla
    console.log("Ir a la siguiente pantalla...");
}
