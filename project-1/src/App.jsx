import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

function App() {
  const webref = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const captureImage = useCallback(() => {
    const imageSrc = webref.current.getScreenshot();
    setImageSrc(imageSrc); // Update the state with the captured image source
  }, []);

  return (
    <div className="container">
    
      <Webcam ref={webref} />
      <br />
      <button onClick={captureImage}>Get image</button>
      <br/>
      <div className="img">
        {imageSrc && <img src={imageSrc} alt="Captured Image" />}
      </div>
    </div>
  );
}

export default App;


