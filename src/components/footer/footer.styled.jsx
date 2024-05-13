import styled from "styled-components";

export const Contenedor = styled.div`
    heigth:10px;
    display:flex;
    color:#fff;
    padding:8px;
    z-index:1;
    font-size:16px;
    font-family:Platypi;
    /*background:#665955;*/
    justify-content:center;
    background:${props => props.themeMode ? '#665955' : '#7a939a'};

    a{
        all:unset;
        cursor:pointer;
        margin-left:5px;
        margin-right:5px;
        text-decoration:underline;
    }

`