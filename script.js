// Array to store the names
var names = ['Bob', 'Jeff', 'Jonas', 'Stephanie'];

// Function to add a name to the list
function addName() {
  var nameInput = document.getElementById('nameInput');
  var name = nameInput.value.trim();

  if (name !== '') {
    names.push(name);
    nameInput.value = '';
    renderNameList();
  }
}

// Function to render the name list
function renderNameList() {
  var nameList = document.getElementById('nameList');
  nameList.innerHTML = '';

  names.forEach(function(name) {
    var li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
  });
}

// Initial rendering of the name list
renderNameList();
