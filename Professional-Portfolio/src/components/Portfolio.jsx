import React from 'react';
import Project from './Project';
import project1Image from '../assets/Project-1-Portfolio.png'; 

const projects = [
  {
    title: 'Project 1',
    image: project1Image, 
    deployedUrl: 'https://rashuneagle.github.io/our_Group_Project/',
    repoUrl: 'https://github.com/Rashuneagle/our_Group_Project'
  },
 
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
