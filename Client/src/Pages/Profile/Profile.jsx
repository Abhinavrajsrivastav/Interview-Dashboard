import React, { useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import Features from '../Features/Features';
import './Profile.css';
import { FcMenu } from 'react-icons/fc';

const Profile = () => {
  const { user, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setEmail(parsedUser.email);
    }
  }, [setUser]);

  // Check if the user object is not null
  if (!user) {
    return <h1>Please log in to view your profile</h1>;
  }

  return (
    <div className="profile-page">
      <Features />
      <div className="user-profile">
        <div className="user-profile-details">
          <img 
            src={user.photoURL || './Logo/Calm-Full-HD-Wallpaper.jpg'} 
            alt={user.userName} 
            className="profile-picture" 
          />
        </div>
       <div>
        <div className="user-bio">
        <div className="user-profile-card-id">
          <p><strong>@_abhinav_srivastav__</strong></p>
          <section className='User-Profile-btn'>
            <button className="follow-button">Follow</button>
            <button className="message-btn">Message</button>
            <button className="menu-btn"><FcMenu size='20' style={{color:'white'}}/></button>
          </section>
        </div>
         <div className="user-stats">
          <p className=''><strong>{user.posts || 0}</strong> posts</p>
          <p className=''><strong>{user.followers || 0}</strong> followers</p>
          <p className=''><strong>{user.following || 0}</strong> following</p>
        </div>
          <p>{user.bio || 'No bio available'}</p>
          <p><a href={user.youtubeLink || '#'}>{"@AbhinavSrivastav" || 'No YouTube link'}</a></p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Profile;
