import Initiatives from "./Initiatives";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './HomePage'; // Adjust the path as needed
import MeetTheTeam from './MeetTheTeam'; // Adjust the path as needed
import AboutUs from './AboutUs'; // Adjust the path as needed

function mes() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/MeetTheTeam" element={<MeetTheTeam />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Initiatives" element={<Initiatives/>}></Route>
            <Route path="/mes" element={<mes />}></Route>
            
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default mes;
  
