function handleKeyPress(event) {
  if (event.keyCode === 13) {
    redirectToExecutable();
  }
}
function redirectToExecutable() {
    const messageBox = document.getElementById("message-box");
    const message = messageBox.value.toLowerCase().trim(); //lower it, just in-case
    
    if (message === "play") {
      window.location.href = "game/play.html"; //tell the page MILES SENT YA
    }
  }