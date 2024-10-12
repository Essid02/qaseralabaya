function openTab(location) {
  // Hide all tab contents
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".tab-button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show the selected tab content
  document.getElementById(location).classList.add("active");

  // Add active class to the clicked button
  event.target.classList.add("active");
}

document
  .getElementById("mobile-menu")
  .addEventListener("click", function (event) {
    const navLinks = document.querySelector(".nav-links");
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Prevent the click from propagating to the document right away
    event.stopPropagation();
  });

// Close the menu when clicking anywhere (including inside the menu)
document.addEventListener("click", function () {
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  // Remove active class from both button and nav links to close the menu
  mobileMenuButton.classList.remove("active");
  navLinks.classList.remove("active");
});
