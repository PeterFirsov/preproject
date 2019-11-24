'use strict';
var open = document.querySelector('.header-top__open');
var popup = document.querySelector('.write-us');
var close = document.querySelector('.write-us__close');

var questForm = document.querySelector('.write-us-form');
var you = questForm.querySelector('[name=name]');
var phone = questForm.querySelector('[name=phone]');
var question = questForm.querySelector('[name=letter]');

var mainPhone = document.querySelector('input[type=tel]');

var navOpener = document.querySelector('.page-footer__nav h3');
var contOpener = document.querySelector('.page-footer__contacts h3');
var list = document.querySelector('.page-footer__nav-wrapper');
var contacts = document.querySelector('.page-footer__coords');

var featureLink = document.querySelector('.representation__link');
var featureAncor = document.querySelector('.features [name=features]');

var questionLink = document.querySelector('.representation__button');
var questionAncor = document.querySelector('.question-form > a');

var scrollIt = function (item) {
  item.scrollIntoView({behavior: 'smooth'});
};

featureLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  scrollIt(featureAncor);
});

questionLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  scrollIt(questionAncor);
});

navOpener.addEventListener('click', function (evt) {
  evt.preventDefault();
  list.classList.toggle('page-footer--close');
  navOpener.classList.toggle('page-footer--plus');
  if (!contacts.classList.contains('page-footer--close')) {
    contacts.classList.toggle('page-footer--close');
    contOpener.classList.toggle('page-footer--plus');
  }
});

contOpener.addEventListener('click', function (evt) {
  evt.preventDefault();
  contacts.classList.toggle('page-footer--close');
  contOpener.classList.toggle('page-footer--plus');
  if (!list.classList.contains('page-footer--close')) {
    list.classList.toggle('page-footer--close');
    navOpener.classList.toggle('page-footer--plus');
  }
});

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

open.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('write-us--show');
  document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('write-us--show');
  document.body.style.overflow = '';
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('write-us--show')) {
      evt.preventDefault();
      popup.classList.remove('write-us--show');
      document.body.style.overflow = '';
    }
  }
});

questForm.addEventListener('submit', function (evt) {
  if (!you.value || !phone.value || !question.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', you.value);
      localStorage.setItem('phone', phone.value);
      localStorage.setItem('letter', question.value);
    }
  }
});

(function (evt) {
  evt.matches = evt.matches || evt.mozMatchesSelector || evt.msMatchesSelector || evt.oMatchesSelector || evt.webkitMatchesSelector;
  evt.closest = evt.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) {
      return null
    } else return this.parentElement.closest(selector)
  };
}(Element.prototype));

popup.addEventListener('mouseup', function (evt) {
  if (evt.target.closest('.write-us__wrapper') === null) {
    popup.classList.remove('write-us--show');
    document.body.style.overflow = '';
  }
});


phone.addEventListener('keydown', function (event) {
  if (!(event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Backspace' || event.key === 'Tab')) {
    event.preventDefault();
  }
  var mask = '+7 (111) 111-11-11'; // Задаем маску

  if (/[0-9\+\ \-\(\)]/.test(event.key)) {
    // Здесь начинаем сравнивать this.value и mask
    // к примеру опять же
    var currentString = phone.value;
    var currentLength = currentString.length;
    if (/[0-9]/.test(event.key)) {
      if (mask[currentLength] === '1') {
        phone.value = currentString + event.key;
      } else {
        for (var i = currentLength; i < mask.length; i++) {
          if (mask[i] === '1') {
            phone.value = currentString + event.key;
            break;
          }
          currentString += mask[i];
        }
      }
    }
  }
});

mainPhone.addEventListener('keydown', function (event) {
  if (!(event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Backspace' || event.key === 'Tab')) {
    event.preventDefault();
  }
  var mask = '+7 (111) 111-11-11'; // Задаем маску

  if (/[0-9\+\ \-\(\)]/.test(event.key)) {
    // Здесь начинаем сравнивать this.value и mask
    // к примеру опять же
    var currentString = mainPhone.value;
    var currentLength = currentString.length;
    if (/[0-9]/.test(event.key)) {
      if (mask[currentLength] === '1') {
        mainPhone.value = currentString + event.key;
      } else {
        for (var i = currentLength; i < mask.length; i++) {
          if (mask[i] === '1') {
            mainPhone.value = currentString + event.key;
            break;
          }
          currentString += mask[i];
        }
      }
    }
  }
});
