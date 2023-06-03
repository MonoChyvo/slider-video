function toggleMenu() {
  const menuIcon = document.querySelector('.menuicon');
  const navBar = document.getElementById('navbar');
  menuIcon.classList.toggle('active');
  navBar.classList.toggle('active');
}

const slideShowVideo = document.getElementById('slideshow');
const slideVideo = slideShowVideo.getElementsByTagName('video');
let indexVideo = 0;

function nextSlideVideo() {
  slideVideo[indexVideo].classList.remove('active');
  indexVideo = (indexVideo + 1) % slideVideo.length;
  slideVideo[indexVideo].classList.add('active');
}

function prevSlideVideo() {
  slideVideo[indexVideo].classList.remove('active');
  indexVideo = (indexVideo - 1 + slideVideo.length) % slideVideo.length;
  slideVideo[indexVideo].classList.add('active');
}
const slideShowText = document.getElementById('slideshowtext');
const slideText = slideShowText.getElementsByTagName('div');
let indexText = 0;

function nextSlideText() {
  slideText[indexText].classList.remove('active');
  indexText = (indexText + 1) % slideText.length;
  slideText[indexText].classList.add('active');
}

function prevSlideText() {
  slideText[indexText].classList.remove('active');
  indexText = (indexText - 1 + slideText.length) % slideText.length;
  slideText[indexText].classList.add('active');
}


