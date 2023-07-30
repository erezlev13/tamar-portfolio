import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const PrimaryNav = styled.nav`
	z-index: 14;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0.18rem calc((100vw - 1000px) / 2);
	text-transform: uppercase;
	font-weight: lighter;
	background: #f4f4f4;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		height: ${(props) =>
			props.isHamburgerNav ? `calc(100vh - 10px)` : `100%`};
		margin-right: 0;
		position: ${(props) => (props.isHamburgerNav ? `absolute` : `100%`)};
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 40px;
	padding-top: 20px;
	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;

export const LogoImage = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	width: 50px;
	padding-top: 10px;
	margin-bottom: 5px;
	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;

export const Title = styled.h1`
	color: #000;
	display: flex;
	font-size: 12px;
	font-weight: lighter;
	letter-spacing: 0.1rem;
`;

export const SubTitle = styled.h3`
	color: darkgray;
	display: flex;
	align-items: center;
	flex: 2;
	font-size: 9px;
	margin-top: 5px;
	margin-bottom: 15px;
	font-weight: lighter;
	letter-spacing: 0.1rem;
	@media screen and (max-width: 768px) {
		font-size: 10px;
	}
`;

export const LogoLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
`;

export const MenuLink = styled(Link)`
	color: darkgray;
	display: flex;
	cursor: pointer;
	align-items: center;
	text-decoration: none;
	padding: 0 2rem;
	height: 100%;
	font-size: 10px;
	letter-spacing: 0.1em;
	&.active {
		color: #000000;
	}
	@media screen and (max-width: 768px) {
		margin-top: 12px;
		padding: 0;
		height: 12%;
		justify-content: space-between;
	}
`;

export const Hamburger = styled(FaBars)`
	display: none;
	color: #000000;
	transition: all 0.3s linear;
	position: relative;
	transform-origin: 1px;
	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.2rem;
		top: 30px;
		right: 15px;
		position: absolute;
		cursor: pointer;
		transform: translate(-100%, 75%);
	}
`;

export const Menu = styled.div`
	display: flex;
	padding: 15px;
	align-items: center;
	flex-direction: row;
	justify-content: space-evenly;
	@media screen and (min-width: 768px) {
		display: flex;
	}
	@media screen and (max-width: 768px) {
		opacity: ${(props) => (props.open ? '100%' : 0)};
		flex-direction: column;
		justify-content: center;
		height: ${(props) => (props.open ? '70%' : 0)};
		margin: 0;
		transition: transform 1.3s ease-out;
		transform: ${(props) =>
			props.open ? 'translateY(0%)' : 'translateY(-20%)'};
	}
`;
