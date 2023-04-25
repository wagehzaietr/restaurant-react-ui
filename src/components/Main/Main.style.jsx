import styled from "styled-components";

const LandingSection = styled.div`
  background-image: url(${(props) => props.Burgers});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: calc(100vw - 10px);
  height: calc(100vh - 80px);
  position: relative;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: calc(100vw);
  }
`;

const LandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 1rem;
`;

const Left = styled.div`
  flex: 1;

  h1 {
    font-size: 3rem;
    background: linear-gradient(-45deg, #e8a94a, #ee6a05f9);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 400;
    margin-top: 6rem;


  }

  p {
    color: #fff;
    font-size: 1.8rem;
    margin-top: 1rem;
    text-transform: capitalize;

    span{
      border-bottom: 2px double #eda710f8;
      color: #eda710f8;
    }
    @media only screen and (max-width: 768px) {
    width: 100%;
    color: #fefefd;
    font-size: 1.1rem;
    line-height: 1.6;

  }
  }
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    flex: 0;
  }

`;
const Overlay = styled.div`
  position: absolute;
  background: linear-gradient(-185deg, #ac734555, #2c2c2cab);
  backdrop-filter: blur(0.3px);
  opacity: 0.7;
  width: calc(100vw - 10px);
  height: calc(100vh - 80px);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
    background: linear-gradient(45deg, #e8830f2b, #4545456c);
  }
`;

export { LandingSection, LandingContainer, Left, Right, Overlay };
