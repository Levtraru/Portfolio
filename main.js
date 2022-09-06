window.addEventListener("load", () => {


  
  // Language change function
  $(".lang-en").hide();
  $("#switch-lang").click(function () {
    $(".lang-en").toggle();
    $(".lang-es").toggle();
  });
});

// Training Tabs
function openTab(tabName){
  var x = $(".training-desc");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}