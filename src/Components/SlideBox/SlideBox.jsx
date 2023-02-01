import React from 'react';
import './SlideBox.css';
import img1 from '../../Asset/Images/slide/img1.jpg';
import img2 from '../../Asset/Images/slide/img2.jpg';
// import img3 from '../../Asset/Images/slide/img3.jpg';
import img4 from '../../Asset/Images/slide/img4.jpg';
import img5 from '../../Asset/Images/slide/img5.jpg';
// import img6 from '../../Asset/Images/slide/img6.jpg';
import { Slide } from 'react-slideshow-image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight ,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const SlideBox = () => {
  const data = [
    {
      img: img1,
      details: "Be Smart",
      details2: "With Smart Phone"
    },
    {
      img: img2,
      details: "Just to",
      details2: "Rock your mood",
    },
    {
      img: img4,
      details: "Fly as high",
      details2: "As you can"
    },
    {
      img: img5,
      details: "See the world",
      details2: "With smart products"
    },
  ]
  return (
    <div className="slides">

   
    <div className='slide_container' >
      <Slide
      nextArrow={<FontAwesomeIcon  className="arro" icon={faArrowRight} />}
      prevArrow={<FontAwesomeIcon  className="arro" icon={faArrowLeft} />}
      indicators={true}
      >
        {
          data.map((item ,index)=>{
            return(
                <div key={index} className="slide_image">
                  <img src={item.img} alt="slide" />
                  <div className="content_card">
                    <h3>{item.details}</h3>
                    <h3>{item.details2}</h3>
                    <Link to={'/products'} className='link_btn' >Shop Now</Link>
                  </div>
                </div>
            )
          })
        }
      </Slide>
    </div>
    </div>
  )
}

export default SlideBox;
