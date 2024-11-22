function openLetter() {
    const letter = document.querySelector('.letter');
    const loveSong = document.getElementById('loveSong');
    letter.classList.add('show');
    loveSong.play();
}
