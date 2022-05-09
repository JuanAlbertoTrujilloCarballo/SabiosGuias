import React, { useEffect, useState } from "react";
// import { useSwipeable } from "react-swipeable";

import "./MyCarousel.css";
import MyCarouselImages from "./MyCarouselmages";


const images = [
  {
    src: "/img/imagen_sabios_1.jpg",
    alt: "imagen 1"
  }, {
    src: "/img/imagen_sabios_2.jpg",
    // src: "/img/imagen_sabios_2.jpg",
    alt: "imagen 2"
  }, {
    src: "/img/imagen_sabios_1.jpg",
    // src: "/img/imagen_sabios_3.png",
    alt: "imagen 3"
  }
];

export const CarouselItem = ({ item }) => {

  
  // 
  return (
    <div className="carousel-item" >
      {/* {images.map((item) => */}
        <MyCarouselImages src={item.src} alt={item.alt} />
        
      {/* )} */}
    </div>
  );
}



const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pause, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!pause) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 1000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });

  // const handlers = useSwipeable({
  //   onSwipedLeft: () => updateIndex(activeIndex + 1),
  //   onSwipedRight: () => updateIndex(activeIndex - 1)
  // });

  return (
    <>
      <div
        // {...handlers}
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100vw" });
          })}
        </div>
      </div>

      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>

        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Carousel;