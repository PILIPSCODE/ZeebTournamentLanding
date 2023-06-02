import { useEffect } from 'react';
import html2canvas from 'html2canvas';

const CaptureScreenshot = () => {
  const captureScreenshot = () => {
    // Capture the full page screenshot
    html2canvas(document.documentElement, {
      scrollX: 0,
      scrollY: -window.scrollY,
      width: window.innerWidth,
      height: window.innerHeight + window.scrollY,
    }).then(canvas => {
      // Convert the canvas to an image
      const screenshot = canvas.toDataURL('image/png');

      // Create a temporary link element to download the screenshot
      const link = document.createElement('a');
      link.href = screenshot;
      link.download = 'screenshot.png';

      // Trigger the download
      link.click();
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='text-white'>
      <h1>Website</h1>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
    </div>
  );
};

export default CaptureScreenshot;