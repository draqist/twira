import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './sroutes.scss'
import PropTypes from 'prop-types';

const Sroutes = ({ ActiveRout, RoutImg, Route, link, display }) => {
  const [active, setActive] = useState(false)
  
  return (
    <div className = 'hover'>
      <div className = 'hov'>
        <NavLink to = {link} className = 'sroutes' style = {({isActive}) => {isActive ? setActive(true): setActive(false)}}>
        <img src={ active? ActiveRout: RoutImg } alt = {`${RoutImg}`} className = 'routimage' />
        <div style={{display: display} }>
          <h3> { Route}</h3>
        </div>
      </NavLink>
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
