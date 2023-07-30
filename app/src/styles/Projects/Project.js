import styled from 'styled-components';

export const phoneMinWidth = '320px';
export const phoneMaxWidth = '485px';

export const Project = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	align-items: center;
	margin-bottom: 200px;
	width: auto;
`;

export const Specs = styled.span`
	flex: 0;
	margin-right: 40px;
`;

export const ImageWrapper = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;

	${(props) =>
		props.slide
			? {
					opacity: '1',
					transitionDuration: '1s',
					transform: 'scale(1.01)',
			  }
			: {
					opacity: 0,
					transitionDuration: '1s ease',
			  }};
`;

export const Images = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const Image = styled.img`
	width: 100%;
	height: calc(100vh - 50px);
	display: flex;
	@media (min-width: 780px) and (max-width: 920px) {
		height: calc(100vh - 200px);
	}
	@media (min-width: ${phoneMinWidth}) and (max-width: 780px) {
		height: calc(100vh - 350px);
	}
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		height: calc(100vh - 400px);
	}
	transition: 1s ease;
	padding: 30px;
	max-width: 800px;
	max-height: 500px;
`;

export const LeftArrow = styled.button`
	background: transparent;
	border: 0;
	transform: rotate(180deg);
`;

export const RightArrow = styled.button`
	background: transparent;
	border: 0;
`;
