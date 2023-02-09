import React from 'react'
import Landing from "./landing.jsx"
import AboutCo from './aboutCo.jsx';
import AboutTeam from './aboutTeam.jsx';

function Homepage() {
  return (
    <div>
      <Landing />
      <AboutCo />
      <AboutTeam />
    </div>
  )
}

export default Homepage