import PropTypes from 'prop-types';
import { CntdrBoton } from "./botonContenedor.styled"

const ContenedorBoton = ({ children }) => {
  return (
   <CntdrBoton>
     {children}
   </CntdrBoton>
  )
}

ContenedorBoton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ContenedorBoton
