function scrollToElement(id) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Array con las URL de las imágenes de fondo
var backgroundImages = [
    'url("https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/T34DP6UZZRF6PBHGT7A2BBWBBY.jpg")',
    'url("https://img.rtve.es/imagenes/multas-consumo-luz-noche/1623066433721.jpg")',
    'url("https://d29jy8ovkd5kcx.cloudfront.net/wp-content/uploads/2021/12/22175155/aparatos-inteligentes.jpg")'
];

var currentIndex = 0;

// Función para cambiar la imagen de fondo y aplicar el efecto de desenfoque
function changeBackground() {
    var body = document.body;
    body.classList.add('blur-effect'); // Añadir clase de desenfoque
    body.style.backgroundImage = backgroundImages[currentIndex];
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    
    // Quitar la clase de desenfoque después de un breve período
    setTimeout(function() {
        body.classList.remove('blur-effect');
    }, 1000); // Tiempo en milisegundos, ajusta según sea necesario
}

// Llamar a la función para iniciar el cambio de imagen de fondo
setInterval(changeBackground, 5000);
