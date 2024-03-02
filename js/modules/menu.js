//? menu mobile
const mediaQuery = window.matchMedia("(min-width: 901px)");
// inicia o menu
export default function initMenu() {
  $(document).click(() => {
    if (!mediaQuery.matches) {
      $(".nav-links").hide();
    }
  });
  $(".btn-menu").click((event) => {
    event.stopPropagation();
    $(".nav-links").slideToggle();
  });
}
// verifica largura de tela e remove estilos do jquery
function checkResize() {
  if (mediaQuery.matches) {
    $(".nav-links").removeAttr("style");
  }
}
window.addEventListener("resize", checkResize);
