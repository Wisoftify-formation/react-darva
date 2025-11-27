import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StudentsProvider } from './stores/students.context.tsx'
import { Router } from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StudentsProvider>
      <Router />
    </StudentsProvider>
  </StrictMode>,
)
