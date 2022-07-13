import React from 'react';
import './App.css';
import { Header, Talents, Techies, Awards, Testimonial } from './containers';
import Collaborate from './containers/collaborate/Collaborate';



const Home = () => {
  return (
    <div>
        <div className="hero">
          <Header /> 
        </div>
        <Awards />
        <Techies />
        <Talents />
        <Testimonial />
        <Collaborate />
    </div>
  )
}

export default Home