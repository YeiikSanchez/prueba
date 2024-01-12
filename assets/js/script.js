$(".card-title").click(function () {
    $(".card-text").toggle("slow");
});
$(".send-mail").click(function () {
    alert("El correo fue enviado correctamente...");
});
$(".title-recipe").dblclick(function () {
    $(this).css({
        color: "red"
    });
});

$(".title-recipe2").dblclick(function () {
    $(this).css({
        color: "red"
    });
});
