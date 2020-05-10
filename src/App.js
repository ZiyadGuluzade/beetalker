import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landingpage from './components/landingpage/Landingpage';
import Signup from './components/singin/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <Signup />
    </div>
  );
}

export default App;
