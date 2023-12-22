import React from 'react';

import ImagesGrid from '../views/ImagesGrid';
import { images } from '../assets/images/projects/projectImages';
import { useNavigate } from 'react-router-dom';

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
