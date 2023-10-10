// // toggle tema
const trocarTema = document.getElementById('trocar-tema');
const body = document.body;

trocarTema.addEventListener('click', () => {
    trocarTema.classList.toggle('temaEscuro-Botao');
    trocarTema.classList.toggle('temaClaro-Botao');

    if (trocarTema.classList.contains('temaEscuro-Botao')) {
        trocarTema.style.backgroundImage = 'url("img/toggleOFF.png")';
    } else if (trocarTema.classList.contains('temaClaro-Botao')) {
        trocarTema.style.backgroundImage = 'url("img/toggleON.png")';
    }
});
