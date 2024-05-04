import styled from "styled-components";

export const Contenedor = styled.div`
    width:45%;
    margin-left:6%;
    margin-top:60px;
`

export const ContendorCards = styled.div`
    display:flex;
    flex-direction:row;
`

export const SloganPrincipal = styled.h2`
    font-family:Rozha;
    font-size:50px;
    color:#000;

    span{
        font-size:90px;
        color:#7b716d;
    }

`

export const SectorBoton = styled.div`
    
    border:1px solid #000;
    border-radius:25px;
    height:60px;
    width:100%;

    margin-top:18px;

    display:flex;
    position:relative;
    font-size:18px;
    padding-top:20px;
    padding-left:25px;
    font-family:Platypi;

    button{
        position:absolute;
        top:10px;
        right:10px;
        border:none;
        height:40px;
        color:#fff;
        padding:10px;
        font-size:14px;
        border-radius:30px;
        background:#665955;

        &:hover{
            background:#665955;
        }
    }
`

export const CardInfo = styled.div`
    position:relative;
    height:25vh;
    margin-top:20px;
    border:1px solid #000;
    width:${props => props.width};
    background:${props => props.background};

    padding:20px;
    font-family:Rozha;
    cursor:pointer;
    color:${props => props.color};
    font-size:${props => props.size}px;

    &:hover{
        text-decoration:underline;
    }

    a{
        all:unset;
    }

    span{
        
    }
`

export const FlechaSimbolo = styled.span`
        position:absolute;
        right:10px;
        bottom:10px;
        font-size:40px;
        cursor:pointer;
        color:${props => props.flecha};

        &:hover{
            color:${props => props.flechaopuesto};
        }
`