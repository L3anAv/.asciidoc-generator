import PropTypes from 'prop-types';
import { Svg } from "./trash.styled"

const Trash = ({handleClick, idBoton}) => {
  return (
    <Svg onClick={() => handleClick(idBoton)} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" fill="#000000"></path><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9H20Z" stroke="#000000"></path><path d="M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375" stroke="#000000"></path></Svg>
  )
}

Trash.propTypes = {
  idBoton: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Trash