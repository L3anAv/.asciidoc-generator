import styled from 'styled-components'
import Footer from '../../components/footer/footer'
import MinEditor from '../../assets/min-editor.png'
import BarraTitulo from '../../components/barraTitulo/barraTitulo'
import SeccionPrincipalHome from '../../components/SeccionPrincipalHome/seccionPrincipalHome'

const Contenedor = styled.div`
    width:100%;
    display:flex;
    background:#ecebf1;
    overflow:hidden;
    height:calc(100vh - 32px);

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

    return (
        <>
        <Contenedor>
        <BarraTitulo />
        <SeccionPrincipalHome />
        <img src={MinEditor}/>
        </Contenedor>
        <Footer />
        </>
    )
}
export default Home
