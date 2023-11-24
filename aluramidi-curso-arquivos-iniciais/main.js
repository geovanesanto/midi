// Pom
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll ('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

let contador;

//enquanto
while(contador < listaDeTeclas.length) [

    listaDeTeclas[contador].onclick = tocaSomPom

    contador = contador +1;

    console.log(contador);
]