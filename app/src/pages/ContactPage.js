import React from "react";

import {
  Address,
  Body,
  Email,
  Name,
  Phone,
  ContactInfo,
  ContactWrapper,
  Send,
  AskMeBox,
  AskMeHHeader,
  EmailInput,
} from "../styles/Contact/Contact";

const ContactPage = () => {
  const tamarEmail = "office@tamarlev.studio";

  /* ima remove this for now because tamar was complaining about the page jumping around and im blaming this code
  remember to import useEffect if reintroducing this
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  });
  */

  return (
    <>
      <ContactWrapper>
        <ContactInfo>
          <Email>{tamarEmail}</Email>
          <Address>TEL AVIV, ISRAEL</Address>
          <Phone>TEL: +972 544804104</Phone>
        </ContactInfo>
        <AskMeBox
          action="https://form.taxi/s/k1jw3k3t"
          method="POST"
        >
          <AskMeHHeader>Ask me a question</AskMeHHeader>
          <Name
            placeholder="Name"
            type="text"
            name="Name"
          />
          <EmailInput
            placeholder="Email"
            type="email"
            name="Email"
          />
          <Body
            size={500}
            placeholder="Message"
            name="Message"
          ></Body>
          <Send type="submit">Send</Send>
        </AskMeBox>
      </ContactWrapper>
    </>
  );
};

export default ContactPage;
