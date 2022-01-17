const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
  } catch (error) {
    console.error(error);
  }
}

// button.addEventListener('click', () => {
//   selectMediaStream();
// })

button.addEventListener('click', async () => {
  await selectMediaStream();

  document.querySelector('.button-container').hidden = true;
  videoElement.hidden = false;
  videoElement.onloadedmetadata = () => {
    videoElement.play();
    videoElement.requestPictureInPicture();
  };
})
