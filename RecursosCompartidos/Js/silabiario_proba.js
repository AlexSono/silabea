// Variables globales
var timeId;
var targetURL = "../RecursosCompartidos/nonResolto.html"; // URL a la que dirigir en caso de no resolverse
var inicioBarra = 1; // Segundos a contar
var actualBarra = inicioBarra + 1;
var canvas = document.getElementById("barra");
var ctx = canvas.getContext("2d");

ctx.translate(300, 145);
ctx.rotate(Math.PI);
ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(10, 10, 280, 120);

// Función para dibujar la barra de progreso
function draw(xBarra) {
    if (canvas.getContext) {
        ctx.fillStyle = "rgb(0,0,255)";
        ctx.fillRect(10, 10, xBarra, 120);
    }
}

// Función para avanzar la barra de progreso y redireccionar si está completa
function barraParaRedireccionar() {
    if (actualBarra <= 280) {
        actualBarra += 20;
        draw(actualBarra);
    } else {
        window.location = targetURL;
        return;
    }
    timeId = setTimeout(barraParaRedireccionar, 1000);
}
barraParaRedireccionar();

// Crear un array de palabras
var diccionario = [
    ['afila','A-FI-LA','MATERIALESCOLAR'],['agua','A-GUA','BEBIDAS'],['albondigas','AL-BON-DI-GAS','COMIDAS'],['alex','A-LEX','FAMILIA'],['amarillo','A-MA-RI-LLO','COLORES'],['andar','AN-DAR','VERBOS'],['apagar','A-PA-GAR','VERBOS'],['arena','A-RE-NA','PLAYA'],['avion','A-VIÓN','TRANSPORTES'],['azul','A-ZUL','COLORES'],['bajar','BA-JAR','VERBOS'],['bañar','BA-ÑAR','VERBOS'],['barco','BAR-CO','TRANSPORTES'],['batido','BA-TI-DO','BEBIDAS'],['beber','BE-BER','VERBOS'],['bici','BI-CI','TRANSPORTES'],['blanco','BLAN-CO','COLORES'],['bocadillo','BO-CA-DI-LLO','COMIDAS'],['boli','BO-LI','MATERIALESCOLAR'],['bufanda','BU-FAN-DA','ROPA'],['bus','B-U-S','TRANSPORTES'],['caballo','CA-BA-LLO','ANIMALES'],['cafeteria','CA-FE-TE-RÍ-A','LUGARES'],['calle','CA-LLE','LUGARES'],['camion','CA-MIÓN',,'TRANSPORTES'],['camiseta','CA-MI-SE-TA','ROPA'],['casa','CA-SA','LUGARES'],['chocolate','CHO-CO-LA-TE','COMIDAS'],['coche','CO-CHE','TRANSPORTES'],    ['colegio','CO-LE-GIO','LUGARES'],['colorNaranja','NA-RAN-JA','COLORES'],['comer','CO-MER','VERBOS'],['croquetas','CRO-QUE-TAS','COMIDAS'],['cubo','CU-BO','COSASDEPLAYA'],['dormir','DOR-MIR','VERBOS'],['elly','E-LLY','PERSONAJES'],['encender','EN-CEN-DER','VERBOS'],['escuchar','ES-CU-CHAR','VERBOS'],['spiner','SPI-NER','JUGUETES'],['filete','FI-LE-TE','COMIDAS'],['fresa','FRE-SA','FRUTAS'],['fuente','FUEN-TE','LUGARES'],['furgoneta','FUR-GO-NE-TA','TRANSPORTES'],['galleta','GA-LLE-TA','COMIDAS'],['gallina','GA-LLI-NA','ANIMALES'],['gato','GA-TO','ANIMALES'],['globo','GLO-BO','TRANSPORTES'],['goma','GO-MA','MATERIALESCOLAR'],['gorro','GO-RRO','ROPA'],['gris','G-R-I-S','COLORES'],['jugar','JU-GAR','VERBOS'],['kinder','KIN-DER','COMIDAS'],['lapiz','LÁ-PIZ','MATERIALESCOLAR'],['lavar','LA-VAR','VERBOS'],['leche','LE-CHE','BEBIDAS'],['lula','LU-LA','PERSONAJES'],['macarrones','MA-CA-RRO-NES','COMIDAS'],['mama','MA-MÁ','FAMILIA'],['manzana','MAN-ZA-NA','FRUTAS'],['mar','M-A-R','PLAYA'],['marron','MA-RRÓN','COLORES'],['melocoton','ME-LO-CO-TÓN','FRUTAS'],['melon','ME-LÓN','FRUTAS'],['merendar','ME-REN-DAR','VERBOS'],['mirar','MI-RAR','VERBOS'],['morado','MO-RA-DO','COLORES'],['moto','MO-TO','TRANSPORTES'],['naranja','NA-RAN-JA','FRUTAS'],['negro','NE-GRO','COLORES'],['nina','NI-NA','PERSONAJES'],['ola','O-L-A','PLAYA'],['oveja','O-VE-JA','ANIMALES'],['pala','PA-LA','COSASDEPLAYA'],['pan','P-A-N','COMIDAS'],['pantalon','PAN-TA-LÓN','ROPA'],['papa','PA-PÁ','FAMILIA'],['parque','PAR-QUE','LUGARES'],['patatas','PA-TA-TAS','COMIDAS'],['patinete','PA-TI-NE-TE','JUGUETES'],['pato','PA-TO','PERSONAJES'],['pavo','PA-VO','COMIDAS'],['peppaPig','PE-PPA-PIG','PERSONAJES'],['pera','PE-RA','FRUTAS'],['perro','PE-RRO','ANIMALES'],['pescado','PES-CA-DO','COMIDAS'],['piña','PI-ÑA','FRUTAS'],['pingüino','PIN-GÜI-NO','ANIMALES'],['platano','PLÁ-TA-NO','FRUTAS'],['playa','PLA-YA','LUGARES'],['pocoyo','PO-CO-YÓ','PERSONAJES'],['pollo','PO-LLO','COMIDAS'],['puerta','PUER-TA','LUGARES'],['quiero','QUIE-RO','VERBOS'],['rastrillo','RAS-TRI-LLO','COSASDEPLAYA'],['roca','RO-CA','PLAYA'],['rojo','RO-JO','COLORES'],['rosa','RO-SA','COLORES'],['salchichas','SAL-CHI-CHAS','COMIDAS'],['saltar','SAL-TAR','VERBOS'],['sopa','SO-PA','COMIDAS'],['subir','SU-BIR','VERBOS'],['tablet','TA-BLET','JUGUETES'],['taxi','TA-XI','TRANSPORTES'],['trabajar','TRA-BA-JAR','VERBOS'],['tren','T-R-E-N','TRANSPORTES'],['verde','VER-DE','COLORES'],['yogur','YO-GUR','COMIDAS'],['zumo','ZU-MO','BEBIDAS']
    
    // Resto de las palabras...
];

// Seleccionar una palabra aleatoria del diccionario
var palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

// Variables para cada item
var palabraSelec = palabra[0];
var palabraSilabas = palabra[1];
var palabraGrupo = palabra[2];
var palabraImagen = palabra[0] + ".png";
var palabraSon = palabra[0] + ".mp3";
var palabraUnion = palabraSilabas.replace(/-/g, "");

// Desordenar las sílabas
var silabas = palabraSilabas.split("-");
shuffle(silabas);

// Establecer la imagen modelo
var imaxen = document.getElementById("modelo");
imaxen.setAttribute("src", "../RecursosCompartidos/Pictos/" + palabraImagen);

// Crear los elementos de las sílabas
for (var i = 0; i < silabas.length; i++) {
    var engadeSilabas = document.getElementById("imagenes");
    var a = document.createElement("div");
    a.id = "silaba" + i;
    a.draggable = "true";
    engadeSilabas.appendChild(a);

    var s1 = document.getElementById("silaba" + i);
    var j = document.createElement("p");
    j.id = "parrafo" + i;
    s1.appendChild(j);
    j.innerHTML = "<h1>" + silabas[i] + "</h1>";

    var engadeContenedor = document.getElementById("contenedor");
    var c = document.createElement("div");
    c.id = "contenedor" + i;
    c.draggable = "false";
    engadeContenedor.appendChild(c);
}

// Función para mezclar elementos de un array (Algoritmo de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Control del puzzle
function puzzle() {
    // Cremos los eventos para iniciar a arrastrar las imagenes
    const imgOrigin = document.querySelectorAll("#imagenes div");
    imgOrigin.forEach(el => {
        el.addEventListener("dragstart", dragStart, false);
    });

    // Creamos los eventos para mover y soltar
    const imgDest = document.querySelectorAll("#contenedor div");
    imgDest.forEach(el => {
        el.addEventListener("dragenter", dragEnter, false);
        el.addEventListener("dragover", dragOver, false);
        el.addEventListener("dragleave", dragLeave, false);
        el.addEventListener("drop", drop, false);
    });

    function dragStart(e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text/plain", this.id);
    }

    function dragEnter(e) {
        e.dataTransfer.dropEffect = 'move';
        e.preventDefault();
    }

    function dragOver(e) {
        e.dataTransfer.dropEffect = 'move';
        this.classList.add("over");
        e.preventDefault();
    }

    function dragLeave(e) {
        this.classList.remove("over");
        e.preventDefault();
    }

    function drop(e) {
        this.classList.remove("over");
        const imgID = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(imgID);
        const origParent = img.parentElement;
        const destParent = this.parentElement;
        if (this.children.length === 0) {
            this.appendChild(img);
        } else {
            const origImg = this.firstElementChild;
            origParent.appendChild(origImg);
            this.appendChild(img);
        }
        completado();
        e.preventDefault();
    }

    function completado() {
        var x = "";
        for (e = 0; e < silabas.length; e++) {
            var p = document.getElementById("contenedor" + e);
            var k = p.innerText;
            x += k;
        }
        if (x === palabraUnion) {
            clearTimeout(timeId);
            var audio1 = new Audio("../RecursosCompartidos/audio/" + palabraSon);
            audio1.play();
            function esperar() {
                var audio2 = new Audio("../RecursosCompartidos/audio/bienHecho.mp3");
                audio2.play();
            }
            setTimeout(esperar, 2000);
            function esperarVideo() {
                var targetURL2 = "../RecursosCompartidos/resolto.html";
                window.location = targetURL2;
            }
            setTimeout(esperarVideo, 4500);
        }
    }
}

puzzle(); // Llamar a la función puzzle para iniciar el juego
