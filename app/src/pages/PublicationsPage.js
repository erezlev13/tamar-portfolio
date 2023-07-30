import React from 'react';

import ImagesGrid from '../views/ImagesGrid';
import { images } from '../assets/images/projects/projectImages';

const PublicationsPage = () => {
	return (
		<>
			<ImagesGrid images={images} />
		</>
	);
};

export default PublicationsPage;
