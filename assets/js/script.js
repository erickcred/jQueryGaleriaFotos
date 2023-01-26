$(document).ready(() => {

    $("#form-imagem").on("submit", (event) => {
        event.preventDefault();
        const srcImagem = $("input[name='imagem']").val();

        let li = $("<li></li>", {
            style: "display: none"
        });

        let img = $("<img>", {
            class: "imagem",
            src: srcImagem,
            alt: srcImagem
        }).appendTo(li);

        let div = $("<div></div>", {
            class: "overlay-imagem-link"
        }).appendTo(li);

        $("<a></a>", {
            href: srcImagem,
            target: "_blank",
            title: "Ver imagem em tamanho real",
            text: "Ver imagem em tamanho real"
        }).appendTo(div);
        
        $("ul").append(li);
        $(li).fadeIn(1000);
        $("input[name='imagem']").val("");
    });


    $("header button").on("click", () => {
        $("#form-imagem").slideDown();
    });

    $("form button[type='reset']").click(() => {
        $("#form-imagem").slideUp();
    });
});