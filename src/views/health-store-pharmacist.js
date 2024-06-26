import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './health-store-pharmacist.css'

const HealthStorePharmacist = (props) => {
  return (
    <div className="health-store-pharmacist-container">
      <Helmet>
        <title>Health-StorePharmacist - exported project</title>
        <meta
          property="og:title"
          content="Health-StorePharmacist - exported project"
        />
      </Helmet>
      <div className="health-store-pharmacist-container1">
        <h1 className="health-store-pharmacist-text">
          <span>Health Store</span>
          <br></br>
        </h1>
        <Link to="/chatbot" className="health-store-pharmacist-navlink">
          <img
            alt="Layer33014"
            src="/external/layer33014-c1jf.svg"
            className="health-store-pharmacist-layer3"
          />
        </Link>
        <div className="health-store-pharmacist-messagesent-component-layout-max">
          <div className="health-store-pharmacist-timestampcontainer"></div>
          <span>Hello What can I help You with?</span>
        </div>
        <img
          alt="image"
          src="/buvindu-1500w.jpg"
          className="health-store-pharmacist-image"
        />
        <div className="health-store-pharmacist-container2">
          <nav className="health-store-pharmacist-nav">
            <Link
              to="/pharmacist-login"
              className="health-store-pharmacist-navlink1"
            >
              Home
            </Link>
            <Link
              to="/health-store-pharmacist"
              className="health-store-pharmacist-navlink2"
            >
              Health Store
            </Link>
            <Link
              to="/pharmacist-dashboard"
              className="health-store-pharmacist-navlink3"
            >
              Prescription Order
            </Link>
            <Link
              to="/ambulance-service"
              className="health-store-pharmacist-navlink4"
            >
              Ambulance Service
            </Link>
            <Link
              to="/prescription-scanner"
              className="health-store-pharmacist-navlink5"
            >
              Prescription Scanner
            </Link>
          </nav>
        </div>
      </div>
      <div className="health-store-pharmacist-container3">
        <div className="health-store-pharmacist-group24">
          <span className="health-store-pharmacist-text04">
            <span className="health-store-pharmacist-text05">
              Get an Extra 
            </span>
            <span className="health-store-pharmacist-text06">50%</span>
            <span className="health-store-pharmacist-text07"> Off</span>
            <br className="health-store-pharmacist-text08"></br>
          </span>
        </div>
        <img
          alt="image63627"
          src="/external/image63627-2eow-200w.png"
          className="health-store-pharmacist-image6"
        />
        <div className="health-store-pharmacist-container4">
          <div className="health-store-pharmacist-tk">
            <div className="health-store-pharmacist-pagecontrol">
              <div className="health-store-pharmacist-dot">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-70jn-200h.png"
                  className="health-store-pharmacist-tickcarousel"
                />
              </div>
              <div className="health-store-pharmacist-dot1">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-b9x2-200h.png"
                  className="health-store-pharmacist-tickcarousel1"
                />
              </div>
              <div className="health-store-pharmacist-dot2">
                <img
                  alt="tickcarouselI362"
                  src="/external/tickcarouseli362-yb4-200h.png"
                  className="health-store-pharmacist-tickcarousel2"
                />
              </div>
            </div>
          </div>
          <div className="health-store-pharmacist-frame122">
            <div className="health-store-pharmacist-productcart">
              <div className="health-store-pharmacist-change-image"></div>
              <div className="health-store-pharmacist-frame48">
                <div className="health-store-pharmacist-frame121">
                  <span className="health-store-pharmacist-text09 LabelSmallRegular">
                    <span>Fish Oil Omega 3 Supplement</span>
                  </span>
                  <div className="health-store-pharmacist-frame61">
                    <span className="health-store-pharmacist-text11 BodySmallSemibold">
                      <span>Rs.75.00</span>
                    </span>
                  </div>
                  <div className="health-store-pharmacist-frame46">
                    <div className="health-store-pharmacist-badges">
                      <span className="health-store-pharmacist-text13 OverlineRegular">
                        <span>50%</span>
                      </span>
                    </div>
                    <span className="health-store-pharmacist-text15 OverlineStrike">
                      <span>Rs.150.00</span>
                    </span>
                  </div>
                </div>
                <div className="health-store-pharmacist-frame47"></div>
              </div>
            </div>
            <div className="health-store-pharmacist-productcart1">
              <div className="health-store-pharmacist-change-image1"></div>
              <div className="health-store-pharmacist-frame481">
                <div className="health-store-pharmacist-frame1211">
                  <span className="health-store-pharmacist-text17 LabelSmallRegular">
                    <span>Lansoprazole 30 mg (10 capsule)</span>
                  </span>
                  <div className="health-store-pharmacist-frame611">
                    <span className="health-store-pharmacist-text19 BodySmallSemibold">
                      <span>Rs.15.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="health-store-pharmacist-productcart2">
              <div className="health-store-pharmacist-change-image2"></div>
              <div className="health-store-pharmacist-frame482">
                <div className="health-store-pharmacist-frame1212">
                  <span className="health-store-pharmacist-text21 LabelSmallRegular">
                    <span>Ibuprofen 250mg</span>
                  </span>
                  <div className="health-store-pharmacist-frame612">
                    <span className="health-store-pharmacist-text23 BodySmallSemibold">
                      <span>Rs.12.00</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="health-store-pharmacist-productcart3">
              <div className="health-store-pharmacist-change-image3"></div>
              <div className="health-store-pharmacist-frame483">
                <div className="health-store-pharmacist-frame1213">
                  <span className="health-store-pharmacist-text25 LabelSmallRegular">
                    <span>Paracetamol 500mg</span>
                  </span>
                  <div className="health-store-pharmacist-frame613">
                    <span className="health-store-pharmacist-text27 BodySmallSemibold">
                      <span>Rs6.00</span>
                    </span>
                  </div>
                  <div className="health-store-pharmacist-frame461">
                    <div className="health-store-pharmacist-badges1">
                      <span className="health-store-pharmacist-text29 OverlineRegular">
                        <span>40%</span>
                      </span>
                    </div>
                    <span className="health-store-pharmacist-text31 OverlineStrike">
                      <span>Rs10.00</span>
                    </span>
                  </div>
                </div>
                <div className="health-store-pharmacist-frame471"></div>
              </div>
            </div>
          </div>
          <div className="health-store-pharmacist-card">
            <div className="health-store-pharmacist-card1">
              <div className="health-store-pharmacist-image1">
                <img
                  alt="ReplaceThis7069"
                  src="/external/replacethis7069-kvxd-500w.png"
                  className="health-store-pharmacist-replace-this"
                />
              </div>
              <span className="health-store-pharmacist-text33">
                <span>Tablets</span>
              </span>
              <div className="health-store-pharmacist-price">
                <span className="health-store-pharmacist-text35 Body1strikethrough">
                  <span>Rs.180.00</span>
                </span>
                <span className="health-store-pharmacist-text37 Body1">
                  <span>Rs.150.00</span>
                </span>
              </div>
            </div>
            <div className="health-store-pharmacist-card2">
              <div className="health-store-pharmacist-image2">
                <img
                  alt="ReplaceThis7069"
                  src="/external/replacethis7069-p25-500w.png"
                  className="health-store-pharmacist-replace-this1"
                />
              </div>
              <span className="health-store-pharmacist-text39">
                <span>Sanitizers</span>
              </span>
              <div className="health-store-pharmacist-price1">
                <span className="health-store-pharmacist-text41 Body1strikethrough">
                  <span>Rs.450.00</span>
                </span>
                <span className="health-store-pharmacist-text43 Body1">
                  <span>Rs.380.00</span>
                </span>
              </div>
            </div>
            <div className="health-store-pharmacist-card3">
              <div className="health-store-pharmacist-image3">
                <img
                  alt="ReplaceThis7069"
                  src="/external/replacethis7069-e3dh-500w.png"
                  className="health-store-pharmacist-replace-this2"
                />
              </div>
              <span className="health-store-pharmacist-text45">
                <span>Gloves Box</span>
              </span>
              <div className="health-store-pharmacist-price2">
                <span className="health-store-pharmacist-text47 Body1strikethrough">
                  <span>Rs.300.00</span>
                </span>
                <span className="health-store-pharmacist-text49 Body1">
                  <span>Rs.220.00</span>
                </span>
              </div>
            </div>
          </div>
          <div className="health-store-pharmacist-icon-box">
            <div className="health-store-pharmacist-icon-box1">
              <img
                alt="truck7069"
                src="/external/truck7069-z1ac.svg"
                className="health-store-pharmacist-truck"
              />
              <div className="health-store-pharmacist-title">
                <span className="health-store-pharmacist-text51">
                  <span>Free Shipping</span>
                </span>
                <span className="health-store-pharmacist-text53 Body2">
                  <span>Order Over Rs.600.00</span>
                </span>
              </div>
            </div>
            <div className="health-store-pharmacist-icon-box2">
              <img
                alt="creditcard7069"
                src="/external/creditcard7069-ldfl.svg"
                className="health-store-pharmacist-creditcard"
              />
              <div className="health-store-pharmacist-title1">
                <span className="health-store-pharmacist-text55">
                  <span>Quick Payment</span>
                </span>
                <span className="health-store-pharmacist-text57 Body2">
                  <span>100% Secure</span>
                </span>
              </div>
            </div>
            <div className="health-store-pharmacist-icon-box3">
              <img
                alt="gift7070"
                src="/external/gift7070-l7r8.svg"
                className="health-store-pharmacist-gift"
              />
              <div className="health-store-pharmacist-title2">
                <span className="health-store-pharmacist-text59">
                  <span>
                    Big Cashback
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="health-store-pharmacist-text61 Body2">
                  <span>Over 50% Cashback</span>
                </span>
              </div>
            </div>
            <div className="health-store-pharmacist-icon-box4">
              <img
                alt="users7070"
                src="/external/users7070-bf2e.svg"
                className="health-store-pharmacist-users"
              />
              <div className="health-store-pharmacist-title3">
                <span className="health-store-pharmacist-text63">
                  <span>24/7 Support</span>
                </span>
                <span className="health-store-pharmacist-text65 Body2">
                  <span>Ready for You</span>
                </span>
              </div>
            </div>
          </div>
          <div className="health-store-pharmacist-frame5">
            <span className="health-store-pharmacist-text67">
              <span>HOT DEALS</span>
            </span>
          </div>
          <Link to="/ShoppingCart">
          <img
            alt="Icon7075"
            src="/external/icon7075-zd85.svg"
            className="iicon"
          />
          <h3 className='ttxt'>Click Here <br></br>To Buy</h3>
          </Link>
        </div>
      </div>
      <div className="health-store-pharmacist-container5">
        <footer className="health-store-pharmacist-footer">
          <div className="health-store-pharmacist-container6">
            <nav className="health-store-pharmacist-nav1">
              <span className="health-store-pharmacist-text69">About</span>
              <span className="health-store-pharmacist-text70">Features</span>
              <span className="health-store-pharmacist-text71">Pricing</span>
              <span className="health-store-pharmacist-text72">Team</span>
              <span className="health-store-pharmacist-text73">Blog</span>
            </nav>
          </div>
          <div className="health-store-pharmacist-separator"></div>
          <div className="health-store-pharmacist-container7">
            <span className="health-store-pharmacist-text74">
              © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
            </span>
            <span className="health-store-pharmacist-text75">
              Follow Our Social Media
            </span>
            <div className="health-store-pharmacist-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="health-store-pharmacist-icon1"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="health-store-pharmacist-icon3"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="health-store-pharmacist-icon5"
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

export default HealthStorePharmacist
