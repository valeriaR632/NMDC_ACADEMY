document.addEventListener("DOMContentLoaded", () => {
  fetch("Nav.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;
    });
});


