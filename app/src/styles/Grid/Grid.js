import styled from 'styled-components';

export const phoneMinWidth = '320px';
export const phoneMaxWidth = '485px';

export const GridView = styled.div`
	max-width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0px;
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		max-width: 50%;
	}
`;

export const GridWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	max-width: fit-content;
	margin: 0 10px;
`;

export const Image = styled.img`
	width: 536px;
	height: 350px;
	flex: 1;
	cursor: inherit;
	&:hover {
		filter: contrast(70%) brightness(80%);

		text-decoration-color: rgba(255, 255, 255, 1);
	}
	@media (min-width: ${phoneMinWidth}) and (max-width: 760px) {
		width: 250px;
		height: 150px;
	}
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		width: 250px;
		height: 150px;
	}
`;

export const Text = styled.div`
	z-index: ${(props) => (props.showText ? '20' : '-20')};
	position: absolute;
	font-size: 13px;
	color: white;
	cursor: inherit;
	pointer-events: none;
	font-weight: lighter;
	color: #f4f4f4;
	display: ${(props) => (props.showText ? 'block' : 'none')};
	text-align: center;
	text-decoration: underline 0.01em transparent;
	transition: text-decoration-color 300ms;
`;

export const GridItem = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: fit-content;
	margin: 10px;
	cursor: pointer;
	@media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
		max-width: 200px;
	}
`;
