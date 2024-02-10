import React, { useEffect } from "react";
import { Image, ImageWrapper, Socials, Icon } from "../styles/Home/Home";
import danaHarel from "../assets/images/projects/Dana Harel/DANA_HAREL011.jpg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as PinterestIcon } from "../assets/pinterest.svg";

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <ImageWrapper>
        <Image src={danaHarel} alt={"home page"} />
      </ImageWrapper>
      <Socials>
        <Icon href="https://www.instagram.com/tamarlev.studio" target="_blank">
          <InstagramIcon />
        </Icon>
        <Icon href="https://www.pinterest.com/tamarlevdesignstudio/" target="_blank">
          <PinterestIcon />
        </Icon>
      </Socials>
    </> 
  );
};

export default HomePage;
