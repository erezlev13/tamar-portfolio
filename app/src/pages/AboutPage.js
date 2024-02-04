import React, { useEffect } from "react";

import {
  TextBox,
  ImageBox,
  Image,
  Text,
  AboutContainer,
} from "../styles/About/About";
import tamarProfile from "../assets/images/home/Tamar_Profile_Smile.jpeg";

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  });
  
  return (
    <>
      <AboutContainer>
        <ImageBox>
          <Image src={tamarProfile} />
        </ImageBox>
        <TextBox>
          <Text>
            Tamar Lev’s studio is situated in the heart of Tel Aviv. Having
            contributed her expertise to esteemed establishments, including
            Baranowitz & Goldberg, Pitsou Kedem in Israel, and UHA London in the
            UK, she brings a multifaceted understanding of design cultivated
            across diverse cultural landscapes.
            <br />
            <br />
            Her experience spans diverse projects encompassing commercial and
            residential spaces on various scales, from high-end residences to
            restaurants, offices, showrooms, and spas. The studio is dedicated
            to exploring new materials, textures, and innovative combinations,
            ensuring that each design bears meticulous attention to detail and a
            pursuit of excellence.
            <br />
            <br />
            Tamar’s studio crafts minimalist spaces that resonate with purpose,
            elegance, and functionality, pushing architectural boundaries
            through a unique blend of experience and creative vision.
            <br />
            <br />
            Every project is unique, tailored to the client’s needs and
            environment, requiring a customized design and a distinctive story
            to be told.
          </Text>
        </TextBox>
      </AboutContainer>
    </>
  );
};

export default AboutPage;
