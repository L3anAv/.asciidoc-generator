import PropTypes from 'prop-types';
import styled from "styled-components";

export const BarraSuperior = styled.div`
    width:100%;
    height:50px;
    background:${props => props.thememode ? '#665955' : '#516970'};

    div{
        margin-left:11%;
    }

    @media (max-width: 1250px) {
        div{
            margin-left:40%;
        }
      }
      
`

BarraSuperior.propTypes = {
    thememode: PropTypes.bool.isRequired,
};

export const Titulo = styled.h2`
    font-size:36px;
    margin-left:2%;
    font-family:Righteous-Regular;

    span {
        display:inline-block;

        &:hover{
            transform:translateY(-5px);
        }
    }

    span:nth-child(1) {
      color: #000;

    }
    span:nth-child(2) {
        color: #f9ea77;
    }
    span:nth-child(3) {
        color: #9ac7d2;
    }
    span:nth-child(4) {
        color: #ed9553;
    }
    span:nth-child(5) {
        color: #a1c79a;
    }
`