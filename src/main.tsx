import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StudentsProvider } from './stores/students.context.tsx'
import { Router } from './Router.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Error</div>}>
      <QueryClientProvider client={queryClient}>
        <StudentsProvider>
          <Router />
        </StudentsProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
)
