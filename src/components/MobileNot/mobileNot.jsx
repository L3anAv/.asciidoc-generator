import styled from "styled-components"
import { useStore } from "../../store/useStoreInfo"
import BarraTitulo from "../barraTitulo/barraTitulo"

const Contenedor = styled.div`
    width:100vw;
    height:calc(100vh + 50px);
    background:${props => props.thememode ? '#d6d6d6' : '#181220'};

    p{
        color:${props => props.thememode ? '#000' : '#fff'};
        padding-top:80px;
        text-align:center;
    }
`

const MobileNot = () => {

    const { theme } = useStore()
 
  return (
    <Contenedor thememode={theme}>
    <BarraTitulo />
    <p>Todavia no disponemos de versión movil.</p>
    </Contenedor>
  )
}

export default MobileNot