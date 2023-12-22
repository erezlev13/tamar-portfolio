import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/transitions/transitions.css';

import {
	GridView,
	GridWrapper,
	Image,
	Text,
	GridItem,
	Line
} from '../styles/Grid/Grid';

const ImagesGrid = ({ images, handleGridItemClicked }) => {
	const initHoverImageList = () => {
		let initHoverImageList = {};

		for (const index in images) {
			initHoverImageList[index] = false;
		}

		return initHoverImageList;
	};

	const [hoverImageList, setHoverImageList] = useState(initHoverImageList());

	useEffect(() => {}, [JSON.stringify(hoverImageList)]);

	const handleMouseEnter = (index) => {
		const newHoverImageList = hoverImageList;
		newHoverImageList[index] = true;
		setHoverImageList({ ...newHoverImageList });
	};

	const handleMouseLeave = (index) => {
		const newHoverImageList = hoverImageList;
		newHoverImageList[index] = false;
		setHoverImageList({ ...newHoverImageList });
	};

	return (
		<GridWrapper>
			<GridView>
				{images.map((image, index) => (
					<GridItem
						key={index}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave(index)}
						onClick={() => handleGridItemClicked(image)}
					>
						<Text showText={hoverImageList[index]}>
							{image.summary}
							<CSSTransition in={hoverImageList[index]} classNames="fade" timeout={1000} unmountOnExit>
								<Line showText={hoverImageList[index]} />
							</CSSTransition>
						</Text>
						
						<Image
							src={image.source}
							alt={image.alt}
						/>
					</GridItem>
				))}
			</GridView>
		</GridWrapper>
	);
};

export default ImagesGrid;
