const names = ["Bob", "Jeff", "Jonas", "Stephanie"];

window.addEventListener("DOMContentLoaded", () => {
  const namesList = document.getElementById("names-list");
  names.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    namesList.appendChild(listItem);
  });
});
