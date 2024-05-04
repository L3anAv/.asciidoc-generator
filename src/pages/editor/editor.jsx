import styled from "styled-components"
import Textarea from "../../components/textarea/textarea"
import BarraTitulo from "../../components/barraTitulo/barraTitulo"
import PreviewDocumento from "../../components/previewDocumento/previewDocumento"
import BarraSeccionDocumento  from "../../components/barraSeccionesDocumento/barraSeccionesDocumento"

const ContenedorPrincipal = styled.div`
  background:#cbdfd6;
`

const ContenedorSecundario = styled.div`
  width:100%;
  height:93vh;
  display:flex;
  margin-top:50px;
  flex-direction:row;
`

 const Editor = () => {
  return (
    <ContenedorPrincipal>
    <BarraTitulo />
    <ContenedorSecundario>
    <BarraSeccionDocumento />
    <Textarea />
    <PreviewDocumento />
    </ContenedorSecundario>
    </ContenedorPrincipal>
  )
}

export default Editor
