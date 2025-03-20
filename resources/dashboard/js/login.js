$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault(); // Impede o envio do formulário imediatamente

        // Variável para controlar a validação
        let isValid = true;
        let missingFields = [];

        // Verifica todos os campos do formulário
        $(this)
            .find(".form-control")
            .each(function () {
                const campo = $(this);

                if (campo.val().trim() === "") {
                    isValid = false;
                    missingFields.push(campo.attr("placeholder")); // Adiciona o nome do campo vazio
                }
            });

        // Se algum campo estiver vazio, exibe o alerta
        if (!isValid) {
            Swal.fire({
                icon: "error",
                title: "Campos obrigatórios",
                text: `Os seguintes campos são obrigatórios: \n ${missingFields.join(", ")}`,
            });
        } else {
                e.target.submit(); // Envia o formulário
        }
    });
});
