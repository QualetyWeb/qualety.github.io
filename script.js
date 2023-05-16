function getPlayerCount() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.battlemetrics.com/servers/YOUR_SERVER_ID", true); // Replace YOUR_SERVER_ID with the actual server ID
    xhr.setRequestHeader("Authorization", "Bearer YOUR_BATTLEMETRICS_API_KEY"); // Replace YOUR_BATTLEMETRICS_API_KEY with your actual API key
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var playerCount = response.data.attributes.players;
            document.getElementById("playerCount").innerText = "Player Count: " + playerCount;
        }
    };
    xhr.send();
}
