import React, { useEffect } from "react";

import ImagesGrid from "../views/ImagesGrid";
import { images } from "../assets/images/projects/projectImages";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const handleProjectClicked = (image) => {
    navigate(`/project`, {
      state: {
        images: image.images,
        name: image.projectName,
        area: image.area,
        location: image.location,
        architect: image.architect,
      },
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <ImagesGrid
        images={images}
        handleGridItemClicked={handleProjectClicked}
      />
    </>
  );
};

export default ProjectsPage;
