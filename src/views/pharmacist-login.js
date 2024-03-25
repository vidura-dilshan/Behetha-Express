
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1413 from '../components/navigation-links1413'
import './pharmacist-login.css'
import React, { useState } from 'react'
import { auth, app } from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';

const PharmacistLogin = ({ history }) => {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const  signIn = async (e)=>{
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        alert(userCredential.user.email+" logged in successfully");
        history.push("/pharmacist-dashboard");
      } catch (error) {
        console.error(error);
        setErrorMessage("Incorrect email or password. Please try again.");
        alert("Incorrect email or password. Please try again.");
      }
}
  return (
    <div className="pharmacist-login-container">
      <Helmet>
        <title>Pharmacist-Login - exported project</title>
        <meta
          property="og:title"
          content="Pharmacist-Login - exported project"
        />
      </Helmet>
      <div className="pharmacist-login-container1">
        <NavigationLinks1413></NavigationLinks1413>
      </div>
      <div className="pharmacist-login-container2">
        <span className="pharmacist-login-text">
          <span>Forgot Password?</span>
        </span>
        <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="email"
          className="pharmacist-login-textinput input"
          value={email} onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="pharmacist-login-textinput1 input"
          value={password} onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          type="submit"
          value={"signIn"}
          className="pharmacist-login-navlink button"
        >
          Login
        </button>
        </form>
        <Link
          to="/pharmacist-create-account"
          className="pharmacist-login-navlink1 button"
        >
          Register
        </Link>
        <h1 className="pharmacist-login-text02">
          <span>TRUST IN US FOR ALL YOUR </span>
          <br></br>
          <span>HEALTH CARE NEEDS</span>
          <br></br>
        </h1>
        <Link to="/chatbot" className="pharmacist-login-navlink2">
          <img
            alt="Layer33014"
            src="/external/layer33014-c1jf.svg"
            className="pharmacist-login-layer3"
          />
        </Link>
        <div className="pharmacist-login-messagesent-component-layout-max">
          <div className="pharmacist-login-timestampcontainer"></div>
          <span>Hello What can I help You with?</span>
        </div>
        <img
          alt="Rectangle35239"
          src="/external/rectangle35239-4qug-500w.png"
          className="pharmacist-login-rectangle3"
        />
        <h1 className="pharmacist-login-text08">Pharmacist Login</h1>
        <Link to="/pharmacist-login" className="pharmacist-login-navlink3">
          <img
            alt="Rectangle142114"
            src="/external/rectangle142114-vzlm-200h.png"
            className="pharmacist-login-rectangle14"
          />
        </Link>
        <Link to="/" className="pharmacist-login-navlink4">
          <img
            alt="Rectangle132114"
            src="/external/rectangle132114-htck-200h.png"
            className="pharmacist-login-rectangle13"
          />
        </Link>
        <span className="pharmacist-login-text09">
          <span>Pharmacist</span>
        </span>
        <span className="pharmacist-login-text11">
          <span>USER</span>
        </span>
        <img
          alt="image"
          src="/untitled%20design%20(1)-1500w.jpg"
          className="pharmacist-login-image"
        />
      </div>
      <div className="pharmacist-login-container3">
        <div className="pharmacist-login-group28">
          <div className="pharmacist-login-frame4">
            <span className="pharmacist-login-text13">
              <span>OUR SERVICES</span>
            </span>
          </div>
          <div className="pharmacist-login-group27">
            <div className="pharmacist-login-frame1">
              <Link
                to="/pharmacist-dashboard"
                className="pharmacist-login-navlink5"
              >
                <img
                  alt="Layer16259"
                  src="/external/layer16259-83n7.svg"
                  className="pharmacist-login-layer1"
                />
              </Link>
              <Link
                to="/ambulance-service"
                className="pharmacist-login-navlink6"
              >
                <img
                  alt="Layer18425"
                  src="/external/layer18425-ib2.svg"
                  className="pharmacist-login-layer11"
                />
              </Link>
              <Link
                to="/health-store-pharmacist"
                className="pharmacist-login-navlink7"
              >
                <img
                  alt="Layer18328"
                  src="/external/layer18328-aq4.svg"
                  className="pharmacist-login-layer12"
                />
              </Link>
            </div>
            <div className="pharmacist-login-frame84">
              <span className="pharmacist-login-text15">
                <span>Medicine Delivery</span>
                <br></br>
                <span> Serv ices</span>
              </span>
              <span className="pharmacist-login-text19">
                <span>
                  Ambulance
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Services</span>
              </span>
              <span className="pharmacist-login-text23">Health Store</span>
            </div>
          </div>
        </div>
        <span className="pharmacist-login-text24">
          <span>
            Easily order Prescription and Non
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            prescription
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            Medicines,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Request Ambulance Services,</span>
          <br></br>
          <span>
            and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            read prescriptions effortlessly
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>with our AI-powered</span>
          <br></br>
          <span>platform , Your health, simplified!</span>
          <br></br>
          <br></br>
        </span>
        <img
          alt="pastedImage"
          src="/external/pastedimage-1lkg-500w.png"
          className="pharmacist-login-pasted-image"
        />
        <div className="pharmacist-login-messagesent-component-layout-max1">
          <div className="pharmacist-login-timestampcontainer1"></div>
        </div>
        <span className="pharmacist-login-text40">
          <span>. . . . .</span>
        </span>
        <div className="pharmacist-login-group24">
          <span className="pharmacist-login-text42">
            <span className="pharmacist-login-text43">Get an Extra </span>
            <span className="pharmacist-login-text44">50%</span>
            <span className="pharmacist-login-text45">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="pharmacist-login-text46">Off</span>
            <br className="pharmacist-login-text47"></br>
          </span>
        </div>
        <img
          alt="image63627"
          src="/external/image63627-2eow-200w.png"
          className="pharmacist-login-image6"
        />
        <div className="pharmacist-login-container4">
          <div className="pharmacist-login-tk">
            <div className="pharmacist-login-pagecontrol">
              <div className="pharmacist-login-dot">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-70jn-200h.png"
                  className="pharmacist-login-tickcarousel"
                />
              </div>
              <div className="pharmacist-login-dot1">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-b9x2-200h.png"
                  className="pharmacist-login-tickcarousel1"
                />
              </div>
              <div className="pharmacist-login-dot2">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-yb4-200h.png"
                  className="pharmacist-login-tickcarousel2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pharmacist-login-container5">
        <footer className="pharmacist-login-footer">
          <div className="pharmacist-login-container6">
            <nav className="pharmacist-login-nav">
              <span className="pharmacist-login-text48">About</span>
              <span className="pharmacist-login-text49">Features</span>
              <span className="pharmacist-login-text50">Pricing</span>
              <span className="pharmacist-login-text51">Team</span>
              <span className="pharmacist-login-text52">Blog</span>
            </nav>
          </div>
          <div className="pharmacist-login-separator"></div>
          <div className="pharmacist-login-container7">
            <span className="pharmacist-login-text53">
              © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
            </span>
            <span className="pharmacist-login-text54">
              Follow Our Social Media
            </span>
            <div className="pharmacist-login-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="pharmacist-login-icon"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="pharmacist-login-icon2"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="pharmacist-login-icon4"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
PharmacistLogin.propTypes = {
  history: PropTypes.object.isRequired,
};

export default PharmacistLogin
