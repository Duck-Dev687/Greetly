import React from 'react';

const ShareButtons = ({ selectedImage, greeting, name }) => {
  const encodedGreeting = encodeURIComponent(`${greeting} - ${name}`);
  const imageUrl = encodeURIComponent(selectedImage);

  const shareUrls = {
    whatsapp: `https://wa.me/?text=${encodedGreeting} ${imageUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${imageUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedGreeting}&url=${imageUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${imageUrl}`,
  };

  return (
    <div className="share-buttons">
      <h3>Share Your Greeting Card</h3>
      <a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer">
        <button>Share on WhatsApp</button>
      </a>
      <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
        <button>Share on Facebook</button>
      </a>
      <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
        <button>Share on X (Twitter)</button>
      </a>
      <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer">
        <button>Share on LinkedIn</button>
      </a>
    </div>
  );
};

export default ShareButtons;
