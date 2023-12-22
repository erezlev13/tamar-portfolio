import React, { useState } from 'react';
import {
	Logo,
	Title,
	SubTitle,
	PrimaryNav,
	Menu,
	MenuLink,
	Hamburger,
	LogoLink,
	LogoImage,
} from '../styles/NavBar/NavElement';
import { ReactComponent as TamarLogo } from '../assets/logo/Tamar_Lev_Studio-logo.svg';

const NavBar = () => {
	const [showMenu, setshowMenu] = useState(false);

	return (
		<>
			<PrimaryNav isHamburgerNav={showMenu}>
				<Hamburger onClick={() => setshowMenu(!showMenu)} />
				<>
					<LogoLink
						to='/'
						onClick={() => setshowMenu(false)}
					>
						<Logo>
							<LogoImage>
								<TamarLogo />
							</LogoImage>
							<Title>Tamar Lev</Title>
							<SubTitle>Design Studio</SubTitle>
						</Logo>
					</LogoLink>
					<Menu open={showMenu}>
						<MenuLink
							to='/projects'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							onClick={() => setshowMenu(false)}
						>
							Projects
						</MenuLink>
						<MenuLink
							to='/about'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							onClick={() => setshowMenu(false)}
						>
							About
						</MenuLink>
						<MenuLink
							to='/contact'
							activeStyle={{
								fontWeight: 'bold',
								color: 'red',
							}}
							onClick={() => setshowMenu(false)}
						>
							Contact
						</MenuLink>
					</Menu>
				</>
			</PrimaryNav>
		</>
	);
};

export default NavBar;
