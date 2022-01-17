const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

var photosArray = [];
var ready = false;
var imagesLoaded = 0;
var totalImages = 0;
let initialLoad = true;

// Unsplash API
let count = 5;
const apiKey = 'dpVNueVA6d69faRRQ0aV0jee3LJuZ4tQFewd_rbkkn8'


function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded == totalImages) {
    ready = true;
    loader.hidden = true;
    initialLoad = false;
  }
}

function displayPhoto() {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    });

    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })

    img.addEventListener('load', imageLoaded);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhoto() {
  try {
    imagesLoaded = 0;
    totalImages = (initialLoad) ? 5 : 30;
    ready = false;
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${totalImages}`;
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhoto();
  } catch (error) {
    window.alert(error);
  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    getPhoto();
  }
})

getPhoto()