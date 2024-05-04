import {ArrayBotonesFijos} from "./auxiliares-json/SeccionesFijas"
import {ArrayBotonesSecciones} from "./auxiliares-json/SeccionesInfo"


export function darInfoPorId(id) {

    const indice = ArrayBotonesSecciones.findIndex((elemento) => elemento.id === id);

    if (indice === -1) {
        throw new Error(`ID "${id}" not found in ArrayBotonesSecciones.`);
    }

    return ArrayBotonesSecciones[indice];
}

export function  darTitulosPorId(id){

    const indiceSecciones = ArrayBotonesSecciones.findIndex((elemento) => elemento.id === id);
    const indiceFijas = ArrayBotonesFijos.findIndex((elemento) => elemento.id === id);

    if(indiceSecciones != -1){
        return ArrayBotonesSecciones[indiceSecciones].TituloBoton
    }else if(indiceSecciones === -1 && indiceFijas === -1){
        return 'Seccion Personalizada'
    }else{
        return ArrayBotonesFijos[indiceFijas].TituloBoton
    }

}