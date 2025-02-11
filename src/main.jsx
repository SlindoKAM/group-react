import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProfileForm from './ProfileForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileForm />
  </StrictMode>,
)
