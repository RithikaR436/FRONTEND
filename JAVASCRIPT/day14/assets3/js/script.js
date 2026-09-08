const cardImg = document.getElementById('cardImg');
cardImg.src = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=";

const btn = document.getElementById('btn');
const details = document.querySelector('.details');

btn.addEventListener('click', () => {
  details.classList.toggle('hide');
});