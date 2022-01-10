import React from 'react'
import { NavLink } from 'react-router-dom'
import './sroutes.scss'
import PropTypes from 'prop-types';

const Sroutes = ({RoutImg, Route }) => {
  return (
    <div className = 'hover-ctn'>
      <div className = 'hover'>
        <NavLink to = '/' className = 'sroutes'>
          <img src={ RoutImg } alt = {`${RoutImg}`} />
          <h3> { Route}</h3>
        </NavLink>
      </div>
    </div>
  )
}
Sroutes.defaultProps = {
  Route: 'Routes',
  RoutImg: 'Img'
}
Sroutes.propTypes = {
  Route: PropTypes.string,
  RoutImg: PropTypes.string,
}

export default Sroutes
