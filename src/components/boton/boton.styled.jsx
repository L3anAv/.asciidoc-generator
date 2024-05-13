import styled from 'styled-components'

export const BotonComponente = styled.button`
    padding:5px;
    margin:4px;
    font-size:15px;
    cursor:pointer;
    border-radius:20px;
    width:${props => props.width}%;
    border:${props => props.border};
    color:${props => props.themeMode ? '#18111f' : '#8bb9e4'};
    background:${props => props.themeMode ? '#fff' : '#18111f'};
`