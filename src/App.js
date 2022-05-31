import React from 'react';
import './App.css';
import './colors.css'
import About from './components/Contents/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Project/>
    <Skills/>
    <Footer/>
    </div>
  );
}

export default App;
