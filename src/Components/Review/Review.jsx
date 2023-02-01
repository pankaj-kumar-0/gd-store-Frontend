import React from 'react';
import './Review.css';
import moment from 'moment'

import ReactStars from 'react-star-rating-component';



const Review = ({review}) => {

  const options={
    name:"pankaj",
    edit :false,
    color: "#4c4c4c",
    activeColor:"#4c4c4c",
    value: review.rating,
    isHalf:true
}

  return (
    <div className='review'>
        <div className="name">
            <h4>{review.name}</h4>
            <h4>{moment(review.ratingDate).format('LLL')}</h4>
        </div>
      <ReactStars {...options} />
      <p>
        {review.comment}
      </p>
    </div>
  )
}

export default Review
