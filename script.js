document.addEventListener('DOMContentLoaded', function() {
    var tableBody = document.querySelector('#serverTable tbody');
    
    function fetchServerStatus() {
      fetch('https://api.battlemetrics.com/servers?filter[game]=csgo&fields[server]=name,address,playerCount')
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch server status');
          }
        })
        .then(function(data) {
          populateServerTable(data.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function populateServerTable(serverData) {
      tableBody.innerHTML = '';
      
      serverData.forEach(function(server) {
        var row = document.createElement('tr');
        
        var nameCell = document.createElement('td');
        nameCell.textContent = server.attributes.name;
        
        var addressCell = document.createElement('td');
        addressCell.textContent = server.attributes.address;
        
        var playerCountCell = document.createElement('td');
        playerCountCell.textContent = server.attributes.playerCount;
        
        row.appendChild(nameCell);
        row.appendChild(addressCell);
        row.appendChild(playerCountCell);
        
        tableBody.appendChild(row);
      });
    }
    
    fetchServerStatus();
  });
  