// Definir el diccionario de palabras con sus familias
const diccionario = {
    "MATERIALESCOLAR": ["afila", "boli", "goma", "lapiz"],
    "BEBIDAS": ["agua", "batido", "leche", "zumo"],
    "COMIDAS": ["albondigas", "bocadillo", "croquetas", "filete"],
    "FAMILIA": ["alex", "mama", "papa", "nina"],
    "COLORES": ["amarillo", "azul", "blanco", "gris"],
    "VERBOS": ["andar", "apagar", "comer", "mirar"],
    "PLAYA": ["arena", "mar", "roca", "ola"],
    "TRANSPORTES": ["avion", "bus", "coche", "moto"],
    "ROPA": ["bufanda", "camiseta", "gorro", "pantalon"],
    "ANIMALES": ["caballo", "gallina", "gato", "oveja"],
    "FRUTAS": ["fresa", "manzana", "melon", "pera"],
    "COSASDEPLAYA": ["cubo", "pala", "rastrillo", "toalla"],
    "PERSONAJES": ["elly", "lula", "peppaPig", "pocoyo"],
};

// Obtener los elementos select de familia y palabra
const selectFamilia = document.getElementById("family1");
const selectPalabra = document.getElementById("word1");

// Función para actualizar las palabras al seleccionar una familia
function actualizarPalabras() {
    // Limpiar las opciones anteriores del select de palabra
    selectPalabra.innerHTML = "";

    // Obtener la familia seleccionada
    const familiaSeleccionada = selectFamilia.value;

    // Obtener las palabras asociadas a la familia seleccionada
    const palabras = diccionario[familiaSeleccionada];

    // Agregar cada palabra como una opción al select de palabra
    palabras.forEach(palabra => {
        const option = document.createElement("option");
        option.text = palabra;
        selectPalabra.add(option);
    });
}

// Asociar la función actualizarPalabras al evento onchange del select de familia
selectFamilia.addEventListener("change", actualizarPalabras);

// Llamar a la función inicialmente para que cargue las palabras de la primera familia
actualizarPalabras();
