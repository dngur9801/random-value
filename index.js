const showScoreEl = document.querySelector('#showScore');
const scoreEl = document.querySelector('#score');
const buttons = document.querySelector('#buttons');
const randomValueArr = [100, 200, 300];
let totalScore = 0;

const onClickButton = () => {
  const randomValue = getRandomValue();
  const totalValue = (totalScore += randomValue);
  randomBgColor();
  showScoreEl.innerHTML = randomValue;
  scoreEl.innerHTML = totalValue;
};

const getRandomValue = () => {
  const randomNum = Math.floor(Math.random() * randomValueArr.length);
  const randomValue = randomValueArr[randomNum];
  return randomValue;
};

const randomBgColor = () => {
  for (let button of buttons.children) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    if (Math.floor((red + green + blue) / 3) > 128) {
      button.style.color = 'black';
    } else {
      button.style.color = 'white';
    }
    button.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
};

for (let button of buttons.children) {
  button.addEventListener('click', onClickButton);
}
