const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = '#fff';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
const slides = document.querySelectorAll('.slider img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let slideIndex = 0;
slides[slideIndex].style.display = 'block';
function nextSlide() {
  slides[slideIndex].style.display = 'none';
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = 'block';
}
function prevSlide() {
  slides[slideIndex].style.display = 'none';
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].style.display = 'block';
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData).toString()
  });
  
  if (response.ok) {
    nameInput.value = '';
    emailInput.value = '';
    messageTextarea.value = '';
    alert('Your message has been sent!');
  } else {
    alert('There was a problem sending your message. Please try again.');
  }
});
