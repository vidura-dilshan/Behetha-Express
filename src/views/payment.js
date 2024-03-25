import React, { useState } from 'react';
import './payment.css';
import NavigationLinks1411 from '../components/navigation-links1411'

const Payment = () => {
  return (
    <>
    
    <div className="body">
    <div className="summery">
      <div className="container">
        <h1 className="details">Online Payment Gateway </h1>
      </div>
    </div>
    <br />
    <div className="billing-details">
      <div className="container">
        <form>
          <div className="card-details">
            <h3>Payment</h3><br />
            <label htmlFor="ccnum">Credit card number<span className="required">*</span></label>
            <input type="text" autoComplete="off" id="ccnum" name="cardnumber" placeholder="XXXX-XXXX-XXXX-XXXX" maxLength="16" minLength="15" pattern="[0-9]{16}" className='tic' />
            <span id="ccnum-error"></span><br /><br />
            <label htmlFor="cname">Name on Card<span className="required">*</span></label>
            <input type="text" autoComplete="off" id="cname" name="cardname" placeholder="Type your name here" className='tic' />
            <br /><br />
            <label htmlFor="expmonth">Expiry date : <span className="required">*</span></label><br />
            <input type="number" id="expmonth" name="expmonth" maxLength="2" max="12" min="1" placeholder="MM"  className='tic' /> / 
            <input type="number" id="expyear" name="expyear" maxLength="4" max="9999" min="2000" placeholder="YY" className='tic'  />
            <br /><br />
            <label htmlFor="cvv">Security code : <span className="required">*</span></label>
            <input type="text" autoComplete="off" id="cvv" name="cvv" placeholder="123" maxLength="3" pattern="[0-9]{3}" className='tic'  />
            <br />
          </div>

          <div className="card-details">
            <h3>Billing Details</h3>
            <br />
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address 1<span className="required">*</span></label>
            <input type="text" autoComplete="off" id="adr" name="adr" placeholder="76. Gall road colombo" className='tic' />
            <br /><br />
            <label htmlFor="adr2">Address 2</label>
            <input type="text" autoComplete="off" id="adr2" name="adr2" className='tic' />
            <br /><br />
            <label htmlFor="adr3">Address 3</label>
            <input type="text" autoComplete="off" id="adr3" name="adr3" className='tic' />
            <br /><br />
            <label htmlFor="city"><i className="fa fa-institution"></i>Town / City<span className="required">*</span></label>
            <input type="text" autoComplete="off" id="city" name="city" placeholder="Colombo" className='tic'  />
            <br /><br />
            <label htmlFor="state">State/Region:</label>
            <input type="text" autoComplete="off" id="state" name="state" placeholder="Western / Colombo" className='tic'  />
            <br /><br />
            <label htmlFor="zip">Postalcode / Zip code<span className="required">*</span></label>
            <input type="text" autoComplete="off" id="zip" name="zip" placeholder="1010"  className='tic' />
            <br /><br />
            <label htmlFor="country">Country<span className="required">*</span></label>
            <select id="country" name="country" required >
              <option value="srilanka">Sri Lanka</option>
              <option value="uk">United Kingdom</option>
              <option value="usa">USA</option>
            </select> <br /><br />

            <button type="button" value="Confirm" className="btn10" >Confirm</button>
          </div>

          <div className="card-details">
            <h3>Customer Contact Details</h3>
            <br />
            <label htmlFor="phone">Phone number</label>
            <input type="tel" autoComplete="off" id="phone" name="phone" placeholder="(071)xx xxxxxx" maxLength="10" minLength="10" pattern="[0-9]{10}" className='tic' />
            <br /><br />
            <label htmlFor="email">Email address</label>
            <input type="email" autoComplete="off" id="email" name="email" placeholder="you@example.com" className='tic' /><br /><br />
            <button type="button" value="Confirm" className="btn10" >Confirm</button>
          </div>

          <br />
          <h1>Total Amount to pay Rs. <span id="finalTotal">{/* Calculate and display total amount here */}</span></h1>
          <button type="button" className="gotorecipt"  >Continue to checkout</button>
        </form>
      </div>
    </div>
    {/* Footer */}
    {/* <div className="footer">
      <div id="footerRow2">
        <div className="footerpageEditbtn">
          <a href="Kaviru_pageEditor.html">Page Editor</a>
        </div>
        <div className="rightcornbtn">
          <div className="view">
              <a href="#scrollimg">Go Top</a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="user-login-container5">
        <footer className="user-login-footer">
          <div className="user-login-container6">
            <nav className="user-login-nav">
              <span className="user-login-text47">About</span>
              <span className="user-login-text48">Features</span>
              <span className="user-login-text49">Pricing</span>
              <span className="user-login-text50">Team</span>
              <span className="user-login-text51">Blog</span>
            </nav>
          </div>
          <div className="user-login-separator"></div>
          <div className="user-login-container7">
            <span className="user-login-text52">
              © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
            </span>
            <span className="user-login-text53">Follow Our Social Media</span>
            <div className="user-login-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="user-login-icon"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="user-login-icon2"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="user-login-icon4"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}

export default Payment;
