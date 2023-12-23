import React, { useState } from "react";

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
} from "../styles/Contact/Contact";

const ContactPage = () => {
  const tamarEmail = "office@tamarlev.studio";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const sendEmail = () => {
    const mailtoLink = `mailto:${tamarEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <ContactWrapper>
        <ContactInfo>
          <Email>{tamarEmail}</Email>
          <Address>TEL AVIV, ISRAEL</Address>
          <Phone>TEL: +972 544804104</Phone>
        </ContactInfo>
        <AskMeBox>
          <AskMeHHeader>Ask me a question</AskMeHHeader>
          <Name
            placeholder="First name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Name
            placeholder="Last name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <EmailInput
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Subject
            placeholder="Title"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Body
            size={500}
            placeholder="Message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></Body>
          <Send onClick={sendEmail}>Send</Send>
        </AskMeBox>
      </ContactWrapper>
    </>
  );
};

export default ContactPage;
