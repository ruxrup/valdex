import { useState } from "react";
import styled from "styled-components";

const SearchBarScreen = styled.div`
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  position: absolute;
  height: 30rem;
  top: 4rem;
  left: 145rem;
  font-family: "Montserrat";
`;

const Bar = styled.input`
  height: 4.5rem;
  width: 32rem;
  padding: 1rem;
  background-color: #00000024;
  outline: none;
  color: white;
  padding-left: 2rem;
  border-radius: 1.2rem;
  margin-bottom: 1rem;
  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const ResultsContainer = styled.div`
  max-height: 20rem;
  width: 32rem;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const ResultContainer = styled.div`
  width: 32rem;
  height: 6rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  background-color: #00000024;
  padding-left: 2rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const ResultPortrait = styled.img`
  height: 3.5rem;
`;

const ResultText = styled.span`
  font-size: 2rem;
  font-weight: 400;
  color: white;
  font-family: "Montserrat";
`;

function SearchBar({ agents, setAgentNo }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (value) => {
    setInput(value);
    const filteredAgents = agents.filter((agent) => {
      return (
        value &&
        agent.isPlayableCharacter &&
        agent.displayName.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(filteredAgents);
  };
  console.log(results);

  const handleAgentSelect = (uuid) => {
    setResults([]);
    setInput("");
    agents.forEach((a, i) => {
      if (a.uuid === uuid) {
        setAgentNo(i);
      }
    });
  };

  return (
    <SearchBarScreen>
      <SearchBarContainer>
        <Bar
          placeholder="Search your agent"
          type="search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <ResultsContainer>
          {results.map((agent, i) => (
            <ResultContainer
              key={i}
              onClick={() => {
                handleAgentSelect(agent.uuid);
              }}
            >
              <ResultPortrait src={agent.displayIcon} />
              <ResultText>{agent.displayName}</ResultText>
            </ResultContainer>
          ))}
        </ResultsContainer>
      </SearchBarContainer>
    </SearchBarScreen>
  );
}

export default SearchBar;
