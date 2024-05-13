import {Link} from "wouter";
import { useStore } from '../../store/useStoreInfo'
import {Contenedor, SloganPrincipal, SectorBoton, CardInfo, ContendorCards, FlechaSimbolo} from './seccionPrincipalHome.styled'


const SeccionPrincipalHome = () => {
  
  const { theme } = useStore()

  return (
    <Contenedor>
    <SloganPrincipal themeMode={theme}>Agilizá la creación <br/>de tus <br/><span>README ✍🏽</span></SloganPrincipal>
    <SectorBoton themeMode={theme}>Personaliza y crea rápidamente. <Link href="/editor"><button>Empeza ahora</button></Link></SectorBoton>
    <ContendorCards>
    <CardInfo border={theme ? '1px solid #000' : '1px solid #fff'} background={'#556266'} width={'50%'} color={'#fff'} size={30}><a href="https://docs.asciidoctor.org/asciidoc/latest/" target="_blanck">Lee la documentación de AsciiDoc. <br/><FlechaSimbolo flecha={theme ? '#fff' : '#fff'} flechaopuesto={theme ? '#000' : '#3a3a5d'}>🡾</FlechaSimbolo></a></CardInfo>
    <CardInfo border={theme ? '1px solid #000' : '1px solid #fff'} background={theme ? '#a1c79a' : '#3a3a5d'} width={'25%'} color={theme ? '#000' : '#fff'} size={35}><a href="https://github.com/l3anav/.asciidoc-generator/" target="_blanck">Ir al<br /> Repo<FlechaSimbolo flecha={theme ? '#000' : '#fff'} flechaopuesto={theme ? '#fff' : '#556266'}>🡼</FlechaSimbolo></a></CardInfo>
    {/*<CardInfo background={'#a1c79a'} width={'35%'} color={'#000'} size={35}>Donar al proyecto<br/><FlechaSimbolo flecha={'#000'} flechaopuesto={'#fff'}>🡼</FlechaSimbolo></CardInfo>*/}
    </ContendorCards>
    </Contenedor>
  )
}

export default SeccionPrincipalHome