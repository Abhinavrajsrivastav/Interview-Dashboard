import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import Features from '../Features/Features';
import './Profile.css';
import { FcMenu } from 'react-icons/fc';

const Profile = () => {
  const { user, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [isContactVisible, setIsContactVisible] = useState(false); // State to control toggle

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setEmail(parsedUser.email);
    }
  }, [setUser]);

  // Toggle function for the contact list
  const toggleContactList = () => {
    setIsContactVisible((prev) => !prev);
  };

  // If no user is logged in
  if (!user) {
    return <h1>Please log in to view your profile</h1>;
  }

  return (
    <div className="profile-page">
      <Features />
      <div className="profile-container">
        
        {/* Toggle Button for Contact List */}
       <div className='Contacts-container'>
         <button className="toggle-btn" onClick={toggleContactList}>
          {isContactVisible ? 'Close Contact' : 'View Contact'}
        </button>

        {/* Contact List - Visible only when isContactVisible is true */}
        {isContactVisible && (
          <div className="contact-list">
            <h2>Contact List</h2>
            <ul>
              <li>John Doe - johndoe@example.com</li>
              <li>Jane Smith - janesmith@example.com</li>
              <li>Sam Wilson - samwilson@example.com</li>
            </ul>
          </div>
        )}
       </div>

        <div className="Profile-Components">
          {/* First Component Group */}
          <div className="Profile-Component-1">
            <div className="Profile-Component-11">
              <h3>Meeting Scheduler</h3>
              <p>Plan and schedule interviews seamlessly with calendar sync.</p>
            </div>
            <div className="Profile-Component-11">
              <h3>Real-time Video Calls</h3>
              <p>Start or join video interviews directly from your dashboard.</p>
            </div>
            <div className="Profile-Component-11">
              <h3>Feedback Management</h3>
              <p>Store interviewer feedback and generate reports.</p>
            </div>
          </div>

          {/* Second Component Group */}
          <div className="Profile-Component-2">
            <div className="Profile-Component-21">
              <h3>Analytics Dashboard</h3>
              <p>Track interview metrics and performance in real-time.</p>
            </div>
            <div className="Profile-Component-21">
              <h3>Candidate Pool</h3>
              <p>Access all candidate profiles and interview status.</p>
            </div>
            <div className="Profile-Component-21">
              <h3>Notifications & Alerts</h3>
              <p>Receive alerts for upcoming interviews and tasks.</p>
            </div>
            <div className="Profile-Component-21">
              <h3>Documentation Center</h3>
              <p>Store interview guidelines and document templates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
