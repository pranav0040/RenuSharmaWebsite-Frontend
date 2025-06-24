import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopHeader from './components/TopHeader';
import Home from './pages/Home';
import Internships from './pages/Internships';
import './index.css'; 
import Login from './pages/Login';
import Signuppage from './pages/Singuppage';
import Events from './pages/Events';



function App() {
  return (
    <Router>
      <TopHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/events" element={<Events />} />
      
        {/* <Route path="/signup" element={<Signuppage />} /> */}
       
      
      </Routes>
    </Router>
  );
}

export default App;
