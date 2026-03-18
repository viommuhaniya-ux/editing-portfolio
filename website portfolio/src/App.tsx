import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
        
        <div className="noise-overlay" />
        
        {!showIntro && (
          <>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
