import AgentPortrait from "../components/ui/AgentPortrait";
import Background from "../components/ui/background";
import useAgents from "../features/agents/useAgents";
import { useState } from "react";
import AgentList from "../components/ui/AgentList";
import styled from "styled-components";

const LoadingScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
`;

function Agentselect() {
  let { isLoading, agents } = useAgents();
  const [agentNo, setAgentNo] = useState(0);
  if (isLoading || false) {
    return <LoadingScreen>Loading...</LoadingScreen>;
  }
  agents = agents.filter((agent) => agent.isPlayableCharacter);
  return (
    <Background
      colors={agents.at(agentNo)["backgroundGradientColors"]}
      poster={agents.at(agentNo)["background"]}
    >
      <AgentPortrait portrait={agents.at(agentNo)["fullPortrait"]} />
      <AgentList agents={agents} agentNo={agentNo} setAgentNo={setAgentNo} />
    </Background>
  );
}

export default Agentselect;
