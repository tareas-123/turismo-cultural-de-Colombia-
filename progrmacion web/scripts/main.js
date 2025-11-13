// ---------------------------
// MENÚ INTERACTIVO
// ---------------------------
const menuItems = document.querySelectorAll("nav a");

// Efecto hover (cambiar color al pasar el mouse)
menuItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.color = "#f1c40f"; // Amarillo al pasar el cursor
  });

  item.addEventListener("mouseout", () => {
    item.style.color = ""; // Vuelve al color original
  });

  // Marcar enlace activo al hacer clic
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// ---------------------------
// MENSAJE PERSONALIZADO SEGÚN LA HORA
// ---------------------------
window.addEventListener("load", () => {
  const saludo = document.getElementById("saludo");
  const hora = new Date().getHours();

  let mensaje = "";

  if (hora < 12) {
    mensaje = "¡Buenos días, viajero!";
  } else if (hora < 18) {
    mensaje = "¡Buenas tardes, aventurero!";
  } else {
    mensaje = "¡Buenas noches, explorador!";
  }

  // También puedes agregar traducción dinámica si hay botón de idioma
  saludo.textContent = mensaje;
});

// ====== MENSAJE PERSONALIZADO SEGÚN LA HORA DEL DÍA ======
document.addEventListener("DOMContentLoaded", function() {
  const mensajeDiv = document.createElement("div");
  mensajeDiv.style.textAlign = "center";
  mensajeDiv.style.padding = "10px";
  mensajeDiv.style.fontSize = "18px";
  mensajeDiv.style.fontWeight = "bold";
  mensajeDiv.style.color = "#0033a0";

  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) {
    mensaje = "☀️ ¡Buenos días! Explora los mejores destinos de Colombia.";
  } else if (hora < 18) {
    mensaje = "🌤️ ¡Buenas tardes! Sigue descubriendo nuestra cultura.";
  } else {
    mensaje = "🌙 ¡Buenas noches! Gracias por visitar nuestra página.";
  }

  mensajeDiv.textContent = mensaje;
  document.body.prepend(mensajeDiv);
});

// ====== MENÚ INTERACTIVO (DESPLEGABLE EN MÓVIL) ======
document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.querySelector("nav");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("activo");
    });
  }
});

// ====== SLIDER AUTOMÁTICO DE IMÁGENES ======
let index = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slider img");
  slides.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
  index = (index + 1) % slides.length;
}
setInterval(showSlides, 3000); // cambia cada 3 segundos

// ====== FONDO DINAMICO ======
// Esperar a que el documento cargue completamente
document.addEventListener("DOMContentLoaded", function() {
  // Seleccionamos el botón del HTML
  const boton = document.getElementById("boton-interactivo");

  // Creamos una lista de colores pasteles
  const colores = 
  [
    "#fff0f5", "#f0ffff", "#f5fffa", "#fdf5e6",
    "#fafad2", "#e6e6fa", "#ffe4e1", "#e0ffff",
    "#f0fff0", "#faf0e6", "#f9f9f9", "#fffaf0",
    "#fff0f5", "#f0ffff", "#f5fffa", "#fdf5e6",
    "#f0fff0", "#faf0e6", "#f9f9f9", "#fffaf0",
    "#fffacd", "#f0e68c", "#f5f5dc", "#f0f8ff",
    "#e0eee0", "#fafafa", "#fff5ee", "#fff8dc",
    "#fafad9", "#f8f8ff", "#fdfd96", "#f4f0ec",
    "#fffaf5", "#f2f2f2", "#ffebcd", "#fffdd0",
  ];

  // Si el botón existe, le agregamos funcionalidad
  if (boton) {
    boton.addEventListener("click", function() {
      // Elegimos un color al azar
      const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      
      // Aplicamos el color al fondo del cuerpo
      document.body.style.backgroundColor = colorAleatorio;
    });
  }
});

// ====== ANIMACION ======
const secciones = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  secciones.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

//====== NOTIFICACION AL ENTRAR ======
window.addEventListener("load", () => {
  setTimeout(() => {
    alert("👋 Bienvenido a nuestra página de viajes. ¡Explora y disfruta!");
  }, 1000);
});

//====== BOTON DE SUBIR ======
// Mostrar u ocultar el botón al hacer scroll
window.onscroll = function() {
  const btnSubir = document.getElementById("btnSubir");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnSubir.style.display = "block"; // Mostrar botón
  } else {
    btnSubir.style.display = "none"; // Ocultar botón
  }
};

// Función para subir al inicio
document.getElementById("btnSubir").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Desplazamiento suave
  });
});
