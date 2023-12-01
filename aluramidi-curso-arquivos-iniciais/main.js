function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll ('.tecla');

let contador;

//enquanto
while(contador < listaDeTeclas.length) [

    listaDeTeclas[contador].onclick = tocaSom

    contador = contador +1;

    console.log(contador);
]