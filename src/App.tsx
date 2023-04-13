import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details />}/>
      </Routes>
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
