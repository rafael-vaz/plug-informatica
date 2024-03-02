//? import modules
import initCards from "./cards.js";
import initMenu from "./menu.js";
import initScrollReveal from "./scroll-reveal.js";

//? inicia todos os modulos
$(document).ready(() => {
  initMenu();
  initCards();
  initScrollReveal();
});
