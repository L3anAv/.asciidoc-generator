import {Contenedor} from './footer.styled'
import { useStore } from '../../store/useStoreInfo'

const Footer = () => {

  const { theme } = useStore()

  return (
    <Contenedor thememode={theme}>
        Hecho por <a href="https://github.com/l3anav">L3anAv</a> con ♥
    </Contenedor>
  )
}

export default Footer
