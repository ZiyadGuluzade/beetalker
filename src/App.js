import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landingpage from './components/landingpage/Landingpage';
import Signup from './components/singin/Signup';
import MainPage from './components/main/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage />
      <Signup />
    </div>
  );
}

export default App;
