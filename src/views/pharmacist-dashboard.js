
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './pharmacist-dashboard.css'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";


const PharmacistDashboard = (props) => {
  
  return (
    <div className="pharmacist-dashboard-container">
      <Helmet>
        <title>Pharmacist-Dashboard - exported project</title>
        <meta
          property="og:title"
          content="Pharmacist-Dashboard - exported project"
        />
      </Helmet>
      <div className="pharmacist-dashboard-overall-sales">
        <div className="pharmacist-dashboard-group192">
          <div className="pharmacist-dashboard-frame10">
            <span className="pharmacist-dashboard-text">
              <span>This Month</span>
            </span>
            <img
              alt="akariconschevrondown2386"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="pharmacist-dashboard-akariconschevrondown"
            />
          </div>
          <div className="pharmacist-dashboard-group206">
            <span className="pharmacist-dashboard-text02">
              <span>Overall Sales</span>
            </span>
            <span className="pharmacist-dashboard-text04">Rs.650000.00</span>
            <span className="pharmacist-dashboard-text05">
              <span>13.02%</span>
            </span>
          </div>
          <div className="pharmacist-dashboard-up">
            <img
              alt="Vector2386"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="pharmacist-dashboard-vector"
            />
            <img
              alt="Vector2386"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="pharmacist-dashboard-vector1"
            />
          </div>
          <div className="pharmacist-dashboard-group187">
            <span className="pharmacist-dashboard-text07">
              <span>RS.40K</span>
            </span>
          </div>
          <div className="pharmacist-dashboard-group188">
            <span className="pharmacist-dashboard-text09">
              <span>RS.30K</span>
            </span>
          </div>
          <div className="pharmacist-dashboard-group191">
            <span className="pharmacist-dashboard-text11">
              <span>RS5K</span>
            </span>
            <span className="pharmacist-dashboard-text13">
              <span>24</span>
            </span>
            <span className="pharmacist-dashboard-text15">
              <span>25</span>
            </span>
            <span className="pharmacist-dashboard-text17">
              <span>26</span>
            </span>
            <span className="pharmacist-dashboard-text19">
              <span>27</span>
            </span>
            <span className="pharmacist-dashboard-text21">
              <span>28</span>
            </span>
            <span className="pharmacist-dashboard-text23">
              <span>29</span>
            </span>
            <span className="pharmacist-dashboard-text25">
              <span>30</span>
            </span>
            <span className="pharmacist-dashboard-text27">
              <span>31</span>
            </span>
            <span className="pharmacist-dashboard-text29">
              <span>32</span>
            </span>
            <span className="pharmacist-dashboard-text31">
              <span>33</span>
            </span>
            <span className="pharmacist-dashboard-text33">
              <span>34</span>
            </span>
            <span className="pharmacist-dashboard-text35">
              <span>35</span>
            </span>
            <img
              alt="Line182386"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="pharmacist-dashboard-line18"
            />
          </div>
        </div>
        <img
          alt="Ellipse232386"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="pharmacist-dashboard-ellipse23"
        />
        <img
          alt="Ellipse252386"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="pharmacist-dashboard-ellipse25"
        />
        <img
          alt="Ellipse272386"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="pharmacist-dashboard-ellipse27"
        />
        <img
          alt="Ellipse242386"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="pharmacist-dashboard-ellipse24"
        />
        <img
          alt="Ellipse262386"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="pharmacist-dashboard-ellipse26"
        />
      </div>
      <div className="pharmacist-dashboard-container01">
        <div className="pharmacist-dashboard-container02">
          <h1 className="pharmacist-dashboard-text37">
            <span>Dashboard</span>
            <br></br>
          </h1>
          <Link to="/chatbot" className="pharmacist-dashboard-navlink">
            <img
              alt="Layer33014"
              src="/external/layer33014-c1jf.svg"
              className="pharmacist-dashboard-layer3"
            />
          </Link>
          <div className="pharmacist-dashboard-messagesent-component-layout-max">
            <div className="pharmacist-dashboard-timestampcontainer"></div>
            <span>Hello What can I help You with?</span>
          </div>
          <div className="pharmacist-dashboard-container03">
            <nav className="pharmacist-dashboard-nav">
              <Link
                to="/prescription-scanner"
                className="pharmacist-dashboard-navlink1"
              >
                Prescription Scanner
              </Link>
              <Link
                to="/ambulance-service"
                className="pharmacist-dashboard-navlink2"
              >
                Ambulance Service
              </Link>
              <span className="pharmacist-dashboard-text41">Health Store</span>
              <span className="pharmacist-dashboard-text42">
                Prescription Order
              </span>
              <span className="pharmacist-dashboard-text43">Home</span>
            </nav>
          </div>
          <div className="pharmacist-dashboard-container04">
            <Link
              to="/health-store-pharmacist"
              className="pharmacist-dashboard-navlink3 button"
            >
              Products
            </Link>
            <button
              type="button"
              className="pharmacist-dashboard-button button"
            >
              Analytics
            </button>
            <button
              type="button"
              className="pharmacist-dashboard-button1 button"
            >
              Customers
            </button>
            <Link to="/Order">
            <button
              type="button"
              className="pharmacist-dashboard-button2 button"
            >
              Orders
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pharmacist-dashboard-container05"></div>
      <div className="pharmacist-dashboard-container06">
        <div className="pharmacist-dashboard-container07">
          <footer className="pharmacist-dashboard-footer">
            <div className="pharmacist-dashboard-container08">
              <nav className="pharmacist-dashboard-nav1">
                <span className="pharmacist-dashboard-text44">About</span>
                <span className="pharmacist-dashboard-text45">Features</span>
                <span className="pharmacist-dashboard-text46">Pricing</span>
                <span className="pharmacist-dashboard-text47">Team</span>
                <span className="pharmacist-dashboard-text48">Blog</span>
              </nav>
            </div>
            <div className="pharmacist-dashboard-separator"></div>
            <div className="pharmacist-dashboard-container09">
              <span className="pharmacist-dashboard-text49">
                © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
              </span>
              <span className="pharmacist-dashboard-text50">
                Follow Our Social Media
              </span>
              <div className="pharmacist-dashboard-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="pharmacist-dashboard-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="pharmacist-dashboard-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="pharmacist-dashboard-icon4"
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

export default PharmacistDashboard
