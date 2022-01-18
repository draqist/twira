import React from 'react'
import { Link } from 'react-router-dom'
import './sroutes.scss'
import PropTypes from 'prop-types';

const Sroutes = ({ RoutImg, Route, link, display }) => {
  
  return (
    <div className = 'hover'>
      <div className = 'hov'>
        <Link to = {link} className = 'sroutes'>
        <img src={ RoutImg } alt = {`${RoutImg}`} className = 'routimage' />
        <div style={{display: display} }>
          <h3> { Route}</h3>
        </div>
      </Link>
      </div>
    </div>
  )
}
Sroutes.defaultProps = {
  Route: 'Routes',
  RoutImg: 'Img',
  display: 'block'
}
Sroutes.propTypes = {
  Route: PropTypes.string,
  RoutImg: PropTypes.string,
  display: PropTypes.string
}

export default Sroutes
