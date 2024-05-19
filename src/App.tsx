import './App.css';
import Home from './home.jsx';
import Host from './host.jsx';
import Rent from './rent.jsx';
import Pricing from './pricing.jsx';
import Contact from './contact.jsx';
import Login from './login.jsx';
import Dashbaord from './dashboard.jsx';
// import Comingsoon from './comingsoon.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Comingsoon />} /> */}
        <Route path="/host" element={<Host />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashbaord />} />
      </Routes>
    </Router>
  )
}

export default App
