import './styles-asciidoc.css'
import Asciidoctor from 'asciidoctor'
import { useEffect,useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useStore }  from '../../store/useStoreInfo'
import { toast, ToastContainer } from 'react-toastify';
import { ZonaPreview, Contenedor, ContenedorMenu,ZonaPreviewAscii, ButtonCopiar, BotonPreview } from "./previewDocumento.styled"

const PreviewDocumento = () => {

  const asciidoctor = Asciidoctor()
  const {contenidosTextarea, theme, themeName} = useStore()
  const actualizarThemeActual = useStore((state) => state.actualizartheme)
  const actualizarThemeName = useStore((state) => state.actualizarthemeName)

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

  function hadleBotonThemeMode(){
    
    if(theme){
      actualizarThemeActual(false)
      actualizarThemeName('Modo Claro')
      }else{
        actualizarThemeActual(true)
        actualizarThemeName('Modo Oscuro')
    }

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
    <ContenedorMenu><BotonPreview themeMode={theme} underlineActivo={mostrarPreview ? 'underline' : 'none'} onClick={() => setMostrarPreview(true)}>Previsualización</BotonPreview><BotonPreview themeMode={theme} underlineActivo={!mostrarPreview ? 'underline' : 'none'} onClick={() => setMostrarPreview(false)}>Código en asciidoc</BotonPreview></ContenedorMenu>
    {mostrarPreview ?
      <><ButtonCopiar themeMode={theme} onClick={() => hadleBotonThemeMode()}>{themeName}</ButtonCopiar><ZonaPreview dangerouslySetInnerHTML={{__html: asciidoctor.convert(textoParaPreview)}}/></>
      : <><ButtonCopiar themeMode={theme} onClick={() => handleClickBotonCopiar()}>Copiar Contenido</ButtonCopiar><ZonaPreviewAscii disabled>{textoParaPreview}</ZonaPreviewAscii></>
    }
    <ToastContainer />
    </Contenedor>
  )

}

export default PreviewDocumento