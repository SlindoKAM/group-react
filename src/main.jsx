import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css';
import React from 'react';
import ProfileCreation from './ProfileForm.jsx';

//Need it for HTML to read it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileCreation />
  </StrictMode>,
)

// changed here
function App()
{
  return(
    <div className='app'>
      <ProfileCreation />
    </div>
  )
};

export default App;