document.getElementById("like").addEventListener("click", function () {
  this.classList.toggle("liked");
});

function updateUTCTime() {
  const now = new Date();
  const utcTime =
    now.getUTCHours().toString().padStart(2, "0") +
    ":" +
    now.getUTCMinutes().toString().padStart(2, "0") +
    ":" +
    now.getUTCSeconds().toString().padStart(2, "0") +
    " UTC";

  document.getElementById("utc-time").innerText = utcTime;
}

setInterval(updateUTCTime, 1000);
updateUTCTime();
