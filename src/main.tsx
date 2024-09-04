import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import About from './pages/About.tsx';
import './index.css'

// local imports
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import CoreEnergetics from './pages/CoreEnergetics.tsx';
import Services from './pages/Services.tsx';
import Testimonials from './pages/Testimonials.tsx';
import Contact from './pages/Contact.tsx';
import Blog from './pages/Blog.tsx';
import PostPage from './pages/PostPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <div className="flex flex-col sm:mt-[110px]">
      <Router>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/core-energetics" element={<CoreEnergetics />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </React.StrictMode>,
)
