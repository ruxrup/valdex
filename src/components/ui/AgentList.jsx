import styled from "styled-components";
import SearchBar from "./SearchBar";
import AgentInfo from "./AgentInfo";

const AgentListScreen = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const AgentListContainer = styled.div`
  position: absolute;
  height: 12rem;
  width: 52vw;
  bottom: 4rem;
  right: 8rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-start; /* Start from the beginning */
  align-items: center;
  overflow: hidden; /* Hide overflowing agents */
  transition: transform 0.5s ease;
`;

const AgentContainer = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 1.2rem;
  padding: 1rem;
  transition: transform 0.5s ease;

  backdrop-filter: blur(5px);
  background-color: ${(props) => props.accent};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const AgentFaceImg = styled.img`
  height: 90%;
  transition: 0.5s;
  &:hover {
    transform: translateY(-10px);
  }
`;

function AgentList({ agents, agentNo, setAgentNo }) {
  const selectAgent = (selectedAgentNo) => {
    setAgentNo(selectedAgentNo);
  };

  return (
    <AgentListScreen>
      <SearchBar agents={agents} setAgentNo={setAgentNo} />
      <AgentInfo agent={agents.at(agentNo)} />
      <AgentListContainer
        as={"swiper-container"}
        slides-per-view="8"
        space-between="20"
        scrollbar-clickable="true"
        mousewheel-invert="true"
      >
        {agents.map((agent, index) => (
          <swiper-slide key={index}>
            <AgentContainer
              key={index}
              onClick={() => selectAgent(index)}
              accent={
                agentNo === index ? "rgba(0, 0, 0, 0.20)" : "rgba(0, 0, 0, 0)"
              }
            >
              <AgentFaceImg src={agent.displayIcon} />
            </AgentContainer>
          </swiper-slide>
        ))}
      </AgentListContainer>
    </AgentListScreen>
  );
}

export default AgentList;
