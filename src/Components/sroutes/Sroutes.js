import React from 'react'
import { Link } from 'react-router-dom'
import './sroutes.scss'
import PropTypes from 'prop-types';

const Sroutes = ({RoutImg, Route }) => {
  return (
    <div>
      <Link to = '/' className = 'sroutes'>
          <img src={ RoutImg } alt = {`${RoutImg}`} />
        <h3> { Route}</h3>
        </Link>
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
