import React from 'react'

function GreetingForm({title,setTitle, name, setName, greeting, setGreeting, color, setColor, handleImageSearch }) {
  return (
    <>
    <form>
      
      <label>
        Message Title:
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          />
      </label>
      <label>
        Message Content:
        <input 
          type="text" 
          value={greeting} 
          onChange={(e) => setGreeting(e.target.value)}
          />
      </label>

      <label>
      From:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      
      <label>
        Text Color:
        <input 
        className='textColorBox'
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
        />
      </label>
      
      <label>
        Search Image:
        <input 
          type="text" 
          onChange={handleImageSearch} 
        />
      </label>
    </form>
    </>
  )
}

export default GreetingForm;
