
function redirectToExecutable() {
    const messageBox = document.getElementById("message-box");
    const message = messageBox.value.toLowerCase().trim(); //lower it, just in-case
    
    if (message === "play") {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //tell the page MILES SENT YA
    }
  }