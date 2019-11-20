'use strict';
var open = document.querySelector('.header-top__open');
var popup = document.querySelector('.write-us');
var close = document.querySelector('.write-us__close');

var questForm = document.querySelector('.question-form__form');
var name = questForm.querySelector('[name=name]');
var tel = questForm.querySelector('[name=tel]');
var question = questForm.querySelector('[name=question]');

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
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('write-us--show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('write-us--show')) {
      evt.preventDefault();
      popup.classList.remove('write-us--show');
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
  }
});


questForm.addEventListener('submit', function (evt) {
  if (!name.value || !tel.value || !question.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('tel', tel.value);
      localStorage.setItem('question', question.value);
    }
  }
});
