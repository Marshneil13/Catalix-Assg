import './App.css';
import Activities from './components/activities/Activities';
import Analytics from './components/analytics/Analytics';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Transformation from './components/transformation/Transformation';
import Library from './components/library/Library';
import Settings from './components/Settings';
import Logout from './components/Logout';


function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <div className='nav-div'>
      <Navbar/>
      </div>
    <div className='content-div'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/activities" element={<Activities />} />
    <Route path="/analytics" element={<Analytics />} />
    <Route path="/transformation" element={<Transformation />} />
    <Route path="/library" element={<Library />} />
    <Route path="/settings" element={<Settings/>} />
    <Route path="/logout" element={<Logout />} />
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
