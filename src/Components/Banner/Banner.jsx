import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import img1 from '../../Asset/Images/banner/img1.jpg';
import img2 from '../../Asset/Images/banner/img2.jpg';
import img3 from '../../Asset/Images/banner/img3.jpg';

const Banner = () => {

    const data = [
        {
            img: img1,
            title :"Exclusive",
            title2 :"Collection"
        },
        {
            img: img2,
            title :"Amaging",
            title2 :"Airbuds"
        },
        {
            img: img3,
            title :"Worldwide",
            title2 :"Photography"
        },

    ]

  return (
    <div className='banner' >
      <div className="banner_container">
        

        {
            data.map((item, index)=>{
                return(
                    <Link key={index} to='/products' className='banner_box' >
                       <img src={item.img} alt="banner" />
                       <div className="content_bg">
                         <div className="content">
                                <h3>{item.title}</h3>                        
                                <h3>{item.title2}</h3>                        
                              <p>Shop now</p>
                           </div>
                       </div>
                     </Link>
                )
            })
        }
        
      </div>
    </div>
  )
}

export default Banner;
