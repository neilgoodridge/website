
  document.getElementById("aboutCard1").addEventListener("click", changeHeight);
  document.getElementById("aboutCard2").addEventListener("click", changeHeight);
  document.getElementById("aboutCard3").addEventListener("click", changeHeight);
  document.getElementById("aboutCard4").addEventListener("click", changeHeight);

  function changeHeight() {
    event.currentTarget.classList.toggle("aboutCardClicked");
}

