import './Carousel.css';


import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable'

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;  
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if(!paused)  
            updateIndex(activeIndex + 1);
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        oneSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div {...handlers} className='carousel' onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className='inner' style= {{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className='indicators'>
                <button onClick={() => { updateIndex(activeIndex - 1) }}>PREV</button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button className={`${index === activeIndex ? "active" : ""}`} onClick={() => { updateIndex(index) }}>{index + 1}</button>
                        )
                })}
                <button onClick={() => { updateIndex(activeIndex + 1) }}>NEXT</button>
            </div>
        </div>
    )
}


export default Carousel;
