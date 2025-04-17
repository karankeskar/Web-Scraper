import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import ModalWindow from './components/ModalWindow.js'

function App() {
  return (
    <div className="Parent">
      <Navbar />
      <Home />
      <ModalWindow />
    </div>
  );
}

export default App;
