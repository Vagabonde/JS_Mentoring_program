const result = document.querySelector('.input-result');
const input = document.querySelector('input');
const values = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F'];
const charactersCount = 6;

function showMessage() {
  result.textContent = input.value;
}

function changeToRandomColor() {
  let color = '#';
  for (let i = 0; i < charactersCount; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }
  result.style.backgroundColor = color;
}

function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function throttle(func, delay) {
  let throttled;
  return function() {
    if (!throttled) {
      func();
      throttled = true;
      setTimeout(() => throttled = false, delay);
    }
  };
}

input.addEventListener('input', debounce(showMessage, 1000));
result.addEventListener('click', throttle(changeToRandomColor, 2000));
