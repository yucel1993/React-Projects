import { useRef, useEffect } from "react";

function App() {
  const video = useRef(null);
  const canvas = useRef(null);
  const openCam = () => {
   
      navigator.mediaDevices
        .getUserMedia({ video: { width: 1280, height: 720 } })
        .then((stream) => {
          video.current.srcObject = stream;
          video.current.play();

          const ctx = canvas.current.getContext("2d");
          const barcode = new window.BarcodeDetector({
            formats: ["codabar", "ean_13"]
          });

          setInterval(() => {
            canvas.current.width = video.current.videoWidth;
            canvas.current.heigth = video.current.videoHeigth;
            ctx.drawImage(
              video.current,
              0,
              0,
              video.current.videoWidth,
              video.current.videoHeigth
            );
            barcode.detect(canvas.current).then(([data]) => console.log(data))
          }, 100)
        })
        .catch((err) => console.log(err))
   
  }

  return (
    <>
      <button onClick={openCam}>Open the Camera</button>
      <div>
        <video ref={video} autoPlay muted  />
        <canvas ref={canvas} />
      </div>
    </>
  );
}

export default App;
