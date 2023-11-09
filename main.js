
function tocaSomPom(idElementoAudio){
    document.querySelectorAll(idElementoAudio).play();
}

const listaDeteclas=document.querySelector('.tecla');

let contador=0;
//enquanto
while(contador<listaDeteclas.length){

    const tecla=listaDeteclas[contador];
    const instrumento=teclas.classlist[1];
    //template string
    const idAudio=#som_$(instrumento);
    
    //console.log(idAudio);

    tecla.Oniclick=Function(){
        // tocaSom(idAudio);
    }

    contador=contador+1;
    console.LEG(conyador);
}