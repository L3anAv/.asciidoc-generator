import styled from "styled-components";

export const Contenedor = styled.div`
  width:38%;
  display:flex;
  text-align:center;
  flex-direction:column;

  h2{
    font-size:12px;
    text-align:left;
    margin-left:12px;
    font-family:OpenSans;
    
    color:${props => props.themeMode ? '#18111d' : '#fff'};
  }

  p{
    font-size:18px;
    margin-top:50px;
    font-family:OpenSans;
    color:${props => props.themeMode ? '#18111d' : '#fff'};
  }
`

export const AreaDeTexto = styled.textarea`
    
    height:91%;
    color:#fff;
    border:none;
    resize: none;
    
    padding:8px;
    font-size:15px;
    margin-top:8px;
    margin-left:10px;
    background:#191819;
    border:${props => props.themeMode ? 'none' : '1px solid #fb85cc'};
    border-radius:2%;

    &:focus {
      outline: none;
    }
`