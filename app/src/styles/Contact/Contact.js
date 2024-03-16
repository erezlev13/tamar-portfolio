import styled from "styled-components";

export const Email = styled.div`
  font-size: 15px;
  letter-spacing: 0.2em;
  color: #707070;
`;

export const Address = styled.div`
  font-size: 14px;
  color: #707070;
`;

export const Phone = styled.div`
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #707070;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  line-height: 50px;
  margin-top: 20px;
`;

export const AskMeHHeader = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: rgb(112, 112, 112);
`;

export const Name = styled.input`
  border-width: 0.01em;
  border-color: #838383;
  border-style: solid;
  background-color: #fdfdfd;
  margin-top: 20px;
  height: 20px;
  width: 55%;
  padding: 5px;
  font-family: "Lato";
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;

export const EmailInput = styled.input`
  border-width: 0.01em;
  border-color: #838383;
  border-style: solid;
  background-color: #fdfdfd;
  margin-top: 20px;
  height: 20px;
  width: 55%;
  padding: 5px;
  font-family: "Lato";
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;

export const Body = styled.textarea`
  border-width: 0.01em;
  border-color: #838383;
  border-style: solid;
  background-color: #fdfdfd;
  margin-top: 20px;
  padding-bottom: 100px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  width: 55%;
  word-wrap: break-word;
  resize: none;
  font-family: "Lato";
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;

export const Send = styled.button`
  margin-top: 20px;
  background: #83838361;
  font-family: inherit;
  font-weight: bold;
  color: rgb(112, 112, 112);
  border: 1px #838383 solid;
  width: 100px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
`;

export const AskMeBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 50%;
  margin-top: 73px;
  min-width: 350px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
`;
