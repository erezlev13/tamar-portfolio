import styled from 'styled-components';

export const phoneMinWidth = '320px';
export const phoneMaxWidth = '485px';

export const Project = styled.div`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	margin-bottom: 30px;
	min-height: 100vh;
	position: relative;
`;

export const ImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	place-items: center;
`;

export const Images = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex: 1;
`;

export const Image = styled.img`
	width: calc(100vw - 200px);
	height: calc(100vh - 100px);
	padding: 10px;
	object-fit: contain;
	@media (min-width: 780px) and (max-width: 920px) {
		height: calc(100vh - 200px);
	}
	@media (min-width: ${phoneMinWidth}) and (max-width: 780px) {
		height: calc(100vh - 350px);
	}
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		height: calc(100vh - 400px);
	}
`;

export const Arrow = styled.button`
	background: transparent;
	border: 0;
	cursor: pointer;
`;

export const Specs = styled.span`
	background: transparent;
	position: absolute;
	border: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
	height: 60px;
	cursor: pointer;
	z-index: 1;
	left: 60px;
	@media screen and (max-width: 768px) {
		justify-content: center;
		left: 0px;
    }
`;
