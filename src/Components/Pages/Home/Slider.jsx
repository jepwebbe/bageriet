import React, { useState } from "react";
import { SlideImage, StyledSlider, StyledHeading } from "./Slider.Styled";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  // uses state to keep track of the current picture
  const [current, setCurrent] = useState(0);
  const length = slides.length;
// two arrow functions that adds or subtracts one based on a ternary
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <StyledSlider>
      <StyledHeading>
        <div>
          <h2>Vi elsker at lave brød</h2>
        </div>
        <FaChevronLeft className="leftArrow" onClick={prevSlide} />
        <FaChevronRight className="rightArrow" onClick={nextSlide} />
      </StyledHeading>

      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <SlideImage
                key={index}
                src={slide.image}
                alt="Billeder fra Bageriets hjemmeside"
              />
            )}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;
