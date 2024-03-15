import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as RightArrowIcon } from "../assets/arrow_right.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/arrow_left.svg";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  Project,
  Image,
  ImageWrapper,
  Arrow,
  OverlayWrapper,
  OverlayImage,
} from "../styles/Projects/Project";
import {
  GridView,
  GridWrapper,
  GridImage,
  GridItem,
} from "../styles/Grid/Grid";
import "../styles/transitions/transitions.css";

// same code from the project page but with the specs side panel removed
const Carousel = ({ images }) => {
  const MAX_MOBILE_WIDTH = 768;

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

  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= MAX_MOBILE_WIDTH
  );

  // Set mobile view on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= MAX_MOBILE_WIDTH);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [fullImage, setFullImage] = useState(false);

  const ProjectMobileView = (
    <Project>
      <GridWrapper>
        <GridView>
          {images.map((image, index) => (
            <GridItem key={index}>
              <GridImage
                src={image}
                alt="project"
                onClick={() => setFullImage(image)}
              />
              <OverlayWrapper
                onClick={() => setFullImage(false)}
                show={fullImage}
              >
                <OverlayImage src={fullImage} alt="project" />
              </OverlayWrapper>
            </GridItem>
          ))}
        </GridView>
      </GridWrapper>
    </Project>
  );

  const ProjectWeb = (
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

  return <>{isMobileView ? ProjectMobileView : ProjectWeb}</>;
};

export default Carousel;
