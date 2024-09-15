const imageToggle1 = document.getElementById("image-toggle1");
const popup1 = document.getElementById("popup1");
const close1 = document.getElementById("close1");

imageToggle1.addEventListener("click", function() {
  popup1.style.display = "block";
});

close1.addEventListener("click", function() {
  popup1.style.display = "none";
});

const uploadVideoLink = document.getElementById("upload-video-li");
const uploadVideoContainer = document.getElementById("upload-video-container");

uploadVideoLink.addEventListener("click", function() {
  uploadVideoContainer.style.display = "block";
});

const videoFileInput = document.getElementById("video-file-input");

videoFileInput.addEventListener("change", function() {
  const fileName = videoFileInput.value.split("\\").pop();
  const uploadVideoContent = document.querySelector("#popup1 .popup-content");
  uploadVideoContent.innerHTML += `<p>Selected file: ${fileName}</p>`;
});