$(document).ready(function () {
  //MENU ANIMATION
  $(document).click(function () {
    $(".menu-list").hide();
  });

  $(".menu-hamburger").click(function (event) {
    event.stopPropagation();
    $(".menu-list").slideToggle();
  });

  //MODAL WINDOW

  $("#card-manutencao").click(function () {
    $("#modal-manutencao").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $("#card-infraestrutura").click(function () {
    $("#modal-rede").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $("#card-seguranca").click(function () {
    $("#modal-seguranca").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $("#card-suporte").click(function () {
    $("#modal-suporte").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $(".modal-btn").click(function () {
    $(".modal-bg").removeClass("bg-active");
    $(".modal").removeClass("animate__animated animate__backInDown");
  });

  //SCROLLREVEAL
  var slideLeft = {
    distance: "150%",
    origin: "left",
    opacity: null,
  };

  var slideRight = {
    distance: "150%",
    origin: "right",
    opacity: null,
  };

  var slideDown = {
    distance: "150%",
    origin: "top",
    opacity: null,
  };

  ScrollReveal().reveal("#draw-banner", slideRight);
  ScrollReveal().reveal(".card", slideLeft);
  ScrollReveal().reveal(".text-animation", slideLeft);
  ScrollReveal().reveal("#draw-animation", slideLeft);
  ScrollReveal().reveal(".main-text", slideRight);
  ScrollReveal().reveal(".category-text", slideRight);
  ScrollReveal().reveal(".form-orcamento", slideLeft);
  ScrollReveal().reveal(".info-container", slideLeft);
  ScrollReveal().reveal(".social-network", slideRight);
  ScrollReveal().reveal(".services-category", slideLeft);
  ScrollReveal().reveal(".service-paragraph", slideLeft);
  ScrollReveal().reveal(".service-list", slideLeft);
  ScrollReveal().reveal(".services-draw", slideRight);
  ScrollReveal().reveal(".form-calls", slideLeft);
  ScrollReveal().reveal(".calls-draw", slideRight);
  ScrollReveal().reveal(".form-contact", slideLeft);
  ScrollReveal().reveal(".contact-details", slideRight);
});
