import React from 'react';
import { Image, ImageWrapper } from '../styles/Home/Home';
import nechoshtan from '../assets/images/projects/Nechoshtan/PHOTO-2021-10-12-11-28-15.jpg';

const HomePage = () => {
	return (
		<>
			<ImageWrapper>
				<Image
					src={nechoshtan}
					alt={'home page'}
				/>
			</ImageWrapper>
		</>
	);
};

export default HomePage;
