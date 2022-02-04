$(".card-title").click(function () {
  $(".card-text").toggle("slow");
});
$(".enviar-correo").click(function () {
  alert("El correo fue enviado correctamente...");
});
$(".titulo-receta").dblclick(function () {
  $(this).css({
    color: "red",
  });
});

$(".titulo-receta2").dblclick(function () {
  $(this).css({
    color: "red",
  });
});
