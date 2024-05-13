import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { BotonComponente } from "./boton.styled"
import { useStore } from "../../store/useStoreInfo"

const Boton = ({contenidoBoton, botonId, handleClick,botonwidth, border}) => {
  
  const { theme } = useStore()
  const [colorBorderTheme, setColorBorderTheme] = useState('#18111f')
  const [colorBorderThemeActive, setColorBorderThemeActive] = useState('#ff9500')

  useEffect(() => {
   
    if(theme){
      setColorBorderTheme('#fff')
    }else{
      setColorBorderTheme('#18111f')
    }

  }, [theme])

  useEffect(() => {
   
    if(theme){
      setColorBorderThemeActive('#ff9500')
    }else{
      setColorBorderThemeActive('#fa85cf')
    }

  }, [theme])
  

  return (
    <BotonComponente border={border ? `2px solid ${colorBorderThemeActive}` : `2px solid ${colorBorderTheme}`} themeMode={theme} width={botonwidth} id={botonId} onClick={() => handleClick(botonId)}>
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