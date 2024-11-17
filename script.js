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
        <h1>Eu te amoooooooooo minha lua❤️❤️❤️!</h1>
        <p>Meu amor, saber que você aceitou e está disposta a enfrentar esse desafio me deixa imensamente feliz. Eu já tinha a certeza de que você é a mulher da minha vida, e agora essa certeza só se fortaleceu ainda mais. Vou fazer o possível para estar sempre ao seu lado, meu bem. Te amo muitooooooo! Você é tudo para mim e não vejo a hora de vivermos muitos momentos felizes juntos.</p>
        <div class="photos">
            <!-- Adicione suas fotos aqui -->
            <img src="fotos/foto1.jpeg" alt="Foto 1">
            <img src="fotos/foto2.jpeg" alt="Foto 2">
            <img src="fotos/foto3.jpeg" alt="Foto 3">
            <img src="fotos/foto4.jpeg" alt="Foto 4">
            <img src="fotos/foto5.jpeg" alt="Foto 5">
            <img src="fotos/foto7.jpeg" alt="Foto 7">
        </div>
    `;
    document.body.appendChild(lovePage);
    lovePage.style.display = "block";
}
