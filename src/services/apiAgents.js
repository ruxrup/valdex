export async function getAgents() {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents");
    if (!response.ok) {
      throw new Error("Failed to fetch agents data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching agents data:", error);
    throw error;
  }
}
