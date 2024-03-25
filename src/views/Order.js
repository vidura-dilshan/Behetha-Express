
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import './Order.css'
const Order = () => {
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

  const retrieveDataFromFirebase = () => {
    setImageUrls([]); // Clear existing URLs before fetching new ones
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  };

  useEffect(() => {
    retrieveDataFromFirebase(); // Fetch data on initial render
  }, []);
  return (
    <div className="order-container">
    <div className="order">
    <button
    onClick={retrieveDataFromFirebase}
    type="button"
    className="order-button"
  >
    Orders
  </button>
    {imageUrls.map((url, index) => {
        return <img key={index} src={url} alt={`image_${index}`} />;
      })}
      </div>
      </div>
  )
}

export default Order