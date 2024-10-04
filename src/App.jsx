import './App.css';
import { useState, useRef } from 'react';
import GreetingForm from './components/GreetingForm';
import ImageDisplay from './components/ImageDisplay';
import CardPreview from './components/CardPreview';
import ShareButtons from './components/ShareButtons';
import DownloadButton from './components/DownloadButton';

function App() {
  const cardRef = useRef();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [greeting, setGreeting] = useState('');
  const [color, setColor] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [imageList, setImageList] = useState([]);
  const MY_ACCESS_KEY = 'k-lbK8A2GWs03KQ2traXIqUJuf_8vC61YgCRke7N9Nk';

   // Function to handle image search
   const handleImageSearch = (e) => {
    const query = e.target.value.toLowerCase();
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${MY_ACCESS_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setImageList(data.results); // Update the image list with the search results
      })
      .catch((error) => {
        console.error('Error fetching the data: ', error);
      });
  };

  // Function to handle image selection
  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the selected image URL
  };
  
  return (
    <>
        <GreetingForm
    title={title}
    setTitle={setTitle}
          name={name}
          setName={setName}
          greeting={greeting}
          setGreeting={setGreeting}
          color={color}
          setColor={setColor}
          handleImageSearch={handleImageSearch}
        />
  <ImageDisplay imageList={imageList} handleImageSelect={handleImageSelect} />
  
  <CardPreview 
  ref={cardRef} // The reference for the card container
  title={title}
  greeting={greeting} 
  name={name} 
  color={color} 
  selectedImage={selectedImage} 
  className="card-preview"
/>
      <DownloadButton cardRef={cardRef} name={name} />

<ShareButtons selectedImage={selectedImage} greeting={greeting} name={name} />

    </>
  );
}
// 


export default App;
