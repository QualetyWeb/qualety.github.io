// Replace with your BattleMetrics API key
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjU4ZGRhMTNmOTkxZGY2YmIiLCJpYXQiOjE2ODQyNjU5NTQsIm5iZiI6MTY4NDI2NTk1NCwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo3MDgzOTgifQ.wslNER_JIVtPJawPL0fKl-B8BJkz0ZicyjmQpTj7DM8";

// Array of servers to query
const servers = [
  {
    name: "Server 1",
    address: "74.91.124.80:27015"
  },
  {
    name: "Server 2",
    address: "74.91.124.80:27015"
  },
  {
    name: "Server 3",
    address: "192.223.26.36:27015"
  }
];

// Function to fetch server data and update the webpage
async function fetchServerData() {
  const serverList = document.getElementById("serverList");

  for (const server of servers) {
    try {
      const response = await fetch(`https://api.battlemetrics.com/servers?filter[game]=csgo&filter[address]=${server.address}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const playerCount = data.data[0].attributes.players;

        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const addressCell = document.createElement("td");
        const playerCountCell = document.createElement("td");

        nameCell.textContent = server.name;
        addressCell.textContent = server.address;
        playerCountCell.textContent = playerCount;

        row.appendChild(nameCell);
        row.appendChild(addressCell);
        row.appendChild(playerCountCell);

        serverList.appendChild(row);
      } else {
        console.log(`Failed to fetch data for ${server.name}`);
      }
    } catch (error) {
      console.log(`Error fetching data for ${server.name}: ${error}`);
    }
  }
}

// Call the fetchServerData function when the page loads
window.addEventListener("DOMContentLoaded", fetchServerData);
