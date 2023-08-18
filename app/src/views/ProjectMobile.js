import React from 'react';
import {
	GridView,
	GridWrapper,
	Image,
	GridItem,
} from '../styles/Grid/Grid';

const ProjectMobile = ({ images }) => {
  return (
    <GridWrapper>
			<GridView>
				{images.map((image, index) => (
					<GridItem key={index}>
						<Image
							src={image}
							alt="project"
						/>
					</GridItem>
				))}
			</GridView>
		</GridWrapper>
  );
};

export default ProjectMobile;
