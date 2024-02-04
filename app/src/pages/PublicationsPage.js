import React, { useEffect } from "react";

import ImagesGrid from "../views/ImagesGrid";
import { images } from "../assets/images/projects/projectImages";

const PublicationsPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <ImagesGrid images={images} />
    </>
  );
};

export default PublicationsPage;
