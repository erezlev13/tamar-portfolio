import styled from 'styled-components';

export const phoneMinWidth = '320px';
export const phoneMaxWidth = '485px';

export const ImageWrapper = styled.div`
	margin: 15px 15px 15px 15px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media screen and (max-width: 768px) {
		margin: 10px 10px 0px 10px;
	}
`;

export const ImageBox = styled.div`
	margin: 30px;
	border-color: black;
	border-radius: 50px;
	display: flex;
	flex: 1;
`;

export const Image = styled.img`
	width: 100%;
	max-width: calc(100vh + 200px);
	height: calc(100vh - 250px);
	object-fit: cover;
	display: flex;
	@media (min-width: ${phoneMinWidth}) and (max-width: 760px) {
		width: 400px;
		height: 200px;
	}
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		width: 250px;
		height: 150px;
	}
`;
