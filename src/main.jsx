import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { redirectLegacyHash } from './router/hashRedirect'

// Canonical domain: molekulax.hu is live, so bounce the production Vercel alias
// to it (preserving path + search + hash). Only the exact production subdomain –
// preview deployments (longer *.vercel.app subdomains) keep working.
if (typeof window !== 'undefined' && window.location.hostname === 'molekulax.vercel.app') {
  window.location.replace('https://molekulax.hu' + window.location.pathname + window.location.search + window.location.hash)
}

// Translate any legacy #entry/... or #library link to its new path BEFORE React
// mounts, so deep-linked/shared hash URLs land on the correct path route.
redirectLegacyHash()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
