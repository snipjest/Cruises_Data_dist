"use strict";

var filterBtn = document.querySelector('.header__filter-btn');
var filter = document.querySelector('.filter');
var filterClose = document.querySelector('.filter__close');
var filterMobBtn = document.querySelector('.filter-mob-btn');

// Добавляем класс 'open' к .filter при клике на .header__filter-btn
filterBtn.addEventListener('click', function () {
  filter.classList.add('open');
});

// Убираем класс 'open' у .filter при клике на .filter__close
filterClose.addEventListener('click', function () {
  filter.classList.remove('open');
});

// Обработчик события "keydown" на документе
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    // Проверяем, что нажата клавиша Esc
    filter.classList.remove('open'); // Убираем класс "open"
  }
});

// Открытие фильтра на моб
filterMobBtn.addEventListener('click', function () {
  filterMobBtn.classList.toggle('open');
  filter.classList.toggle('open');
});

// Заменяем все символы, которые не являются цифрами, на пустую строку
var inputs = document.querySelectorAll('.filter__price input');
inputs.forEach(function (input) {
  input.addEventListener('input', function () {
    input.value = input.value.replace(/[^0-9]/g, '');
  });
});

// Календарь
var calendarBtn = document.querySelector('.filter__calendar');
var selectedDatesSpan = calendarBtn.querySelector('.selected-dates');

// Инициализируем Flatpickr с выбором диапазона дат
flatpickr(calendarBtn, {
  mode: 'range',
  // Режим выбора диапазона
  dateFormat: 'd.m.Y',
  // Формат даты dd.mm.yyyy
  locale: 'ru',
  onClose: function onClose(selectedDates) {
    // Проверяем, был ли выбран диапазон
    if (selectedDates.length === 2) {
      // Форматируем выбранный диапазон и записываем его в span
      var startDate = selectedDates[0];
      var endDate = selectedDates[1];
      var formattedRange = "".concat(formatDate(startDate), " \u2014 ").concat(formatDate(endDate));
      selectedDatesSpan.textContent = formattedRange; // Записываем в span внутри кнопки
    }
  }
});

// Функция для форматирования даты в нужный формат (dd.mm.yyyy)
function formatDate(date) {
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var year = date.getFullYear();
  return "".concat(day, ".").concat(month, ".").concat(year);
}

// кастомный scrollbar simplebar.js
document.querySelectorAll('.simplebar').forEach(function (el) {
  new SimpleBar(el, {
    autoHide: false
  });
});