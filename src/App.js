import React from 'react';
import Banner from './Components/Banner.js';
import Footer from './Components/Footer.js';
import './App.css';
import Population from './Components/Population.js'



function App() {
  return (
    <div className="App">
      <Banner />
      <h1>NYC Demographics Dashboard</h1>
      
      <div className="visCard">
        <p>NYC Population by Year(in Millions)</p>
        <Population/>
        
      </div>
    
      <Footer />
    </div>
  );
}

export default App;
