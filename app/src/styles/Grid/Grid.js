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
	margin-top: 30px;
`;

export const Text = styled.span`
	z-index: ${(props) => (props.showText ? '20' : '-20')};
	position:  absolute;
	font-size: 18px;
	pointer-events: none;
	font-weight: lighter;
	color: #f4f4f4;
	display: ${(props) => (props.showText ? 'inline-block' : 'none')};
	text-align: center;
`;

export const Image = styled.img`
	width: 536px;
	height: 350px;
	flex: 1;
	cursor: inherit;
	border-bottom: 1px solid transparent;
	object-fit: cover;
	&:hover {
		filter: contrast(70%) brightness(60%);
		transform-origin: bottom left;
		transition: 0.25s ease-out;
		border-color: 'white';
	}
	@media (max-width: 760px) {
		width: 400px;
		height: 100%;
		object-fit: contain;
	}
`;

export const GridItem = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	height: fit-content;
	margin: 10px;
	cursor: pointer;
`;

export const Line = styled.div`
	border-bottom: .5px solid #f4f4f4;
	height: 2px;
	width: ${(props) => (props.showText ? '100%' : '0')};
	z-index: ${(props) => (props.showText ? '20' : '-20')};
`
