const icons = document.querySelectorAll(".img-change");
const details = document.querySelectorAll(".expand");

icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    // Toggle icon
    if (icon.src.match("assets/images/icon-plus.svg")) {
      icon.src = "assets/images/icon-minus.svg";
    } else {
      icon.src = "assets/images/icon-plus.svg";
    }

    // Toggle corresponding detail
    if (details[index].style.display === "block") {
      details[index].style.display = "none";
    } else {
      details[index].style.display = "block";
    }
  });
});
