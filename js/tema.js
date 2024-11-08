const boton = document.querySelector("[data-checkbox]");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const titulos = document.querySelectorAll("h2");
const formInputs = document.querySelectorAll(".formulario__input");
const formBotones = document.querySelectorAll("button");


boton.addEventListener("change", (event) => {
    if (event.target.checked) {
        header.classList.add("dark__header");

        // clase dark
        formInputs.forEach((input) => {
            input.classList.add("dark");
        })
        formBotones.forEach((boton) => {
            boton.classList.add("dark");
        })
        main.classList.add("dark");

        titulos.forEach((h2) => {
            h2.classList.add("dark__h2");
        });
        footer.classList.add("dark__footer");

    } else {
        header.classList.remove("dark__header");
        formInputs.forEach((input) => {
            input.classList.remove("dark");
        })
        main.classList.remove("dark");
        formBotones.forEach((boton) => {
            boton.classList.remove("dark");
        })
        titulos.forEach((h2) => {
            h2.classList.remove("dark__h2");
        });
        footer.classList.remove("dark__footer");
    }
});