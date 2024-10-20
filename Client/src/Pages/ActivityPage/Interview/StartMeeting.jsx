import React, { useState } from 'react';
import './StartMeeting.css';

const StartMeeting = () => {
  const [meetingLink, setMeetingLink] = useState(null);
  const [meetingCode, setMeetingCode] = useState(null);
  const [loading, setLoading] = useState(false);

  const startMeeting = async () => {
    setLoading(true);
    const response = await fetch('/api/meeting/start', { method: 'POST' });
    const data = await response.json();
    setMeetingLink(data.meetingLink);
    setMeetingCode(data.meetingCode);
    setLoading(false);
  };

  return (
    <div className="start-meeting-wrapper">
      <div className="start-meeting-box">
        <h2>Start Your Meeting</h2>
        <p>Click below to generate a meeting link and share with participants.</p>
        <button onClick={startMeeting} className="start-meeting-btn" disabled={loading}>
          {loading ? 'Starting...' : 'Start a Meeting'}
        </button>

        {meetingLink && (
          <div className="meeting-info">
            <p className="info-title">Meeting Details:</p>
            <p>Link: <a href={meetingLink}>{meetingLink}</a></p>
            <p>Code: <strong>{meetingCode}</strong></p>
            <p>Share this code or link with others to join.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartMeeting;
