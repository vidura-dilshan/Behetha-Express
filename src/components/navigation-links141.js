import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links141.css'

const NavigationLinks141 = (props) => {
  return (
    <nav className="navigation-links141-nav">
      <span className="navigation-links141-text">{props.text}</span>
      <span className="navigation-links141-text1">{props.text1}</span>
      <span className="navigation-links141-text2">{props.text2}</span>
      <span className="navigation-links141-text3">{props.text3}</span>
      <span className="navigation-links141-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks141.defaultProps = {
  text3: 'Ambulance Service',
  text: 'Home',
  text1: 'Health Store',
  rootClassName: '',
  text4: 'Prescription Scanner',
  text2: 'Prescription Order',
}

NavigationLinks141.propTypes = {
  text3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks141
