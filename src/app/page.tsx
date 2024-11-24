import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';


function page() {
  return (
    <div> 
      <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
       </div>
  )
}

export default page;
