import styled from "styled-components";

const InfoContainer = styled.div`
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const AgentRoleCardContainer = styled.div`
  height: 5rem;
  width: fit-content;
  position: relative;
  top: 15rem;
  left: 82rem;
  border-radius: 1.2rem;
  background-color: #00000015;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
`;

const AgentAbilitiesContainer = styled.div`
  position: relative;
  height: auto;
  width: 95rem;
  top: 23rem;
  left: 82rem;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
`;

const TransparentCard = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  position: absolute;
  bottom: 0rem;
  left: 0;
  width: 100%;
  max-height: 50rem;
  padding: 1rem;
  background-color: ${(props) => `#${props.bgColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(100rem);
  opacity: 0;
`;

const AgentAbilityContainer = styled.div`
  position: relative;
  height: 100%;
  width: 30rem;
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 1.2rem;
  font-size: 2rem;
  font-weight: 600;
  font-family: "Montserrat";

  &:hover {
    ${TransparentCard} {
      opacity: 95%; /* Show the transparent card on hover */
    }
  }
`;

const AgentAbilityImgContainer = styled.div`
  height: 6rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border-radius: 1.2rem;
  padding: 1rem;
  border: 1px solid ${(props) => `#${props.accent}`};
`;

const AgentAbilityImg = styled.img`
  height: 80%;
  margin-right: 2rem;
`;
const AgentAbilityText = styled.span`
  font-size: 1.6rem;
  font-family: "Montserrat";
  color: white;
`;

const AgentRoleCard = styled.img`
  height: 300%;
`;
const AgentRoleText = styled.span`
  font-size: 3rem;
  font-weight: 500;
  font-family: "Montserrat";
  color: white;
`;

const AgentName = styled.span`
  position: relative;
  top: 15rem;
  left: 82rem;
  font-size: 10rem;
  font-weight: 500;
  color: white;
`;
const AgentCodeName = styled.span`
  position: relative;
  top: 13rem;
  left: 82rem;
  font-size: 3rem;
  font-weight: 500;
  font-family: "Montserrat";
  color: white;
`;
const AgentDescription = styled.div`
  position: relative;
  height: 20rem;
  width: 60rem;
  top: 17rem;
  left: 82rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border-radius: 1.2rem;
  font-size: 2rem;
  font-weight: 600;
  font-family: "Montserrat";
  padding: 2rem;
  border-left: 1rem solid ${(props) => `#${props.accent}`};
`;

function AgentInfo({ agent }) {
  return (
    <InfoContainer>
      <AgentRoleCardContainer role={agent.role}>
        <AgentRoleCard src={agent.role.displayIcon} />
        <AgentRoleText>{agent.role.displayName}</AgentRoleText>
      </AgentRoleCardContainer>
      <AgentName>{agent.displayName}</AgentName>
      <AgentCodeName>({agent.developerName})</AgentCodeName>
      <AgentDescription accent={agent.backgroundGradientColors.at(3)}>
        {agent.description}
      </AgentDescription>
      <AgentAbilitiesContainer>
        {agent.abilities.slice(0, 4).map((a, i) => (
          <AgentAbilityContainer key={i}>
            <AgentAbilityImgContainer>
              <AgentAbilityImg src={a.displayIcon} />
              <AgentAbilityText>{a.displayName}</AgentAbilityText>
              <TransparentCard bgColor={agent.backgroundGradientColors.at(2)}>
                {a.description}
              </TransparentCard>
            </AgentAbilityImgContainer>
          </AgentAbilityContainer>
        ))}
      </AgentAbilitiesContainer>
    </InfoContainer>
  );
}

export default AgentInfo;
