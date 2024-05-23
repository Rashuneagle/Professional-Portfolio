import React from 'react';

const Resume = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Resume</h2>
      <a href="https://docs.google.com/document/d/1eOxPeSskxlOYubV3ptpuz84n55GPIWZoMZVR7dVDY_s/edit?usp=sharing" style={styles.link} download>
        Download Resume
      </a>
      <h3 style={styles.subHeading}>Proficiencies</h3>
      <div style={styles.proficiencies}>
        <span style={styles.proficiency}>MERN Stack</span>
        <span style={styles.proficiency}>Database Management</span>
        <span style={styles.proficiency}>JavaScript</span>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  link: {
    display: 'inline-block',
    margin: '10px 0',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  subHeading: {
    fontSize: '20px',
    margin: '20px 0 10px',
  },
  proficiencies: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  proficiency: {
    fontSize: '16px',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default Resume;
