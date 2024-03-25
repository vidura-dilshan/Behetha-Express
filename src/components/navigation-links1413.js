import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1413.css'

const NavigationLinks1413 = (props) => {
  return (
    <nav className="navigation-links1413-nav">
      <Link to="/pharmacist-login" className="navigation-links1413-navlink">
        {props.text}
      </Link>
      <Link
        to="/health-store-pharmacist"
        className="navigation-links1413-navlink1"
      >
        {props.text1}
      </Link>
      <Link
        to="/pharmacist-dashboard"
        className="navigation-links1413-navlink2"
      >
        {props.text2}
      </Link>
      <Link to="/ambulance-service" className="navigation-links1413-navlink3">
        {props.text3}
      </Link>
      <Link
        to="/prescription-scanner"
        className="navigation-links1413-navlink4"
      >
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks1413.defaultProps = {
  rootClassName: '',
  text1: 'Health Store',
  text2: 'Prescription Order',
  text3: 'Ambulance Service',
  text: 'Home',
  text4: 'Prescription Scanner',
}

NavigationLinks1413.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks1413
