import React, { useState, useRef } from "react";
import { ReactComponent as RightArrowIcon } from "../assets/arrow_right.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/arrow_left.svg";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  Project,
  Image,
  ImageWrapper,
  Arrow,
} from "../styles/Projects/Project";
import "../styles/transitions/transitions.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const imageRef = useRef(null);

  const nextSlide = () => {
    const newVal = current === images.length - 1 ? 0 : current + 1;
    setCurrent(newVal);
    setCurrentImage(images[newVal]);
  };

  const prevSlide = () => {
    const newVal = current === 0 ? images.length - 1 : current - 1;
    setCurrent(newVal);
    setCurrentImage(images[newVal]);
  };

  return (
    <Project>
      <Arrow onClick={prevSlide}>
        <LeftArrowIcon />
      </Arrow>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentImage}
          nodeRef={imageRef}
          addEndListener={(done) =>
            imageRef.current.addEventListener("transitionend", done, true)
          }
          classNames="fade"
        >
          <ImageWrapper>
            <Image ref={imageRef} src={currentImage} alt="project" />
          </ImageWrapper>
        </CSSTransition>
      </SwitchTransition>
      <Arrow onClick={nextSlide}>
        <RightArrowIcon />
      </Arrow>
    </Project>
  );
};

export default Carousel;
