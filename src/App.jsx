import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import RouteFocus from './components/RouteFocus.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import UrgentSupportPage from './pages/UrgentSupportPage.jsx'

function App() {
  return (
    <div className="min-h-screen bg-peach text-ink antialiased selection:bg-ink selection:text-cream">
      <a
        href="#main-content"
        className="sr-only rounded-full bg-ink px-5 py-3 font-semibold text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:outline-cream"
      >
        Skip to main content
      </a>

      <Header />
      <RouteFocus />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/urgent-support" element={<UrgentSupportPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
