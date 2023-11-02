function displayAndPlay(popup, overlay, player) {
  return function () {
    popup.style.display = "block";
    overlay.style.display = "block";
    player.play();
  };
}

function closeButtonTrigger(popup, overlay, player) {
  return function () {
    popup.style.display = "none";
    overlay.style.display = "none";
    player.pause();
  };
}

function popUpVideo() {
  const videoPopups = [
    {
      showButton: document.getElementById("showVideoButton"),
      closeButton: document.getElementById("closeVideoButton"),
      popup: document.getElementById("videoPopup"),
      player: document.getElementById("popupVideoPlayer"),
      overlay: document.getElementById("overlay"),
    },
    {
      showButton: document.getElementById("showVideoButton2"),
      closeButton: document.getElementById("closeVideoButton2"),
      popup: document.getElementById("videoPopup2"),
      player: document.getElementById("popupVideoPlayer2"),
      overlay: document.getElementById("overlay"),
    },
  ];

  videoPopups.forEach(({ showButton, closeButton, popup, player,overlay }) => {
    showButton.addEventListener("click", displayAndPlay(popup, overlay, player));
    closeButton.addEventListener("click", closeButtonTrigger(popup, overlay, player));
  });
}

document.addEventListener("DOMContentLoaded", popUpVideo);
