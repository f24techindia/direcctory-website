import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { Companies } from './pages/Companies';
import { Talent } from './pages/Talent';
import { About } from './pages/About';
import { JoinDirectory } from './pages/JoinDirectory';

function App() {
  // Initialize theme system
  useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-stone-50 dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<JoinDirectory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;