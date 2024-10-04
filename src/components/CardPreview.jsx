import React, { forwardRef } from 'react';

const CardPreview = forwardRef(({ name, title, greeting, color, selectedImage }, ref) => {
  return (
    <div id='fullCard'>
          <div  
      ref={ref} // This ensures the ref is attached to the main div
      className="card-preview"
      style={{
        backgroundImage: `url(${selectedImage})`, // Set background image
        backgroundSize: 'cover', // Ensure the image covers the card
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent tiling
        backgroundColor: color, // Add background color if no image is selected
      }}
    >
      <div className="card-content" style={{ color: `${color}` }}>
        <h2 className="title">{title}</h2>
        <h3 className="greeting">{greeting}</h3>
        <p className="name">-{name}</p>
      </div>
    </div>
    </div>
  );
});

export default CardPreview;
