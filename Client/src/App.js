import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import { UserProvider } from './UserContext'; // Import the provider
import Profile from './Pages/Profile/Profile'; // Assuming you created Profile page
import Features from './Pages/Features/Features'; // Assuming you created Features page
import Landing from './Pages/Landing/InfoSection';
import StartMeeting from './Pages/ActivityPage/Interview/StartMeeting'; // Import the StartMeeting component
import JoinMeeting from './Pages/ActivityPage/Scedule/JoinMeeting';
import Schedule from './Pages/ActivityPage/Calender/Schedule';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/features" element={<Features />} /> 
          <Route path="/start-meeting" element={<StartMeeting />} /> 
          <Route path="/join-meeting" element={<JoinMeeting />} /> 
          <Route path="schedule-meeting" element={<Schedule />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
