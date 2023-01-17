import React from 'react';
import './App.css';
import {Header} from './layout/Header.jsx';
import {Footer} from './layout/Footer.jsx'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header/>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
