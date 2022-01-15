import React from 'react'
import PropTypes from 'prop-types';
import './button.scss'

const Button = ({Text, display}) => {
  return (
    <button className='btn' style = {{display: display}}>
      {Text}
    </button>
  )
}

Button.defaultProps = {
  Text: 'Bill Me'
}
Button.propTypes = {
  Text: PropTypes.string,
  display: PropTypes.string
}

export default Button
