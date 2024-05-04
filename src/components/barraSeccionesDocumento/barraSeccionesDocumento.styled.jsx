import styled from 'styled-components'

export const BarraLateral = styled.aside`
width:22%;
display:flex;
margin-top:10px;
margin-left:8px;
background:#556266;
margin-bottom:10px;
flex-direction:column;
overflow-x:hidden;
overflow-y:scroll;
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
color:#000;
font-size:13px;
margin-top:10px;
margin-left:12px;
font-family:OpenSans;
`

export const TextoDescripcion = styled.h4`
color:#fff;
font-size:12px;
margin-top:5px;
margin-left:18px;
font-family:OpenSans;
word-wrap: break-word;
`