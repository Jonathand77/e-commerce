import React from 'react'
import "./Carousel.scss"
import { Link } from 'react-router-dom';

const CarouselItem = ({url, name, price, description}) => {
    return(
        <div className='carouselItem'>
            <Link to="/product-details">
                <img className='product--image' src={url} alt='product'></img>
                <p className='price'>
                    {`$${price}`}
                </p>
                <h4>{name}</h4>
                <p className='--mb'>{description}</p>
            </Link>
            <button className='--btn --btn-primary'>Add to Cart</button>
        </div>
    )
}

export default CarouselItem;