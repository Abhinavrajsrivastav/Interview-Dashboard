import React, { useState } from 'react';
import { 
  FcVideoCall, FcPlanner, FcComments, FcAbout, FcCollaboration, FcContacts, FcSettings, FcFile, FcTodoList, FcPhoneAndroid, 
  FcUpload
} from 'react-icons/fc';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: <FcVideoCall className="feature-icon" />,
      description: 'Start a meeting'
    },
    {
      icon: <FcCollaboration  className='feature-icon' />,
      description: 'Join a meeting'
    },
    {
      icon: <FcPlanner className="feature-icon" />,
      description: 'Schedule an Interview'
    },
    {
      icon: <FcContacts className="feature-icon" />,
      description: 'Add Contacts'
    },
    {
      icon: <FcAbout className="feature-icon" />,
      description: 'View Chat History'
    },
    {
      icon: <FcSettings className="feature-icon" />,
      description: 'Settings'
    },
    {
      icon: <FcUpload className="feature-icon" />,
      description: 'Upload Documents'
    },
    {
      icon: <FcTodoList className="feature-icon" />,
      description: 'View Interview Agenda'
    },
    {
      icon: <FcPhoneAndroid className="feature-icon" />,
      description: 'Start a Mobile Call'
    },
  ];

  return (
    <div className="features-container">
      <ul className="features-list">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`feature-item ${activeFeature === index ? 'active' : ''}`}
            onClick={() => setActiveFeature(index)}
          >
            {feature.icon}
            <div className="feature-info">
              <div className="feature-description">
                {feature.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
