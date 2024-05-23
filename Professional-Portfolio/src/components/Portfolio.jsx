import React from 'react';
import Project from './Project';
import project1Image from '../assets/Project-1-Portfolio.png';
import project2Image from '../assets/Project-2-Portfolio.png';
import project3Image from '../assets/Project-3-Portfolio.png';
import project4Image from '../assets/Project-4-Portfolio.png';
import project5Image from '../assets/Project-5-Portfolio.png';
import project6Image from '../assets/Project-6-Portfolio.png';


const projects = [
  {
    title: 'Giphy Randomizer',
    image: project1Image, 
    deployedUrl: 'https://rashuneagle.github.io/our_Group_Project/',
    repoUrl: 'https://github.com/Rashuneagle/our_Group_Project'
  },
  
  {
    title: 'ReadME Generator',
    image: project2Image,
    deployedUrl: 'https://youtu.be/CN5VWidC-NA',
    repoUrl: 'https://github.com/Rashuneagle/Node.js-Challenge/'
  },

  {
    title: 'WorkForcePro',
    image: project3Image,
    deployedUrl: 'https://youtu.be/7HU53HkYFgQ',
    repoUrl: 'https://github.com/Rashuneagle/WorkForcePro'
  },

  {
    title: 'Ecommerce Backend',
    image: project4Image,
    deployedUrl: 'https://youtu.be/U8V8-BU92zk',
    repoUrl: 'https://github.com/Rashuneagle/E-Commerce-Improvement-Site'
  },

  {
  title: 'Scheduler',
  image: project5Image,
  deployedUrl: ' https://rashuneagle.github.io/5th-Challenge/',
  repoUrl: 'https://github.com/Rashuneagle/5th-Challenge' 

  },

  {
    title: 'Social Media Backend',
    image: project6Image,
    deployedUrl: 'https://youtu.be/suzNYePgWIU',
    repoUrl: 'https://github.com/Rashuneagle/Social-Media-Mongoose'
  }
 
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
