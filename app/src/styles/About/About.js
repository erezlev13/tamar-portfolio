import styled from 'styled-components';

export const phoneMinWidth = '320px';
export const phoneMaxWidth = '768px';

export const AboutContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
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
	object-fit: contain;
	max-height: calc(100vh - 10px);
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;
