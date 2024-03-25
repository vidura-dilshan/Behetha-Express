import React from 'react'

import { Helmet } from 'react-helmet'

import './chatbot.css'

const Chatbot = (props) => {
  return (
    <div className="chatbot-container">
      <Helmet>
        <title>Chatbot - exported project</title>
        <meta property="og:title" content="Chatbot - exported project" />
      </Helmet>
    </div>
  )
}

export default Chatbot
