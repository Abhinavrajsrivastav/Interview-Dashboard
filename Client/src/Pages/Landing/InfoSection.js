import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login'; // Adjust the path based on your folder structure
import './InfoSection.css'; // Import the CSS file
import { useUser } from '../../UserContext'; // Import the useUser hook

const InfoSection = ({ 
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {

    const { user, setUser } = useUser(); // Use the useUser hook to access user context

    return (
        <div className={`info-sec ${lightBg ? 'light-bg' : 'dark-bg'}`}>
            <div className="container">
                <div className={`info-row ${imgStart ? 'row-reverse' : ''}`}>
                    <div className="info-column">
                        <div className="text-wrapper">
                            <div className={`top-line ${lightTopLine ? 'light-top-line' : ''}`}>
                                {topLine ? topLine : 'Welcome to the Columbae'}
                            </div>
                            <h1 className={`heading ${lightText ? 'light-text' : ''}`}>
                                {headline ? headline : 'Making Interviews Like a Breeze'}
                            </h1>
                            <p className={`subtitle ${lightTextDesc ? 'light-text-desc' : ''}`}>
                                {description ? description : 'Our platform offers features that make interview scheduling, preparation, and tracking seamless for both interviewers and candidates.'}
                            </p>
                            <Link to='/sign-up'>
                                <button className={`btn ${primary ? 'primary' : ''}`}>
                                    {buttonLabel ? buttonLabel : 'Get Started Now'}
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Add the Login component to the right side */}
                    <div className="info-column">
                        <div className="img-wrapper">
                            {!user&&<Login />} {/* Render your Login component here */}
                            {user&&<img src='./Logo/Monkey.jpg' alt={alt} className="img" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
