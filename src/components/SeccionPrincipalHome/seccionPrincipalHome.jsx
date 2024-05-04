import {Link} from "wouter";
import {Contenedor, SloganPrincipal, SectorBoton, CardInfo, ContendorCards, FlechaSimbolo} from './seccionPrincipalHome.styled'


const SeccionPrincipalHome = () => {
  return (
    <Contenedor>
    <SloganPrincipal>Agilizá la creación<br/> de tus<br/> <span>README ✍🏽</span></SloganPrincipal>
    <SectorBoton>Personaliza y crea rápidamente. <Link href="/editor"><button>Empeza ahora</button></Link></SectorBoton>
    <ContendorCards>
    <CardInfo background={'#556266'} width={'50%'} color={'#fff'} size={30}><a href="https://docs.asciidoctor.org/asciidoc/latest/" target="_blanck">Lee la documentación de AsciiDoc. <br/><FlechaSimbolo flecha={'#fff'} flechaopuesto={'#000'}>🡾</FlechaSimbolo></a></CardInfo>
    <CardInfo background={'#a1c79a'} width={'35%'} color={'#000'} size={35}>Donar al proyecto<br/><FlechaSimbolo flecha={'#000'} flechaopuesto={'#fff'}>🡼</FlechaSimbolo></CardInfo>
    </ContendorCards>
    </Contenedor>
  )
}

export default SeccionPrincipalHome