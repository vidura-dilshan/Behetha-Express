import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1411 from '../components/navigation-links1411'
import './ambulance-service.css'

const AmbulanceService = (props) => {
  return (
    <div className="ambulance-service-container">
      <Helmet>
        <title>Ambulance-Service - exported project</title>
        <meta
          property="og:title"
          content="Ambulance-Service - exported project"
        />
      </Helmet>
      <h1 className="ambulance-service-text">Request Ambulance</h1>
      <div className="ambulance-service-container1">
        <Link to="/chatbot" className="ambulance-service-navlink">
          <img
            alt="Layer33014"
            src="/external/layer33014-c1jf.svg"
            className="ambulance-service-layer3"
          />
        </Link>
        <div className="ambulance-service-messagesent-component-layout-max">
          <div className="ambulance-service-timestampcontainer"></div>
          <span>Hello What can I help You with?</span>
        </div>
        <img
          alt="Rectangle3002686"
          src="/external/rectangle3002686-l4in-300h-300h.png"
          className="ambulance-service-rectangle300"
        />
        <h1 className="ambulance-service-text02">
          <span>TRUST IN US FOR ALL YOUR </span>
          <span>HEALTH CARE NEEDS</span>
          <br></br>
        </h1>
        <div className="ambulance-service-container2">
          <NavigationLinks1411></NavigationLinks1411>
        </div>
        <img
          alt="image"
          src="/ambulance-1500w.jpg"
          className="ambulance-service-image"
        /><Link to="/Mapcomponent">
        <button type="button" className="ambulance-service-button button">
          Send Request
        </button>
        </Link>
      </div>
      <img
        alt="Rectangle32307"
        src="/external/rectangle32307-7l7r-600w.png"
        className="ambulance-service-rectangle3"
      />
      <div className="ambulance-service-container3"></div>
      <div className="ambulance-service-container4">
        <div className="ambulance-service-container5">
          <footer className="ambulance-service-footer">
            <div className="ambulance-service-container6">
              <nav className="ambulance-service-nav">
                <span className="ambulance-service-text06">About</span>
                <span className="ambulance-service-text07">Features</span>
                <span className="ambulance-service-text08">Pricing</span>
                <span className="ambulance-service-text09">Team</span>
                <span className="ambulance-service-text10">Blog</span>
              </nav>
            </div>
            <div className="ambulance-service-separator"></div>
            <div className="ambulance-service-container7">
              <span className="ambulance-service-text11">
                © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
              </span>
              <span className="ambulance-service-text12">
                Follow Our Social Media
              </span>
              <div className="ambulance-service-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="ambulance-service-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="ambulance-service-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="ambulance-service-icon4"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AmbulanceService
