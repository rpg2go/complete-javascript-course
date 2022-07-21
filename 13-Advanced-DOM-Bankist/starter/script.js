'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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
//           PAGE NAVIGATION        //
//////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener tp common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    //console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
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

// DOM Traversing

const traversing = DOMTraversing();

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

function eventPropagationBubblingCapture() {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const randomColor = () =>
    `rgb( ${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)} )`;

  console.log(randomColor());

  document.querySelector('.nav__link').addEventListener('click', function (e) {
    //console.log('LINK', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();
    //console.log(e.currentTarget === this);

    //stop propagation
    //  e.stopPropagation();
  });

  document.querySelector('.nav__links').addEventListener('click', function (e) {
    //console.log('CONTAINER', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();
  });

  document.querySelector('.nav').addEventListener('click', function (e) {
    //console.log('NAV', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();
  });
}

function DOMTraversing() {
  const h1 = document.querySelector('h1');

  //going downwards : child
  console.log(h1.querySelectorAll('.highlight'));
  console.log(h1.childNodes);
  console.log(h1.children);

  h1.firstElementChild.style.color = 'white';
  h1.lastElementChild.style.color = 'orangered';

  //going upwards : parents
  console.log(h1.parentNode);
  console.log(h1.parentElement);

  h1.closest('.header').style.background = 'var(--gradient-secondary)';
  h1.closest('h1').style.background = 'var(--gradient-primary)';

  //going sideways : siblings
  console.log(h1.previousElementSibling);
  console.log(h1.nextElementSibling);

  console.log(h1.previousSibling);
  console.log(h1.nextSibling);

  console.log(h1.parentElement.children);
  [...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
  });
}
