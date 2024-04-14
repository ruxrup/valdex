import styled from "styled-components";

const PosterContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: absolute;
`;
const StyledPoster = styled.img`
  position: relative;
  top: -8rem;
  left: -30rem;
  height: 120%;
  width: auto;
`;

function AgentPortrait({ portrait }) {
  return (
    <PosterContainer>
      <StyledPoster src={portrait} />
    </PosterContainer>
  );
}

export default AgentPortrait;
