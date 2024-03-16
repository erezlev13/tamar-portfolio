import styled from "styled-components";

export const phoneMinWidth = "320px";
export const phoneMaxWidth = "485px";

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-bottom: 30px;
  min-height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  place-items: center;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Image = styled.img`
  width: calc(100vw - 200px);
  height: calc(100vh - 100px);
  padding: 10px;
  object-fit: contain;
  @media (min-width: 780px) and (max-width: 920px) {
    height: calc(100vh - 200px);
  }
  @media (min-width: ${phoneMinWidth}) and (max-width: 780px) {
    height: calc(100vh - 350px);
  }
  @media (min-width: ${phoneMinWidth}) and (max-width: ${phoneMaxWidth}) {
    height: calc(100vh - 400px);
  }
`;

export const Arrow = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  svg {
    &:hover {
      filter: contrast(20);
    }
  }
`;

export const Specs = styled.span`
  background: transparent;
  position: absolute;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
  height: 60px;
  cursor: pointer;
  z-index: 15;
  left: 3em;
  top: -2.8em;
  @media screen and (max-width: 768px) {
    z-index: 1;
    position: absolute;
    justify-content: center;
    left: 37px;
    top: 0;
  }
`;

export const BackToProjects = styled.button`
  background: transparent;
  text-decoration: underline;
  font-size: 16px;
  color: black;
  font-weight: 1;
  border: none;
  margin: 20px 0 10px 0;
  padding: 5px;
  font-family: inherit;
`;

export const OverlayWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  align-items: center;

  visibility: ${(props) => (props.show ? 'shown' : 'hidden')};
  opacity: ${(props) => (props.show ? '1' : '0')};

  transition: opacity ease 0.2s;
`;

export const OverlayImage = styled.img`
	width: 100%;
`;