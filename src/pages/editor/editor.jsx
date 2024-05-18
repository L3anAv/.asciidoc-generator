import styled from "styled-components"
import { useStore } from "../../store/useStoreInfo"
import Textarea from "../../components/textarea/textarea"
import BarraTitulo from "../../components/barraTitulo/barraTitulo"
import PreviewDocumento from "../../components/previewDocumento/previewDocumento"
import BarraSeccionDocumento  from "../../components/barraSeccionesDocumento/barraSeccionesDocumento"

const ContenedorPrincipal = styled.div`
  background:${props => props.themeMode ? '#d5e8df': '#181220'};
`

const ContenedorSecundario = styled.div`
  width:100%;
  height:92.3vh;
  display:flex;
  margin-top:50px;
  flex-direction:row;
`

 const Editor = () => {

  const { theme } = useStore()

  /*
  if(!isMobile){
    */
    return (
      <ContenedorPrincipal themeMode={theme}>
      <BarraTitulo />
      <ContenedorSecundario>
      <BarraSeccionDocumento />
      <Textarea />
      <PreviewDocumento />
      </ContenedorSecundario>
      </ContenedorPrincipal>
    )
    /*
  }else{
    return (
      <div>No disponemos de versión fuera de escritorio todavía 😢.</div>
    )
  }
  */
}

export default Editor
