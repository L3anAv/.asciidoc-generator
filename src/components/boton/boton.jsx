import PropTypes from 'prop-types';
import { BotonComponente } from "./boton.styled"

const Boton = ({contenidoBoton, botonId, handleClick,botonwidth, border}) => {
  return (
    <BotonComponente width={botonwidth} id={botonId} onClick={() => handleClick(botonId)} border={border ? '2px solid #ed9553': '2px solid #fff'}>
      {contenidoBoton}
    </BotonComponente>
  )
}

Boton.propTypes = {
  contenidoBoton: PropTypes.node.isRequired,
  botonId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleClick: PropTypes.func.isRequired,
  border: PropTypes.bool.isRequired,
  botonwidth: PropTypes.number.isRequired,
}

export default Boton