// src/components/WhatAreWe.js

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/ORBINOZ MEDIA LOGO-01.png'; // Adjust the path as needed
import behanceLogo from '../assets/ORBINOZ MEDIA LOGO-01.png'; // Add the path to your Behance logo

const WhatAreWe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setHover(true);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="flex flex-col justify-center items-center min-h-[60vh] text-gray-800 mx-4 sm:mx-8 md:mx-24 p-4 sm:p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center w-full">
        <div className="flex flex-col justify-center items-start md:w-2/3 p-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4">What Are We</h2>
          <p className="text-sm sm:text-base md:text-lg max-w-full md:max-w-4xl mb-8">
            We specialize in creating comprehensive 360-degree marketing strategies that cover all aspects from initial branding to successful product relaunches. With a deep understanding of the evolving media landscape, we harness creativity and data-driven insights to propel your brand forward. Whether you're seeking to refresh your identity, launch a new campaign, or optimize your digital presence, our dedicated team is here to collaborate and deliver tailored solutions that resonate with your audience.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center p-4 sm:p-8">
          <div className={`card ${hover ? 'hovered' : ''}`}>
            <button className="mail">
              <svg
                className="lucide lucide-mail"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect rx="2" y="4" x="2" height="16" width="20"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
            <div className="profile-pic">
              <img src={logo} alt="Profile" />
            </div>
            <div className="bottom">
              <div className="content">
                <span className="name text-center">ORBINOZ</span>
                <span className="about-me">Discover, Engage, Connect Our Media Experience Uniquely Yours</span>
              </div>
              <div className="bottom-bottom">
                <div className="social-links-container">
                  <svg viewBox="0 0 16 15.999" height="15.999" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path
                      transform="translate(6 598)"
                      d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
                      data-name="Subtraction 4"
                      id="Subtraction_4"
                    ></path>
                  </svg>
                  <img src={behanceLogo} alt="Behance" height="20" width="20" /> {/* Use your Behance logo here */}
                  <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </div>
                <button className="button">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreWe;
