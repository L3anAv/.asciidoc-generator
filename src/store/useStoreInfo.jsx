import { create } from 'zustand'

export const useStore = create((set) => ({ 
   idActual: '',
   theme:true,
   themeName: 'Modo Oscuro',
   ids: new Set(),
   contenidosTextarea: new Map(),
   actualizartheme: (themeStatus) => set(() => ({theme: themeStatus})),
   actualizarIdActual: (idActualNuevo) => set(() => ({idActual: idActualNuevo})),
   actualizarthemeName: (themeNameNuevo) => set(() => ({themeName: themeNameNuevo})),
}))

export function agregarId(nuevoId) {

  useStore.setState((prev) => {
  
  const actualizarIds = new Set(prev.ids);
  actualizarIds.add(nuevoId);

  return {ids: actualizarIds}
  });

}

export function removerId(IdARemover) {

  useStore.setState((prev) => {

  eliminarContenido(IdARemover)
  const actualizarIds = new Set(prev.ids);
  actualizarIds.delete(IdARemover);

  if(IdARemover === prev.idActual){
    prev.actualizarIdActual('')
  }

  return {ids: actualizarIds}
  });

}

export function agregarContenidos(id, contenidoTextArea){

  useStore.setState((prev) => {
    
    const actualizarContenidos = new Map(prev.contenidosTextarea);
    actualizarContenidos.set(id, contenidoTextArea);

    return {contenidosTextarea: actualizarContenidos}
    
  });
}

function eliminarContenido(id){

  useStore.setState((prev) => {
    
    const actualizarConenidos = new Map(prev.contenidosTextarea);
    actualizarConenidos.delete(id);

    return {contenidosTextarea: actualizarConenidos}
  });

}