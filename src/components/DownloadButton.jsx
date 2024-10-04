import html2canvas from 'html2canvas';

const DownloadButton = ({ cardRef, name }) => {
  const handleDownload = () => {
    const cardElement = document.getElementById('fullCard'); // Grab full card by ID

    html2canvas(cardElement, {
      useCORS: true,       // Allow cross-origin for images
      scale: window.devicePixelRatio, // Capture with the device's resolution
      logging: true,       // Logs for debugging
      backgroundColor: null // Ensure transparent background
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = `${name}-card.png`; // Name the file
      link.href = canvas.toDataURL('image/png'); // Generate PNG from canvas
      link.click(); // Trigger download
    });
  };

  return (
    <button onClick={handleDownload}>Download Card</button>
  );
};

export default DownloadButton;
