import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1411.css'

const NavigationLinks1411 = (props) => {
  return (
    <nav className="navigation-links1411-nav"> 

      <Link to="/" className="navigation-links1411-navlink">
        {props.text}
      </Link>
      <Link to="/health-store-user" className="navigation-links1411-navlink1">
        {props.text1}
      </Link>
      <Link to="/prescription-order" className="navigation-links1411-navlink2">
        {props.text2}
      </Link>
      <Link to="/ambulance-service" className="navigation-links1411-navlink3">
        {props.text3}
      </Link>
      <Link
        to="/prescription-scanner"
        className="navigation-links1411-navlink4"
      >
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks1411.defaultProps = {
  text2: 'Prescription Order',
  text4: 'Prescription Scanner',
  text: 'Home',
  text3: 'Ambulance Service',
  rootClassName: '',
  text1: 'Health Store',
}

NavigationLinks1411.propTypes = {
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks1411
