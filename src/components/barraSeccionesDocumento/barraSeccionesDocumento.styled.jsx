import styled from 'styled-components'

export const BarraLateral = styled.aside`
width:22%;
display:flex;
margin-top:10px;
margin-left:8px;
overflow-x:hidden;
overflow-y:scroll;
margin-bottom:20px;
flex-direction:column;
background:${props => props.modeTheme ? '#d6d6d6' : '#43627a'};
`

export const SeccionesSeleccionadas = styled.div`
display:flex;
margin-bottom:25px;
align-items: center;
flex-direction:column;
`

export const SeccionesParaSeleccionar = styled(SeccionesSeleccionadas)`
margin-bottom:0;
`

export const Titulo = styled.h3`
color:#18111d;
/*color:#000;*/
font-size:15px;
margin-top:10px;
margin-left:12px;
font-family:OpenSans;
`

export const TextoDescripcion = styled.h4`
color:#18111d;
font-size:12px;
margin-top:5px;
margin-left:18px;
font-family:OpenSans;
word-wrap: break-word;
`