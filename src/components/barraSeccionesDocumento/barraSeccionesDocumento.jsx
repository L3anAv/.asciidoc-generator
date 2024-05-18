import Boton from '../boton/boton';
import { v4 as uuidv4 } from 'uuid';
import Trash from '../../svg/trash/trash'
import { useState,useEffect } from 'react';
import { DarTitulosPorId } from '../../utils/darInfoPorId'
import ContenedorBoton from '../botonContenedor/botonContenedor'
import { useStore, agregarId, removerId, agregarContenidos } from '../../store/useStoreInfo';
import { ArrayBotonesFijos } from '../../utils/auxiliares-json/SeccionesFijas';
import { ArrayBotonesSecciones } from '../../utils/auxiliares-json/SeccionesInfo';
import { BarraLateral, SeccionesSeleccionadas, SeccionesParaSeleccionar, Titulo, TextoDescripcion } from './barraSeccionesDocumento.styled';

const BarraSeccionesDocumento = () => {

  const { ids, idActual, theme } = useStore()
  const actualizarIdActual = useStore((state) => state.actualizarIdActual)
  
  const [titulosBotones, setTitulosBotones] = useState([])

  function crearNuevaSeccionVacia(){
      const idNuevo = uuidv4()
      agregarId(idNuevo)
      agregarContenidos(idNuevo, 'Nueva Seccion Vacia')
      // Crear un nuevo id, agregarlo en ids
  }

  useEffect(() => {
    const titulosMap = new Map()

    for (const id of ids) {

      const tituloBotonParaId = DarTitulosPorId(id)
      titulosMap.set(id, tituloBotonParaId)

    }

    setTitulosBotones([...titulosMap]);
  }, [ids])

  return (
    <BarraLateral modeTheme={theme}>
      <Titulo>Secciones</Titulo>
      <TextoDescripcion>Aquí se listan las secciones agregadas. Haga click para editar el contenido.</TextoDescripcion>

      <SeccionesSeleccionadas>
      {ArrayBotonesFijos.map((elemento) => (
         <ContenedorBoton key={elemento.id}>
        <Boton
          botonId={elemento.id}
          botonwidth={78}
          contenidoBoton={elemento.TituloBoton}
          border={idActual === elemento.id ? true : false}
          handleClick={() => actualizarIdActual(elemento.id)}
        />
        </ContenedorBoton>
      ))}
      {titulosBotones.map((elemento) => (
      <ContenedorBoton key={elemento[0]}>
        <Boton
          botonId={elemento[0]}
          botonwidth={78}
          contenidoBoton={elemento[1]}
          border={idActual === elemento[0] ? true : false}
          handleClick={() => actualizarIdActual(elemento[0])}
        />
        <Trash handleClick={removerId} idBoton={elemento[0]}/>
        </ContenedorBoton>
      ))}
      </SeccionesSeleccionadas>

      <TextoDescripcion>Haga click en las secciones que desee agregar a la lista.</TextoDescripcion>

      <SeccionesParaSeleccionar>
        <Boton
          border={false}
          botonwidth={90}
          botonId={`BotonSeccionNueva`}
          contenidoBoton={`+ Nueva Sección`}
          handleClick={() => crearNuevaSeccionVacia()}
        />
        {ArrayBotonesSecciones.map((elemento) => {
          return <Boton key={elemento.id} contenidoBoton={elemento.TituloBoton} border={false} botonId={elemento.id} handleClick={agregarId} botonwidth={90}/>;
        })}
      </SeccionesParaSeleccionar>
    </BarraLateral>
  )
};

export default BarraSeccionesDocumento

