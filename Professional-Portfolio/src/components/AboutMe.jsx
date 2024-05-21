import React from 'react';
import pictureOfMe from '../assets/IMG_3030.jpeg';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <img src={pictureOfMe} alt="Michael Scott" style={{ width: '150px', height: 'auto', borderRadius: '50%' }} />
      <p>Short bio about you.</p>
    </section>
  );
};

export default AboutMe;
