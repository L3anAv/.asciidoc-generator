import './styles-asciidoc.css'
import Asciidoctor from 'asciidoctor'
import { useEffect,useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useStore }  from '../../store/useStoreInfo'
import { ZonaPreview, Contenedor, ContenedorMenu,ZonaPreviewAscii, ButtonCopiar, BotonPreview } from "./previewDocumento.styled"

const PreviewDocumento = () => {

  const asciidoctor = Asciidoctor()
  const {contenidosTextarea} = useStore()

  const notify = () => {

    toast.success("Copiado! 📃", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      });
  }

  const [textoParaPreview, setTextoParaPreview] = useState('')
  const [mostrarPreview, setMostrarPreview] = useState(true)
  
  function handleClickBotonCopiar(){
    notify()
    navigator.clipboard.writeText(textoParaPreview)
  }

  useEffect(() => {

    let textoCompletoPreview = ''

    for (const [, value] of contenidosTextarea) {
      textoCompletoPreview += `${value}\n\n`;
    }
   
    setTextoParaPreview(textoCompletoPreview)

  }, [contenidosTextarea])
  
  return (
    <Contenedor>
    <ContenedorMenu><BotonPreview underlineActivo={mostrarPreview ? 'underline' : 'none'} onClick={() => setMostrarPreview(true)}>Previsualización</BotonPreview><BotonPreview underlineActivo={!mostrarPreview ? 'underline' : 'none'} onClick={() => setMostrarPreview(false)}>Código en asciidoc</BotonPreview></ContenedorMenu>
    {mostrarPreview ?
      <ZonaPreview dangerouslySetInnerHTML={{__html: asciidoctor.convert(textoParaPreview)}}/>
      : <><ButtonCopiar onClick={() => handleClickBotonCopiar()}>Copiar Contenido</ButtonCopiar><ZonaPreviewAscii disabled>{textoParaPreview}</ZonaPreviewAscii></>
    }
    <ToastContainer />
    </Contenedor>
  )

}

export default PreviewDocumento