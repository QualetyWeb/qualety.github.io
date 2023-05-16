// Replace "YOUR_BATTLEMETRICS_API_KEY" with your actual BattleMetrics API key
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjU4ZGRhMTNmOTkxZGY2YmIiLCJpYXQiOjE2ODQyNjU5NTQsIm5iZiI6MTY4NDI2NTk1NCwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo3MDgzOTgifQ.wslNER_JIVtPJawPL0fKl-B8BJkz0ZicyjmQpTj7DM8";

// Replace "YOUR_SERVER_ID_1", "YOUR_SERVER_ID_2", etc. with the actual server IDs you want to query
const serverIds = ["192.223.26.36:27015", "74.91.124.80:27015"];

// Function to fetch server information
async function fetchServerInfo(serverId) {
  const url = `https://api.battlemetrics.com/servers/${serverId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();
    const playerCount = data.data.attributes.players;
    return playerCount;
  } catch (error) {
    console.error(`Failed to fetch server information for server ID ${serverId}`, error);
    return "N/A";
  }
}

// Function to update the player count in the HTML
function updatePlayerCount(serverId, playerCount) {
  const playerCountElement = document.getElementById(`player-count-${serverId}`);
  playerCountElement.textContent = playerCount;
}

// Function to fetch and update player counts for all servers
async function updatePlayerCounts() {
  for (const serverId of serverIds) {
    const playerCount = await fetchServerInfo(serverId);
    updatePlayerCount(serverId, playerCount);
  }
}

// Call the function to initially update the player counts
updatePlayerCounts();

// Set an interval to update the player counts every 30 seconds (adjust as needed)
setInterval(updatePlayerCounts, 30000);
