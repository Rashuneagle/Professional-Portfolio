import React from 'react';
import pictureOfMe from '../assets/IMG_3030.jpeg';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={pictureOfMe} alt="Michael Scott" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
      <p>I am an Electrical Engineer at Boeing with a new passion for web development. I recently finished a coding bootcamp where I learned the MERN stack (MongoDB, Express.js, React, and Node.js). Now, I can build dynamic web applications. My background in engineering and my new web development skills help me solve technical problems in unique ways.</p>
    </section>
  );
};

export default AboutMe;
