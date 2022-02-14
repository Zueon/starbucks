const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); //const searchInputEl = document.querySelector('.search input');

searchEl.addEventListener('click', function () {
  // Logic
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  // 요소의 클래스 정보객체? 속성?? 추가
  searchEl.classList.add('focused');
  //searchInputEl 요소가 focus되면 searchEl요소의 속성으로 focused를 추가한다
  searchInputEl.setAttribute('placeholder', '통합검색'); // 속성이름은 placeholder이고 값은 통합검색
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
