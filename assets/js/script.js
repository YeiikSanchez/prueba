$(".card-title").click(() => {
    $(".card-text").toggle("slow");
});

$(".send-mail").click(() => {
    alert("El correo fue enviado correctamente...");
});

$(".title-recipe, .title-recipe2").dblclick(function () {
    $(this).css({
        color: "red",
        "text-decoration-color": "red"
    });
});
