import React, { useState } from 'react';
import './StartMeeting.css';

function StartMeeting() {
  const [isJoining, setIsJoining] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    meetingCode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => setIsJoining(!isJoining);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isJoining) {
      console.log('Joining Meeting:', formData);
    } else {
      console.log('Starting New Meeting:', formData);
    }
  };

  return (
    <div className='meeting'>
      <div className="meeting-container">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${isJoining ? 'active' : ''}`}
          onClick={() => setIsJoining(true)}
        >
          Join Meeting
        </button>
        <button
          className={`toggle-button ${!isJoining ? 'active' : ''}`}
          onClick={() => setIsJoining(false)}
        >
          Start New Meeting
        </button>
      </div>

      <form className="meeting-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {isJoining && (
          <input
            type="text"
            name="meetingCode"
            placeholder="Meeting Code"
            value={formData.meetingCode}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit" className="submit-button">
          {isJoining ? 'Join Meeting' : 'Start Meeting'}
        </button>
      </form>
    </div>
    </div>
  );
}

export default StartMeeting;
