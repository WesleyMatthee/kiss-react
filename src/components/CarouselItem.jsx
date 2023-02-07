import React from "react";

import './Carousel.css';

export const CarouselItem = ({ children, width }) => {
    return (
        <div className='carousel-item' style={{ width: width }}>
        {children}
        </div>
    )
}

