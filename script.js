window.addEventListener("DOMContentLoaded", function() {
    const names = ["Bob", "Jeff", "Jonas", "Stephanie"];
    const namesList = document.getElementById("namesList");

    names.forEach(function(name) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        namesList.appendChild(listItem);
    });
});
