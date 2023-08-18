import styled from 'styled-components';

export const ImageWrapper = styled.div`
	margin: 40px 0;
	width: stretch;
	display: flex;
	flex-direction: row;
	justify-content: center;
	@media screen and (max-width: 768px) {
		align-items: center;
		justify-content: center;
		margin: 10px 10px 0px 10px;
		max-width: 100vw;
		overflow: hidden;
		text-align: center;
	}
`;

export const Image = styled.img`
	width: calc(100vw - 200px);
	padding: 10px;
	object-fit: contain;
	@media screen and (max-width: 768px) {
		width: 100%;
		height: auto;
		max-width: 100%;
		object-fit: cover;
	}
`;
