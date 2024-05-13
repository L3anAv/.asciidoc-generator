import {Link} from "wouter";
import { useStore } from "../../store/useStoreInfo";
import { BarraSuperior, Titulo } from './barraTitulo.styled'

const BarraTitulo = () => {

  const { theme } = useStore()

  return (
    <>
        <BarraSuperior themeMode={theme}>
          <Link href="/"><Titulo><span>.</span><span>a</span><span>d</span><span>o</span><span>c</span></Titulo></Link>
        </BarraSuperior>
    </>
  )
}

export default BarraTitulo