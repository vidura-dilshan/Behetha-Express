
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks14 from '../components/navigation-links14'
import './prescription-order.css'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function PrescriptionOrder () {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload === null) return;
    const imageName = imageUpload.name + v4();
    const imageRef = ref(storage, `images/${imageName}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className="prescription-order-container">
      <Helmet>
        <title>Prescription-Order - exported project</title>
        <meta
          property="og:title"
          content="Prescription-Order - exported project"
        />
      </Helmet>
      <div className="prescription-order-container1">
        <Link to="/chatbot" className="prescription-order-navlink">
          <img
            alt="Layer33014"
            src="/external/layer33014-c1jf.svg"
            className="prescription-order-layer3"
          />
        </Link>
        <div className="prescription-order-messagesent-component-layout-max">
          <div className="prescription-order-timestampcontainer"></div>
          <span>Hello What can I help You with?</span>
        </div>
        <img
          alt="image"
          src="/h2-1500w.jpg"
          className="prescription-order-image"
        />
        <input
        type="file" accept="image/*"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
       className="prescription-order-button button"/>
        <button type="button" className="prescription-order-button1 button">
          Select pharmacy
        </button>
        <Link to="/payment">
        <button type="button" onClick={uploadFile} className="prescription-order-button2 button">
          Send Request
        </button>
        </Link>
        <div className='upoloaded-image'>
        {imageUpload && (
        <div className="image-preview">
          <img src={URL.createObjectURL(imageUpload)} alt="Selected Image" />
        </div>
      )}
        </div>
        <h1 className="prescription-order-text01">
          <span>TRUST IN US FOR ALL YOUR </span>
          <br></br>
          <span>HEALTH CARE NEEDS</span>
          <br></br>
        </h1>
        <div className="prescription-order-container2">
          <NavigationLinks14 rootClassName="rootClassName16"></NavigationLinks14>
        </div>
      </div>
      <h1 className="prescription-order-text06">Find The Nearest Pharmacy</h1>
      <img
        alt="Rectangle32307"
        src="/external/rectangle32307-7l7r-600w.png"
        className="prescription-order-rectangle3"
      />
      <div className="prescription-order-frame2">
        <img
          alt="Vector2309"
          src="/external/vector2309-qm.svg"
          className="prescription-order-vector"
        />
        <span className="prescription-order-text07">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div className="prescription-order-container3"></div>
      <div className="prescription-order-container4">
        <div className="prescription-order-container5">
          <footer className="prescription-order-footer">
            <div className="prescription-order-container6">
              <nav className="prescription-order-nav">
                <span className="prescription-order-text09">About</span>
                <span className="prescription-order-text10">Features</span>
                <span className="prescription-order-text11">Pricing</span>
                <span className="prescription-order-text12">Team</span>
                <span className="prescription-order-text13">Blog</span>
              </nav>
            </div>
            <div className="prescription-order-separator"></div>
            <div className="prescription-order-container7">
              <span className="prescription-order-text14">
                © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
              </span>
              <span className="prescription-order-text15">
                Follow Our Social Media
              </span>
              <div className="prescription-order-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="prescription-order-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="prescription-order-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="prescription-order-icon4"
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

export default PrescriptionOrder
