
document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", function() {
        const container = document.querySelector(".container");
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newLeft = Math.random() * (containerRect.width - buttonRect.width);
        let newTop = Math.random() * (containerRect.height - buttonRect.height);

        noButton.style.position = "absolute";
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});

function showLovePage() {
    document.querySelector(".container").style.display = "none";
    const lovePage = document.createElement("div");
    lovePage.className = "love-page";
    lovePage.innerHTML = `
        <h1>Eu te amo!</h1>
        <p>Minha lua, eu te amo tanto que não sei explicar. Eu estava esperando o momento certo para fazer este pedido. Sei que a distância é um obstáculo, mas não é impossível. Eu quero estar ao seu lado por toda a minha vida, por isso este pedido: eu te amo!</p>
        <div class="photos">
            <!-- Adicione suas fotos aqui -->
           <img src="fotos/foto1.jpeg" alt="Foto 1">
<img src="fotos/foto2.jpeg" alt="Foto 2">
<img src="fotos/foto3.jpeg" alt="Foto 3">
<img src="fotos/foto4.jpeg" alt="Foto 4">
<img src="fotos/foto5.jpeg" alt="Foto 5">
<img src="fotos/foto7.jpeg" alt="Foto 7">

        </div>
        <div class="hearts">
            <div class="heartbeatloader">
                <div class="svgdraw">
                    <svg viewBox="0 0 100 100">
                        <path class="path" d="M10 30 Q 40 5, 70 30 T 90 30" fill="none" />
                    </svg>
                </div>
                <div class="innercircle"></div>
                <div class="outercircle"></div>
            </div>
        </div>
    `;
    document.body.appendChild(lovePage);
    lovePage.style.display = "block";
}
