import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1412.css'

const NavigationLinks1412 = (props) => {
  return (
    <nav className="navigation-links1412-nav">
      <Link to="/" className="navigation-links1412-navlink">
        {props.text}
      </Link>
      <Link to="/health-store-user" className="navigation-links1412-navlink1">
        {props.text1}
      </Link>
      <Link to="/prescription-order" className="navigation-links1412-navlink2">
        {props.text2}
      </Link>
      <Link to="/ambulance-service" className="navigation-links1412-navlink3">
        {props.text3}
      </Link>
      <Link
        to="/prescription-scanner"
        className="navigation-links1412-navlink4"
      >
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks1412.defaultProps = {
  text3: 'Ambulance Service',
  text4: 'Prescription Scanner',
  text2: 'Prescription Order',
  text1: 'Health Store',
  text: 'Home',
  rootClassName: '',
}

NavigationLinks1412.propTypes = {
  text3: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks1412
