
//this alters the profile pictue on a mouseover event

document.getElementById("profile").addEventListener("click", repeatImage);

function repeatImage() {
  event.currentTarget.classList.toggle("profileHover");
}

//code below used for showing homepage sections after a brief delay. This was superceded by
// css using keyframes, but code kept regardless - JIC.

// setTimeout(function(){
// document.getElementById('delay1').style.visibility = "visible";
// },0);

// setTimeout(function(){
// document.getElementById('delay2').style.visibility = "visible";
// },1500);

// setTimeout(function(){
// document.getElementById('delay3').style.visibility = "visible";
// },3000);
