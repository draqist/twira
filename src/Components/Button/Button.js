import React from 'react'
import PropTypes from 'prop-types';
import './button.scss'

const Button = ({Text}) => {
  return (
    <button className='btn'>
      {Text}
    </button>
  )
}

Button.defaultProps = {
  Text: 'Bill Me'
}
Button.propTypes = {
  Text: PropTypes.string
}

export default Button
