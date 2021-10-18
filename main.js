

const darkMode = document.querySelector("#dark-mode");

darkMode.addEventListener('change', function() {
  if (this.checked) {
    console.log("DarkMode is on!");
  } else {
    console.log("DarkMode is off..");
  }
});
