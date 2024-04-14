import styled from "styled-components";

const StyledBackground = styled.div`
  background: linear-gradient(
    to top,
    ${(props) => `#${props.color3}`},
    ${(props) => `#${props.color1}`}
  );
  width: 100vw;
  height: 100vh;
`;
const PosterContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;
const StyledPoster = styled.img`
  position: relative;
  top: -24rem;
  left: -20rem;
  height: 150%;
  opacity: 30%;
  width: auto;
`;
const ShadeOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

function Background({ children, colors, poster }) {
  return (
    <StyledBackground
      color1={colors.at(0)}
      color2={colors.at(1)}
      color3={colors.at(2)}
      color4={colors.at(3)}
    >
      <PosterContainer>
        <StyledPoster src={poster} />
      </PosterContainer>
      <ShadeOverlay />
      {children}
    </StyledBackground>
  );
}

export default Background;
