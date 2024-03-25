
import { Helmet } from 'react-helmet'

import NavigationLinks14 from '../components/navigation-links14'
import './prescription-scanner.css'
import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';

const PrescriptionScanner = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrText, setOcrText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tesseractWorker, setTesseractWorker] = useState(null);
 
  useEffect(() => {
    function handleBeforeUnload(event) {
      event.preventDefault();
      event.returnValue = '';
    }
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
    
    const initTesseract = async () => {


      const worker = Tesseract.createWorker({
        lang: 'eng', // Change to include cursive script
      });

      try {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        setTesseractWorker(worker);
      } catch (err) {
        console.error('Tesseract initialization error:', err);
        setError('Failed to initialize Tesseract');
      }
    };

    initTesseract();

    return () => {
      if (tesseractWorker) {
        tesseractWorker.terminate();
      }
    };
  }, []);
 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setOcrText(''); // Clear previous OCR text
    setError(null); // Clear previous error
  };

  const handleOcr = async () => {
    if (!selectedImage) {
      setError('Please select an image to perform OCR');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data: { text } } = await Tesseract.recognize(selectedImage, 'eng');
      setOcrText(text);
    } catch (err) {
      console.error('OCR error:', err);
      setError('OCR processing failed');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="prescription-scanner-container">
      <Helmet>
        <title>Prescription-scanner - exported project</title>
        <meta
          property="og:title"
          content="Prescription-scanner - exported project"
        />
      </Helmet>
      <div className="prescription-scanner-container1">
        <div className="prescription-scanner-container2">
          <div className="prescription-scanner-group">
            <img
              alt="Vector2828"
              src="/external/vector2828-737o.svg"
              className="prescription-scanner-vector"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-ykto.svg"
              className="prescription-scanner-vector01"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-zdikj.svg"
              className="prescription-scanner-vector02"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-1mp.svg"
              className="prescription-scanner-vector03"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-88.svg"
              className="prescription-scanner-vector04"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-xup.svg"
              className="prescription-scanner-vector05"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-9rg.svg"
              className="prescription-scanner-vector06"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-6he.svg"
              className="prescription-scanner-vector07"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-tvz9.svg"
              className="prescription-scanner-vector08"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-yjzd.svg"
              className="prescription-scanner-vector09"
            />
            <img
              alt="Vector2828"
              src="/external/vector2828-f5v.svg"
              className="prescription-scanner-vector10"
            />
          </div>
        </div>
        <div className="prescription-scanner-container3">
          <NavigationLinks14 rootClassName="rootClassName8"></NavigationLinks14>
        </div>
        <img
          alt="image"
          src="/scanner1-1500w.jpg"
          className="prescription-scanner-image"
        />
        <h1 className="prescription-scanner-text">
          <span>TRUST IN US FOR ALL YOUR </span>
          <br></br>
          <span>HEALTH CARE NEEDS</span>
          <br></br>
        </h1>
      </div>
      <input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} htmlFor="fileInput" className="prescription-scanner-button button" />
      
      <img
        alt="Rectangle32307"
        src="/external/rectangle32307-7l7r-600w.png"
        className="prescription-scanner-rectangle3"
      />
      <div className="prescription-scanner-container9">
      {selectedImage && (
        <div className="image-preview">
          <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
        </div>
      )}
      </div>
      <button button onClick={handleOcr} disabled={isLoading} className="prescription-scanner-button1 button">
      {isLoading ? 'Extracting Text...' : 'Extract Text from Image'}
      </button>
      <div className="prescription-scanner-container10">
      {ocrText && (
        <div>
          <p>Extracted Text:</p>
          {ocrText.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
      </div>
      <div className="prescription-scanner-container4">
        <div className="prescription-scanner-group232">
          <div className="prescription-scanner-group229">
            <div className="prescription-scanner-group226">
              <div className="prescription-scanner-group27">
                <img
                  alt="Ellipse22828"
                  src="/external/ellipse22828-zmef-200h.png"
                  className="prescription-scanner-ellipse2"
                />
                <span className="prescription-scanner-text05">1</span>
              </div>
            </div>
            <span className="prescription-scanner-text06">
              <span>Step</span>
            </span>
          </div>
          <div className="prescription-scanner-group230">
            <div className="prescription-scanner-group227">
              <div className="prescription-scanner-group225">
                <img
                  alt="Ellipse22828"
                  src="/external/ellipse22828-1x8m-200w.png"
                  className="prescription-scanner-ellipse21"
                />
                <span className="prescription-scanner-text08">2</span>
              </div>
            </div>
            <span className="prescription-scanner-text09">
              <span>Step</span>
            </span>
          </div>
        </div>
        <h1 className="prescription-scanner-text11">
          Upload Your Prescription PDF
        </h1>
        <h1 className="prescription-scanner-text12">
          Guide to Prescription Scanner
        </h1>
        <h1 className="prescription-scanner-text13">
          Click on Show Medicines Button
        </h1>
      </div>
      <div className="prescription-scanner-container5">
        <div className="prescription-scanner-container6">
          <footer className="prescription-scanner-footer">
            <div className="prescription-scanner-container7">
              <nav className="prescription-scanner-nav">
                <span className="prescription-scanner-text14">About</span>
                <span className="prescription-scanner-text15">Features</span>
                <span className="prescription-scanner-text16">Pricing</span>
                <span className="prescription-scanner-text17">Team</span>
                <span className="prescription-scanner-text18">Blog</span>
              </nav>
            </div>
            <div className="prescription-scanner-separator"></div>
            <div className="prescription-scanner-container8">
              <span className="prescription-scanner-text19">
                © 2024 Behetha-Express| Design by Cs-29| All Rights Reserved.
              </span>
              <span className="prescription-scanner-text20">
                Follow Our Social Media
              </span>
              <div className="prescription-scanner-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="prescription-scanner-icon"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="prescription-scanner-icon2"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="prescription-scanner-icon4"
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

export default PrescriptionScanner
