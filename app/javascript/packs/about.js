
  document.getElementById("aboutCard1").addEventListener("click", changeHeight);
  document.getElementById("aboutCard2").addEventListener("click", changeHeight);
  document.getElementById("aboutCard3").addEventListener("click", changeHeight);
  document.getElementById("aboutCard4").addEventListener("click", changeHeight);

  function changeHeight() {
    event.currentTarget.classList.toggle("aboutCardClicked");
}



//   function changeHeightReturn() {
//     event.currentTarget.classList("aboutCard1");
// }
  // document.getElementById("aboutCard2").addEventListener("click", changeHeight);
  // function changeHeightReturn() {
  //   event.currentTarget.classList.toggle("aboutCard");

//   document.getElementById("aboutCard3").addEventListener("mouseout", changeHeight);

//   document.getElementById("aboutCard4").addEventListener("mouseout", changeHeight);

// }
