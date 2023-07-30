import React, { useState } from 'react';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

import { useLocation } from 'react-router-dom';
import {
	Project,
	Image,
	Images,
	ImageWrapper,
	LeftArrow,
	RightArrow,
} from '../styles/Projects/Project';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ProjectPage = () => {
	const locationNavigator = useLocation();
	const { images, name, area, location } = locationNavigator.state;

	const [current, setCurrent] = useState(0);
	const [currentImage, setCurrentImage] = useState(images[0]);
	const [slide, setSlide] = useState(false);

	const nextSlide = () => {
		setCurrent(current === images.length - 1 ? 0 : current + 1);
		setCurrentImage(images[current]);
		setSlide(true);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? images.length - 1 : current - 1);
		setCurrentImage(images[current]);
		setSlide(true);
	};

	return (
		<>
			<Project>
				<LeftArrow onClick={prevSlide}>
					<Arrow />
				</LeftArrow>
				<Images>
					{images.map((image, index) => {
						return (
							<ImageWrapper
								slide={index === current}
								key={index}
							>
								{index === current && (
									<Image
										src={image}
										alt='Need to replace'
									/>
								)}
							</ImageWrapper>
						);
					})}
				</Images>
				<RightArrow onClick={nextSlide}>
					<Arrow />
				</RightArrow>
			</Project>
		</>
	);
};

export default ProjectPage;
