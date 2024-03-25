import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links12.css'

const NavigationLinks12 = (props) => {
  return (
    <nav className={`navigation-links12-nav ${props.rootClassName} `}>
      <span className="navigation-links12-text">{props.text}</span>
      <span className="navigation-links12-text1">{props.text1}</span>
      <span className="navigation-links12-text2">{props.text2}</span>
      <span className="navigation-links12-text3">{props.text3}</span>
      <span className="navigation-links12-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks12.defaultProps = {
  text2: 'Prescription Order',
  rootClassName: '',
  text: 'Home',
  text4: 'Prescription Scanner',
  text1: 'Health Store',
  text3: 'Ambulance Service',
}

NavigationLinks12.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks12
