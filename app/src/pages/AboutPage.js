import React from 'react';

import {
	TextBox,
	ImageBox,
	Image,
	Text,
	AboutContainer,
} from '../styles/About/About';
import tamarProfile from '../assets/images/home/Tamar_Profile_Smile.jpeg';

const AboutPage = () => {
	return (
		<>
			<AboutContainer>
				<ImageBox>
					<Image src={tamarProfile} />
				</ImageBox>
				<TextBox>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec posuere nisi eu hendrerit pharetra. Nunc lacinia
						nunc a finibus vehicula. Cras non ipsum gravida,
						fringilla arcu eget, condimentum eros. Etiam viverra
						euismod ultricies. Proin commodo a lacus vitae
						efficitur. Vivamus tristique urna et ipsum malesuada
						convallis. Proin at euismod nunc, ut condimentum lacus.
						Proin at nisl eu velit aliquet vulputate. Integer
						rhoncus metus quam, ac accumsan mauris imperdiet ac.
						Donec maximus elit et augue dictum aliquet. Proin
						consequat nibh eu felis porta, a aliquam lacus
						imperdiet. Ut in placerat leo. Nam pretium pharetra ex,
						non auctor sem ornare sit amet. Vestibulum purus odio,
						dictum a tristique non, fermentum in quam. Maecenas et
						massa velit. Suspendisse potenti. Integer nulla ipsum,
						mollis quis eleifend vitae, rutrum et augue. Nam
						accumsan lacus nec augue aliquet scelerisque. Ut at
						cursus sapien. Suspendisse in lorem ante. Vivamus
						imperdiet orci in dui malesuada lobortis. Pellentesque
						ullamcorper risus sed porta vestibulum. Mauris non
						vehicula justo. Cras aliquet mauris quis augue auctor
						scelerisque. Phasellus rutrum, nunc quis tincidunt
						euismod, diam elit pharetra leo, sit amet tempor dolor
						libero et purus. Praesent mollis tempor lacus ut
						eleifend. Etiam commodo lorem et justo egestas, eu
						varius urna faucibus. Integer iaculis, ante vitae dictum
						egestas, purus libero mattis ex, vel ultrices massa elit
						vel nisi. Nulla malesuada faucibus aliquet. Orci varius
						natoque penatibus et magnis dis parturient montes,
						nascetur ridiculus mus. Proin dignissim orci sit amet
						purus hendrerit faucibus. Donec sollicitudin tortor in
						nunc porttitor mattis. Phasellus pharetra tincidunt
						odio, et dictum augue venenatis et. Sed rhoncus, massa
						id finibus viverra, leo est commodo augue, sed porttitor
						ex arcu viverra enim. Donec et semper nisl. Proin eget
						sem ipsum. Phasellus molestie tellus ligula, sit amet
						rutrum lectus tincidunt ut. Quisque eleifend ornare
						porttitor. Phasellus dapibus nunc ut lorem pulvinar, et
						ultricies diam commodo. Sed in lectus ut lectus posuere
						mollis sed sed dolor. Donec rutrum est ut lacus
						venenatis, non elementum augue mattis. Nullam justo
						dolor, rhoncus sed est commodo, egestas tempor elit.
						Vestibulum sagittis diam magna, eu volutpat lacus
						facilisis sed. Sed vehicula vulputate lectus, vel
						fringilla velit pellentesque at. Vestibulum aliquam odio
						sit amet iaculis lobortis. Quisque lobortis sem id metus
						mattis, eu hendrerit urna porttitor. Integer id arcu a
						lectus vestibulum rhoncus. Nullam eu fermentum ex, id
						cursus dolor. Aliquam et finibus tortor, non maximus
						odio. Donec semper congue commodo. Pellentesque pharetra
						ipsum velit, eu gravida dolor hendrerit vel. Donec
						consectetur felis ut condimentum eleifend. Vivamus
						pulvinar quam sit amet efficitur pellentesque. Donec mi
						purus, eleifend id odio et, egestas bibendum nisl.
						Integer
					</Text>
				</TextBox>
			</AboutContainer>
		</>
	);
};

export default AboutPage;
