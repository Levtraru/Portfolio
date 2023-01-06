window.addEventListener("load", () => {
  // Language change function
  /** 
   * Toggles between English and Spanish by clicking the language button
   * in the navbar
   */
  $(".lang-en").hide();
  $("#switch-lang").click(function () {
    $(".lang-en").toggle();
    $(".lang-es").toggle();
  });
});

// Training Tabs
/**
 * Used in the section: About Me — My Training.
 * Displays the information of each tab.
 */
function openTab(tabName){
  var x = $(".training-desc");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Get viewheight
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);