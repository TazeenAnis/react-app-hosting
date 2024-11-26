import { useState } from 'react';
import './App.css';
import About from './components/About';
import FormUtils from './components/FormUtils';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <Router>
      <Navbar title="ReactApp" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path='/' element={<FormUtils heading="Form Elements" mode={mode} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
