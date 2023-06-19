import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TaskManager from './components/pages/TaskManager';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/taskmanager' element={<TaskManager />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
