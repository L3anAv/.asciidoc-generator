import  useMemo  from "react";
import {ArrayBotonesFijos} from "./auxiliares-json/SeccionesFijas"
import {ArrayBotonesSecciones} from "./auxiliares-json/SeccionesInfo"

export function darInfoPorId(id) {

    const indice = ArrayBotonesSecciones.findIndex((elemento) => elemento.id === id);

    if (indice === -1) {
        throw new Error(`ID "${id}" not found in ArrayBotonesSecciones.`);
    }

    return ArrayBotonesSecciones[indice];
}

export function DarTitulosPorId(id) {
    const findTitle = (arrays) => {
      for (const array of arrays) {
        const index = array.findIndex((elemento) => elemento.id === id);
        if (index !== -1) {
          return array[index].TituloBoton;
        }
      }
      return 'Seccion Personalizada';
    };
  
    const title = useMemo(() => findTitle([ArrayBotonesSecciones, ArrayBotonesFijos]), [id]);
    return title;
  }