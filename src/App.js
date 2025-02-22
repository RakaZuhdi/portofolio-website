import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import AboutSimple from "./components/AboutSimple";
import Album from "./components/Album";
import UnderConstruction from './components/UnderConstruction';

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
            <Route path="/album" element={<Album />} />
            <Route path="/hobbies" element={<UnderConstruction />} />
            <Route path="/contact" element={<UnderConstruction />} />
            <Route path="*" element={<UnderConstruction />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
