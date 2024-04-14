import { useEffect, useState } from "react";
import { getAgents } from "../../services/apiAgents";

function useAgents() {
  const [isLoading, setIsLoading] = useState(true);
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();
        setAgents(data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return { isLoading, agents };
}

export default useAgents;
