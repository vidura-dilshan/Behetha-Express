import React from 'react';
import './Shoppincart.css'; // Import your CSS file here
import NavigationLinks1411 from '../components/navigation-links1411'






function Shppingcartinterface() {
    function TransferDataToCheckout() {
          var username = document.getElementById('name').value;
          var contactway = document.getElementById('email-or-con').value;
          var confirmed = confirm(
            'Name - ' +
              username +
              '\nContact detail - ' +
              contactway +
              '\nYour total price is Rs. ' +
            //   finalTotal +
              '.\nDo you want to proceed the payment?'
          );
          if (confirmed) {
            window.location.href =
              '/payment?finalTotal=' +
            //   finalTotal +
              '&username=' +
              username +
              '&contactway=' +
              contactway;
          }
        }
  return (
    <>
    <div className="body1">
      {/* <nav>
        <a href="Vidura_MainPage.html"><img src="images/Our_logo.jpg" alt="logo" id="logo" /></a>
        <a className="nav-item" href="Vidura_MainPage.html">Home</a>
        <a className="nav-item" href="Vidura_FeedbackPage.html">Comments</a>
        <a className="nav-item active" href="Kaviru_mainPage.html">Products</a>
        <a className="nav-item" href="Quiz.html">Quiz</a>
        <a className="nav-item" href="Senuja_Sitemap.html">Site map</a>
        <a className="nav-item" href="Senuja_Gallery.html">Gallery</a>
        <a className="nav-item" href="Chavidu_studentdetails.html">About Us</a>
      </nav> */}
      {/* <div id="header"> */}
        {/* Your commented out search bar */}
      {/* </div>
      <div className="main">
        <table>
          <tr>
            <td><h1 id="intro_text">Things get better,<br />With Sports.<br /><br />Let’s Buy!<br />Let’s Play!</h1></td>
            <td>
              <img src="buvindu-1500w.jpg" id="cricket_man" alt="cricket_man" />
              <img src="untitled design (1)-1500w.jpg" id="hocky_man" alt="hocky_man" />
              <img src="chess.jpeg" id="basketball_man" alt="basketball_man" />
              <img src="hockey_man.png" id="chess" alt="chess" />
            </td>
          </tr>
        </table>
      </div> */}
      <div className="health-store-pharmacist-container1">
        <h1 className="health-store-pharmacist-text">
          <span>Health Store</span>
          <br></br>
        </h1>
        <img
          alt="Layer33014"
          src="/external/layer33014-c1jf.svg"
          className="health-store-pharmacist-layer3"
        />
        <div className="health-store-pharmacist-messagesent-component-layout-max">
          <div className="health-store-pharmacist-timestampcontainer"></div>
          <span>Hello What can I help You with?</span>
        </div>
        <img
          src="/untitled design-1500w.jpg"
          alt="image"
          className="health-store-pharmacist-image"
        />
      </div>
      
      
      
      <div className="store">
        {/* Your product content here */}
        <div className="content">
                    <img src="/external/tq_bz_6-tgjjc-icia-200h-200h.png" id="bat" className="product_img" />
                    <h3 className="product-title">Paracetamol</h3>
                    <p>Sell by Varuna Pharmacy / exp-2024.3.2/500mg</p>
                    <h6 className="product_price">Rs. 150</h6>
                    <button className="buy_btn">Buy Now</button>
                </div>
                <div className="content">
                    <img src="/external/tq_y2eio3sx74-buym-200h-200h.png" id="bat" className="product_img" />
                    <h3 className="product-title">Priton</h3>
                    <p>Sell by Varuna Pharmacy / exp-2024.5.2/50mg</p>
                    <h6 className="product_price">Rs. 250</h6>
                    <button className="buy_btn">Buy Now</button>
                </div>
                <div className="content">
                    <img src="/external/replacethis7069-e3dh-500w.png" id="bat" className="product_img" />
                    <h3 className="product-title">Gloves</h3>
                    <p>Sell by Varuna Pharmacy / exp-2024.3.21/50ml</p>
                    <h6 className="product_price">Rs. 500</h6>
                    <button className="buy_btn">Buy Now</button>
                </div>
                <div className="content">
                    <img src="/external/replacethis7069-p25-500w.png" id="bat" className="product_img" />
                    <h3 className="product-title">Sanitizers</h3>
                    <p>Sell by Varuna Pharmacy / exp-2029.03.12</p>
                    <h6 className="product_price">Rs. 585</h6>
                    <button className="buy_btn">Buy Now</button>
                </div>
                <div className="content">
                    <img src="/external/replacethis7069-kvxd-500w.png" id="bat" className="product_img" />
                    <h3 className="product-title">Lansoprazole</h3>
                    <p>Sell by Varuna Pharmacy / exp-2024.3.2/500mg</p>
                    <h6 className="product_price">Rs. 850</h6>
                    <button className="buy_btn">Buy Now</button>
                </div>
                <div className="content">
                    <img src="/external/tq_wv1b8dlulc-lprs-200h-200h.png" id="bat" className="product_img" />
                    <h3 className="product-title">Amoxycillin</h3>
                    <p>Sell by Varuna Pharmacy / exp-2024.5.2/500mg</p>
                    <h6 className="product_price">Rs. 580</h6>
                    <button className="buy_btn">Buy Now</button>
                </div>
      </div>
      <div className="cart">
        <h2 className="cart_title">Your Cart</h2>
        <div className="cart_content">
          {/* Your cart content here */}
        </div>
        <div className="total">
          <div className="total_title">Total&#160;</div>
          <div className="total_price">Rs. 0</div>
        </div><br />
        <form className="person-details">
          <label htmlFor="name">Enter your name:</label>
          <input type="text" autoComplete="off" id="name" name="name" />
          <label htmlFor="email-or-con">Enter your email or contact no :</label>
          <input type="text" autoComplete="off" id="email-or-con" name="email_or_contact" />
        </form>
        <button type="button" className="btn-buy" onClick={TransferDataToCheckout} >Checkout</button>
        <i className="fa fa-close" id="close-cart"></i>
      </div>
      <button id="cart-icon"><img src="/cart1.webp" alt="shopping_bag" /></button>
      <script src="Kaviru_mainPage.js"></script>
      <div className="user-create-account-container5">
        <footer className="user-create-account-footer">
          <div className="user-create-account-container6">
            <nav className="user-create-account-nav">
              <span className="user-create-account-text76">About</span>
              <span className="user-create-account-text77">Features</span>
              <span className="user-create-account-text78">Pricing</span>
              <span className="user-create-account-text79">Team</span>
              <span className="user-create-account-text80">Blog</span>
            </nav>
          </div>
          <div className="user-create-account-separator"></div>
          <div className="user-create-account-container7">
            <span className="user-create-account-text81">
              © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
            </span>
            <span className="user-create-account-text82">
              Follow Our Social Media
            </span>
            <div className="user-create-account-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="user-create-account-icon"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="user-create-account-icon2"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="user-create-account-icon4"
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

export default Shppingcartinterface;
