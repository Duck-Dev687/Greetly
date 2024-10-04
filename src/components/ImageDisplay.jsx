import React from 'react';
import './ImageDisplay.css'; // Ensure you link this CSS file

const ImageDisplay = ({ imageList, handleImageSelect }) => {
  return (
    <div className="image-display">
      {imageList.length > 0 ? (
        imageList.map((image) => (
          <div
            className="image-card"
            key={image.id}
            onClick={() => handleImageSelect(image.urls.regular)} // Pass the selected image URL
          >
            <img
              src={image.urls.thumb} // Using the 'thumb' size for displaying in the gallery
              alt={image.alt_description || 'Unsplash Image'}
            />
          </div>
        ))
      ) : (
        <p className="noImg">No images found. Please try a different search.</p>
      )}
    </div>
  );
};

export default ImageDisplay;
