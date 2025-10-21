import { habilidades } from "./habilidades.js";
import { proyectos } from "./proyectos.js";

export function dark() {
      let botoncito = document.querySelector("#btn-dark");
let todo = document.querySelector("#todo");

botoncito.addEventListener("click", function () {
todo.classList.toggle("dark");
      });
}

export function botonMenu() {
     let menuBtn = document.querySelector("#menu-btn");
let mobileMenu = document.querySelector("#mobile-menu");

menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
});
 
}


export function desplegarHabilidades() {
      let listaHabilidades=document.querySelector("#contenedor-habilidades");
  habilidades.forEach(habilidad => {
    listaHabilidades.innerHTML+=`


            <div
  class="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-50 w-50 hover:shadow-xl bg-white"
>
  <div
    class="bg-gradient-to-br from-blue-600 via-sky-400 to-red-400  dark:from-red-700 dark:via-sky-700 to-red-700 m-2 h-[60%] rounded-lg"
  ><img class="w-full h-full object-contain" src="${habilidad.imagen}" alt="html"></div>

  <div class="px-5 pt-2">
    <h2 class="font-semibold">${habilidad.nombre}</h2>

    
  </div>
</div>
            
`;
  });  
}




export function renderizarProyectos() {
      let contenedor = document.getElementById("proyectos-list");
        contenedor.innerHTML = "";
        proyectos.forEach((p) => {
          let card = document.createElement("div");
          card.className =
            "bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl";
          card.innerHTML = `
            <a href="${p.link}" target="_blank" rel="noopener noreferrer"
><img src="${p.imagen}" alt="${p.titulo}" class="w-full h-48 object-cover"></a>
            <div class="p-4">
              <h3 class='text-xl font-bold text-spiderman-red dark:text-spiderman-blue'>${p.titulo}</h3>
              <p class='text-gray-600 dark:text-gray-300 mt-2'>${p.descripcion}</p>
            </div>
          `;
          contenedor.appendChild(card);
        });
      }

export function enviarFormulario() {
      let form = document.getElementById("contactame");
      let errorMsg = document.getElementById("error");
      let successMsg = document.getElementById("success");

      if (!form) return;

      form.addEventListener("submit", function (e) {
        

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        
        if (!nombre || !correo || !mensaje) {
          e.preventDefault();
          errorMsg.classList.remove("hidden");
          successMsg.classList.add("hidden");
          return;
        }

        errorMsg.classList.add("hidden");
        
        setTimeout(() => {
      successMsg.classList.remove("hidden");
      form.reset(); 
    }, 500);
      });

}   