import React from 'react';
import Hero from './homecomponents/Hero';
import ProjectList from './homecomponents/ProjectsList';
import CollaboratorsList from './homecomponents/CollaboratorsList';


const Header = () => {
  return (
   <div>
        <Hero/>
        <ProjectList/>
        <CollaboratorsList/>



   </div>
  );
};

export default Header;
