import React from 'react';
import { Image, ImageWrapper } from '../styles/Home/Home';
import danaHarel from '/Users/erezl/Desktop/tamar-portfolio/app/src/assets/images/projects/Dana Harel/DANA_HAREL011.jpg';

const HomePage = () => {
	return (
		<>
			<ImageWrapper>
				<Image
					src={danaHarel}
					alt={'home page'}
				/>
			</ImageWrapper>
		</>
	);
};

export default HomePage;
