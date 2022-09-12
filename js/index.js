const { log } = console;

  console.log("DOM fully loaded and parsed");
  var menuBtn = document.getElementById("menu-button");
  var closeBtn = document.getElementById("close-btn");
var menu = document.getElementById("nav-items");
  var links = document.getElementsByClassName(".inter-link");
menuBtn.addEventListener("click", function () {
  menu.classList.add("menu-shown");
  closeBtn.style.display = "block";
});
  closeBtn.addEventListener("click", function () { 
  closeBtn.style.display = "none";
  menu.classList.remove("menu-shown");
  }
);
menu.addEventListener("click", function () {
  closeBtn.style.display = "none";
  menu.classList.remove("menu-shown");
});



