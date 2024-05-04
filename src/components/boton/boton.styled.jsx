import styled from 'styled-components'

export const BotonComponente = styled.button`
color:#000;
padding:5px;
margin:4px;
font-size:15px;
cursor:pointer;
background:#fff;
border-radius:20px;
width:${props => props.width}%;
border:${props => props.border};
`