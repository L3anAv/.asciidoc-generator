import { useState, useEffect } from 'react'
import { AreaDeTexto, Contenedor }  from './textarea.styled'
import { useStore, agregarContenidos }  from '../../store/useStoreInfo'
import { darInfoPorId, darTitulosPorId } from '../../utils/darInfoPorId'

const Textarea = () => {
  
  // Store
  const {idActual, contenidosTextarea, theme} = useStore()

  // Estados
  const [isEmpty, setIsEmpty] = useState(true);
  const [textoDeTextArea, setTextoDeTextArea] = useState()
  const [tituloTextArea, setTittuloTextArea] = useState('')
  
  useEffect(() => {

    if (idActual === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }

    if(idActual != ''){
      const TituloActual = darTitulosPorId(idActual)
      setTittuloTextArea(TituloActual)
    }else{
      setTittuloTextArea('Editor')
    }
    
    if(!contenidosTextarea.has(idActual) && idActual != ''){
      const objetoConDatos = darInfoPorId(idActual)
      agregarContenidos(objetoConDatos.id, objetoConDatos.ContenidoTextArea)
    }

    setTextoDeTextArea(contenidosTextarea.get(idActual))
    
  }, [idActual, contenidosTextarea])
  
  // Esto va dentro de un useEffect donde return el limpiarl el evento?
  const handleTextAreaChange = (event) => {

    agregarContenidos(idActual, event.target.value)
    setTextoDeTextArea(event.target.value)

  };

  return(
    <Contenedor themeMode={theme}>
    {isEmpty ? <p>Seleccione una sección de la barra lateral izquierda para editar el contenido.</p>
             : <><h2>{tituloTextArea}</h2><AreaDeTexto themeMode={theme} value={textoDeTextArea} onChange={handleTextAreaChange} /></>
    }
    </Contenedor>
  )
}

export default Textarea