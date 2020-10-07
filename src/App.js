import React from 'react';
import Nav from './components/nav/nav'
import Hero from './components/hero/hero';
import Feature from './components/feature/feature';
import Workflow from './components/workflow/workflow';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Feature/>
      <Workflow/>
      <Footer/>
    </div>
  );
}

export default App;
