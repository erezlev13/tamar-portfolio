import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as RightArrowIcon } from "../assets/arrow_right.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/arrow_left.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import ProjectInfo from "../views/ProjectInfo";
import {
  GridView,
  GridWrapper,
  GridImage,
  GridItem,
} from "../styles/Grid/Grid";

import { useLocation, useNavigate } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  Project,
  Image,
  ImageWrapper,
  Arrow,
  Specs,
  BackToProjects,
  OverlayWrapper,
  OverlayImage,
} from "../styles/Projects/Project";
import "../styles/transitions/transitions.css";

/*
Todo: Use the Carousel view instead of duplicating the code
The specs side panel will need to be added back into the Carousel view before doing this!
Also projectImages.js will need to be updated with the side panel info like with the other projects
*/
const ProjectPage = () => {
  const MAX_MOBILE_WIDTH = 768;

  const locationNavigator = useLocation();
  const { images, name, area, location, architect } = locationNavigator.state;
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const imageRef = useRef(null);
  const [sidePanelVisible, setSidePanelVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= MAX_MOBILE_WIDTH
  );

  const [fullImage, setFullImage] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Set mobile view on resize
  useEffect(() => {
    scrollToTop();
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= MAX_MOBILE_WIDTH);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const toggleSidePanel = () => {
    setSidePanelVisible(!sidePanelVisible);
  };

  const navigateToProjects = () => {
    navigate(`/projects`);
  };

  const ProjectMobileView = (
    <Project>
      <Specs>
        <Plus onClick={toggleSidePanel} />
      </Specs>
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
      <ProjectInfo
        projectName={name}
        sqm={area}
        location={location}
        architect={architect}
        show={sidePanelVisible}
        style={{ width: "100vw" }}
      />
      <BackToProjects onClick={navigateToProjects}>All Projects</BackToProjects>
    </Project>
  );

  const ProjectWeb = (
    <Project>
      <Specs>
        <Plus onClick={toggleSidePanel} />
      </Specs>
      <>
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
              <ProjectInfo
                projectName={name}
                sqm={area}
                location={location}
                architect={architect}
                show={sidePanelVisible}
              />
            </ImageWrapper>
          </CSSTransition>
        </SwitchTransition>
        <Arrow onClick={nextSlide}>
          <RightArrowIcon />
        </Arrow>
      </>
    </Project>
  );

  return <>{isMobileView ? ProjectMobileView : ProjectWeb}</>;
};

export default ProjectPage;
