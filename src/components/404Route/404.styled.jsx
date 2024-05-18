import styled from "styled-components";
import OjosPerdidos from '../../assets/404.gif'

export const Contenedor = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-image: url(${OjosPerdidos});

    p{
        color:white;
        font-size:110px;
        padding-top:80px;
        text-align: center;
        font-family:Jersey15;
    }
`