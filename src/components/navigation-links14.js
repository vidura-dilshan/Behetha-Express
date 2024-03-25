import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links14.css'

const NavigationLinks14 = (props) => {
  return (
    <nav className={`navigation-links14-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links14-navlink">
        {props.text}
      </Link>
      <Link to="/health-store-user" className="navigation-links14-navlink1">
        {props.text1}
      </Link>
      <Link to="/prescription-order" className="navigation-links14-navlink2">
        {props.text2}
      </Link>
      <Link to="/ambulance-service" className="navigation-links14-navlink3">
        {props.text3}
      </Link>
      <Link to="/prescription-scanner" className="navigation-links14-navlink4">
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks14.defaultProps = {
  text3: 'Ambulance Service',
  text1: 'Health Store',
  rootClassName: '',
  text4: 'Prescription Scanner',
  text2: 'Prescription Order',
  text: 'Home',
}

NavigationLinks14.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks14
