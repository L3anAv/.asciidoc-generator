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
    font-family:Platypi;
    font-size:50px;
    color:${props => props.themeMode ? '#000' : '#fff'};

    span{
        font-size:90px;
        color:${props => props.themeMode ? '#7b716d' : '#7a939a'};
    }

`

export const SectorBoton = styled.div`
    margin-bottom:20px;
    background:#f7f7f7;
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
        transition:background 0.5s;

        background:${props => props.themeMode ? '#665955' : '#4c4c73'};

        &:hover{
            
            background:${props => props.themeMode ? '#91817d' : '#39395b'};
        }
    }
`

export const CardInfo = styled.div`
    position:relative;
    height:25vh;
    margin-top:10px;
    margin-left:3px;
    width:${props => props.width};
    border:${props => props.border};
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