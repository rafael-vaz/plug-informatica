//? animacao para os cards
export default function initCards() {
  $("#card-manutencao").click(() => {
    $("#modal-manutencao").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $("#card-infraestrutura").click(() => {
    $("#modal-rede").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $("#card-seguranca").click(() => {
    $("#modal-seguranca").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $("#card-suporte").click(() => {
    $("#modal-suporte").addClass("bg-active");
    $(".modal").addClass("animate__animated animate__backInDown");
  });

  $(".modal-btn").click(() => {
    $(".modal-bg").removeClass("bg-active");
    $(".modal").removeClass("animate__animated animate__backInDown");
  });
}
