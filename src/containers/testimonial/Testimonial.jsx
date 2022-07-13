import React from 'react';
import "./testimonial.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Slide 3'
  },
];

const Testimoonial = () => {
  
  return (
    <div className="slide-container section__padding">
      <Slide className="testimonial__container">
      {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}

export default Testimoonial