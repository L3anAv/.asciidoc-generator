import styled from 'styled-components'
import { useStore } from '../../store/useStoreInfo'
import Footer from '../../components/footer/footer'
import MinEditorLight from '../../assets/min-editor.webp'
import MinEditorDark from '../../assets/min-editor-dark.webp'
import BarraTitulo from '../../components/barraTitulo/barraTitulo'
import SeccionPrincipalHome from '../../components/SeccionPrincipalHome/seccionPrincipalHome'

const Contenedor = styled.div`
    width:100%;
    display:flex;
    overflow:hidden;
    /*background:#d6d6d6;*/
    height:calc(100vh - 32px);
    background:${props => props.themeMode ? '#d6d6d6' : '#181220'};

    img{
        display:block;
        max-width:50%;
        margin-top:50px;
        object-fit: scale-down;
        transform:translateX(18%);
        z-index:2;
    }
`

const Home = () => {

    const { theme } = useStore()

    return (
        <>
        <Contenedor themeMode={theme}>
        <BarraTitulo />
        <SeccionPrincipalHome />
        <img src={theme ? MinEditorLight : MinEditorDark}/>
        </Contenedor>
        <Footer />
        </>
    )
}
export default Home
