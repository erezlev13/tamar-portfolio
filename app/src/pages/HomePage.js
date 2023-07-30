import React from 'react';
import { Image, ImageWrapper } from '../styles/Home/Home';
import { images } from '../assets/images/projects/projectImages';

const HomePage = () => {
	const image = images.pop();
	return (
		<>
			<ImageWrapper>
				<Image
					src={image.source}
					alt={image.alt}
				/>
			</ImageWrapper>
		</>
	);
};

export default HomePage;
