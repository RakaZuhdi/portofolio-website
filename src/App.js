import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSimple from "./components/AboutSimple";
import UnderConstruction from './components/UnderConstruction';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ overflow: 'hidden' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/about" element={<AboutSimple />} />
            {/*<Route path="/projects" element={<Projects />} />*/}
            {/*<Route path="/projects/:id" element={<ProjectDetail />} />*/}
            {/*<Route path="/album" element={<Album />} />*/}
            {/*<Route path="/hobbies" element={<UnderConstruction />} />*/}
            <Route path="/contact" element={<UnderConstruction />} />
            <Route path="*" element={<UnderConstruction />} />
          </Routes>
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
