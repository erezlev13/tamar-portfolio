import styled from 'styled-components';

export const phoneMinWidth = '320px';
export const phoneMaxWidth = '768px';

export const AboutContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		flex-direction: column;
	}
`;

export const TextBox = styled.div`
	margin: 30px;
	margin-right: 75px;
	margin-left: 45px;
	border-color: black;
	border-radius: 50px;
	display: flex;
	flex: 1;
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		margin: 30px;
	}
`;

export const Text = styled.div`
	width: 100%;
	height: auto;
`;

export const ImageBox = styled.div`
	margin: 30px;
	margin-right: 45px;
	margin-left: 75px;
	border-color: black;
	border-radius: 50px;
	display: flex;
	flex: 1;
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		margin: 30px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
	max-width: calc(1024px - 30%);
	max-height: calc(840px - 30%);
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		height: 100%;
		object-fit: contain;
	}
`;
