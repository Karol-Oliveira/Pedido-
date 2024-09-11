const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const image = document.getElementById('image');
let scale = 1; // Valor inicial da escala

btnYes.addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    btnNo.style.display = 'none';
    this.style.display = 'none';

    image.src ='feliz.gif';
});
btnNo.addEventListener('click', function() {
    scale += 0.3; // Aumenta a escala em 0.3 a cada clique
    btnYes.style.transform = `scale(${scale})`; // Aplica o aumento de escala
});

