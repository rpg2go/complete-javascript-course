'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
//           MAIN                   //
//////////////////////////////////////

// Selecting elements
//const message = selectingCreatingDeletingElements();

// Sytles
// workingWithStylesAttributesClasses(message);

// Implementing Smooth Scrolling
const scrolling = implementingSmoothScrolling();

// Type of events and event handler
const eventHandler = typeOfEventsAndEventHandler();

// Event propagagion: Bubbling and Capturing
const eventPropagation = eventPropagationBubblingCapture();

///////////////////////////////////////
//           FUNCTIONS              //
//////////////////////////////////////

function selectingCreatingDeletingElements() {
  console.log(document.documentElement);
  console.log(document.head);
  console.log(document.body);
  const header = document.querySelector('.header');
  const allSections = document.querySelectorAll('.section');
  console.log(allSections);

  document.getElementById('section--1');
  const allButtons = document.getElementsByTagName('button');
  console.log(allButtons);
  console.log(document.getElementsByClassName('btn'));

  // Creating and inserting elements
  const message = document.createElement('div');
  message.classList.add('cookie-message');
  message.textContent = 'We use cookies for improved functionality and analytics.';
  message.innerHTML =
    'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

  // header.prepend(message);
  header.append(message);
  // header.append(message.cloneNode());
  // header.before(message);
  console.log(document.head);

  //Delete elements
  document.querySelector('.btn--close-cookie').addEventListener('click', function () {
    //message.remove();
    message.parentElement.removeChild(message);
  });
  return message;
}

function workingWithStylesAttributesClasses(message) {
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';

  console.log(getComputedStyle(message).color);
  console.log(getComputedStyle(message).width);
  console.log(getComputedStyle(message).height);
  message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

  document.documentElement.style.setProperty('--color-primary', 'orangered');

  // Atributes - standard attributes
  const logo = document.querySelector('.nav__logo');
  console.log(logo.src);
  console.log(logo.alt);
  console.log(logo.className);

  // non-standard attribues
  logo.alt = 'Beautiful minimalist logo';
  console.log(logo.getAttribute('designer'));
  logo.setAttribute('company', 'Bankist');

  console.log(logo.src);
  console.log(logo.getAttribute('src'));

  const link = document.querySelector('.twitter-link');
  console.log(link.href);
  console.log(link.getAttribute('href'));

  // Data attributes
  console.log(logo.dataset.versionNumber);

  // Classes -
  logo.classList.add('c');
  logo.classList.remove('c');
  logo.classList.toggle('c');
  logo.classList.contains('c'); // not includes

  // Don't use it !!!!
  logo.className = 'jonas';
}

function implementingSmoothScrolling() {
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());

    console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);

    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    );

    //Scrolling
    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

    //old scholl mechanism
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    // new schroll mechanism
    section1.scrollIntoView({ behavior: 'smooth' });
  });
}

function typeOfEventsAndEventHandler() {
  const h1 = document.querySelector('h1');

  const alertH1 = function (e) {
    alert('addEventListener: You are reading the heading :D');
  };

  h1.addEventListener('mouseenter', alertH1);

  setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

  // h1.addEventListener('mouseenter', function (e) {
  //   alert('addEventListener: You are reading the heading :D');
  // });

  // h1.onmouseenter = function (e) {
  //   alert('addEventListener: You are reading the heading :D');
  // };
}

function eventPropagationBubblingCapture() {}
