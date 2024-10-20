import React, { useState } from 'react';
import './JoinMeeting.css';

const JoinMeeting = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinMeeting = () => {
    if (!meetingCode) {
      setErrorMessage('Meeting code is required');
      return;
    }

    setIsJoining(true);
    setTimeout(() => {
      // Logic to join meeting based on meeting code
      window.location.href = `/meeting/${meetingCode}`;
      setIsJoining(false);
    }, 2000);
  };

  return (
    <div className="join-meeting-wrapper">
      <div className="join-meeting-box">
        <h2>Join a Meeting</h2>
        {/* <p>Enter your name.</p> */}
        <input
          type="text"
          placeholder="Enter Your Name"
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
          className="meeting-code-input"
        />
        {/* <p>Enter the meeting code shared by the host.</p> */}
        <input
          type="text"
          placeholder="Enter Meeting Code"
          value={meetingCode}
          onChange={(e) => setMeetingCode(e.target.value)}
          className="meeting-code-input"
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={handleJoinMeeting} className="join-meeting-btn" disabled={isJoining}>
          {isJoining ? 'Joining...' : 'Join Meeting'}
        </button>

        <p className="hint-text">
          Haven't got the code? Ask the host to share the link or code with you.
        </p>
      </div>
    </div>
  );
};

export default JoinMeeting;
