import React from 'react'
import { useState } from 'react'
import "./carousel.css"
import { Link } from 'react-router-dom';

const Carousel = ({slides}) => {
const [currentIndex, setCurrentIndex] = useState(0);
const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
}
  return (
    <div className="carousel">
        <div className='slide-number'>{slides[currentIndex].serial}/{slides.length}</div>
            <h2>{slides[currentIndex].text}</h2>
            <button><Link to={"/transformation"} style={{cursor:"pointer"}} className='build-button'>Start Building</Link></button>
            
        <div className='dot-container'>
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className={`dot ${slideIndex===currentIndex && "active-dot"}`} onClick={() => goToSlide(slideIndex)} >⬤</div>
            ))}
        </div>
    </div>
  )
}

export default Carousel
