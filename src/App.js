import React from 'react'
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main name='pepe'/>
     <Main name = 'papo'/>
     <Main name = 'pupo'/>
     <Main/>
     <Main/>
     <Main/>
     <Main/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
