import danaHarel from './Dana Harel/DANA_HAREL004.jpg';
import klil from './Klil/Photos/Klil_09.jpeg';
import pines from './Pines/PHOTO-2020-03-02-17-38-20_2.jpg';
import shabazi from './Shabazi/Shabazi_C04_web.jpg';
import nechoshtan from './Nechoshtan/PHOTO-2021-10-12-11-28-15.jpg';
import shefayim from './Shefayim Hotel/Shefayim_Room390_c01.jpg';
import olympicResort from './Olympic resort/OlimpicSPA_Cam3_HR.jpg';
import hcc from './HCC/Lobby_C3_web.jpg';
import rogovinAcro from './Rogovin Acro/looby_c3.RGB_color.0000.jpg';

import { NechoshtanImages } from './nechoshtanImages';
import { KlilImages } from './klilProjects';

export const images = [
	{
		source: danaHarel,
		alt: 'Dana Harel',
		name: 'Dana Harel',
		summary: 'Dana Harel',
	},
	{
		source: klil,
		alt: 'Klil',
		name: 'Klil',
		summary: 'Klil',
		images: KlilImages,
	},
	{
		source: pines,
		alt: 'Pines',
		name: 'Pines',
		summary: 'Pines',
	},
	{
		source: shabazi,
		alt: 'Shabazi',
		name: 'Shabazi',
		summary: 'Shabazi',
	},
	{
		source: nechoshtan,
		alt: 'N Penthouse',
		name: 'N Penthouse',
		summary: 'N Penthouse',
		area: '350 Sqm',
		location: 'Tel Aviv',
		images: NechoshtanImages,
	},
	{
		source: shefayim,
		alt: 'Shefayim',
		name: 'Shefayim',
		summary: 'Shefayim',
	},
	{
		source: olympicResort,
		alt: 'Olympic Resort',
		name: 'Olympic Resort',
		summary: 'Olympic Resort',
	},
	{
		source: hcc,
		alt: 'HCC',
		name: 'HCC',
		summary: 'HCC',
	},
	{
		source: rogovinAcro,
		alt: 'Rogovin Arco',
		name: 'Rogovin Arco',
		summary: 'Rogovin Arco',
	},
];
