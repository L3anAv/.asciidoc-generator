import styled from "styled-components";

export const Contenedor = styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
`

export const ContenedorMenu = styled.div`
    margin-top:15px;
`

export const BotonPreview = styled.button`
    color:#fff;
    color:${props => props.themeMode ? '#18111d' : '#fff'};
    border:none;
    font-size:12px;
    background:none;
    margin-left:10px;
    font-family:OpenSans;
    text-decoration:${props => props.underlineActivo};

    &:hover{
        cursor:pointer;
        text-decoration:underline;
    }
`

export const ZonaPreview = styled.div`
    padding:10px;
    height:85vh;
    font-size:85%;
    margin-top:10px;
    margin-left:8px;
    background:#fff;
    overflow-y:scroll;
    overflow-x:hidden;
    border-radius:5px;
    border:1px solid #000;
`

export const ZonaPreviewAscii = styled.textarea`
    position:relative;
    height:85vh;
    padding:10px;
    resize: none;
    font-size:85%;
    margin-top:10px;
    margin-left:8px;
    background:#9db2b7;
    background:#fff;
    overflow-y:scroll;
    overflow-x:hidden;
    border-radius:5px;
    border:1px solid #000;
`

export const ButtonCopiar = styled.button`
    position:absolute;
    right:8px;
    width:10%;
    color:#fff;
    border:none;
    font-size:12px;
    margin-top:5px;
    padding:8px;
    border-radius:15px;
    font-family:OpenSans;

    background:${props => props.themeMode ? '#665955' : '#4c4c73'};

    &:hover{
        cursor:pointer;
        background:${props => props.themeMode ? '#91817d' : '#39395b'};
    }
`