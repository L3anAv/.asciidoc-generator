import { agregarContenidos } from '../store/useStoreInfo'
import {ArrayBotonesFijos} from './auxiliares-json/SeccionesFijas'

export function RellenarStoreConFijos(){

    ArrayBotonesFijos.map((elemento) => {
        agregarContenidos(elemento.id, elemento.ContenidoTextArea)
    })

}