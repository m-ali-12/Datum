import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Switch, Route} from 'react-router-dom';
import Products from './component/Products';
function App() {
  return (
    <div>
      <Navbar />
      
      <Home />
    </div>
  );
}
export default App;