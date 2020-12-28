const buttonHex = document.getElementById('hex');
const buttonRgb = document.getElementById('rgb');
const colorBox = document.querySelector('.color-box');
const output = document.querySelector('.output-p');

const changeRgb = function () {
  let valuesArr = new Array(3).fill(0);
  for (const [i, value] of valuesArr.entries()) {
    valuesArr[i] = Math.trunc(Math.random() * 256);
  }
  colorBox.style.background = `rgb(${valuesArr})`;
  output.innerText = `rgb(${valuesArr.join(', ')})`;
};

const changeHex = function () {
  let finalValue = '#';
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (let i = 0; i < 6; i++) {
    finalValue += values[Math.trunc(Math.random() * values.length)];
  }
  colorBox.style.background = `${finalValue}`;
  output.innerText = `${finalValue}`;
};

buttonHex.addEventListener('click', changeHex);
buttonRgb.addEventListener('click', changeRgb);
