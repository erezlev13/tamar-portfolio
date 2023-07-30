import React from 'react';

import {
	Address,
	Body,
	Email,
	Name,
	Phone,
	Subject,
	ContactInfo,
	ContactWrapper,
	Send,
	AskMeBox,
	AskMeHHeader,
	EmailInput,
} from '../styles/Contact/Contact';

const ContactPage = () => {
	const sendEmail = () => {};

	return (
		<>
			<ContactWrapper>
				<ContactInfo>
					<Email>office@tamarlev.studio</Email>
					<Address>TEL AVIV, ISRAEL</Address>
					<Phone>TEL: +972 544227062</Phone>
				</ContactInfo>
				<AskMeBox>
					<AskMeHHeader>Ask me a question</AskMeHHeader>
					<Name placeholder='First name'></Name>
					<Name placeholder='Last name'></Name>
					<EmailInput placeholder='Email' />
					<Subject placeholder='Title'></Subject>
					<Body
						placeholder={`Message`}
						size={500}
					></Body>
					<Send onClick={sendEmail}>Send</Send>
				</AskMeBox>
			</ContactWrapper>
		</>
	);
};

export default ContactPage;
