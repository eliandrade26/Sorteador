const generateNumber = document.querySelector(".generateNumber");


generateNumber.addEventListener("click", generate);

function generate() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Atualiza o conteúdo da classe "numberview" com o número gerado
    document.querySelector(".number-view").textContent = result;
}

