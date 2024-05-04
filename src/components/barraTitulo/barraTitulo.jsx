import {Link} from "wouter";
import GitHubButton from 'react-github-btn'
import { BarraSuperior, Titulo } from './barraTitulo.styled'

const BarraTitulo = () => {
  return (
    <>
        <BarraSuperior>
          <Link href="/"><Titulo><span>.</span><span>a</span><span>d</span><span>o</span><span>c</span></Titulo></Link>
          <div>
          <GitHubButton href="https://github.com/L3anAv/.asciidoc-generator" data-color-scheme="no-preference: light; light: light; dark: dark_dimmed;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star buttons/github-buttons on GitHub">Star</GitHubButton>
          </div>
        </BarraSuperior>
    </>
  )
}

export default BarraTitulo