const isNumber = (number) => (!isNaN(parseFloat(number)) && isFinite(number))
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min)

const btn = document.querySelector('.check');
const input = document.querySelector('input');
const message = document.querySelector('.message')
const count = document.querySelector('.count')
const attempts = document.querySelector('.arrAttempts')
console.log(attempts)
const game = () => {
  const randomNum = getRandomNum(1, 100)
  let numberOfattempts = 0;
  const arrAttempts = [];

  return function repeatGame() {
    let num = input.value;
    if(isNumber(num)) {
      let userNum = +num;
      if(userNum < randomNum) {
        numberOfattempts++
        arrAttempts.push(userNum)
        message.textContent = 'Too Low'
        console.log(arrAttempts)
      } else if(userNum > randomNum) {
        numberOfattempts++
        arrAttempts.push(userNum)
        message.textContent = 'Too hight'
      } else {
        numberOfattempts++
        message.textContent = 'You found the number'
        count.textContent = `Количество затраченных попыток: ${numberOfattempts}`
        attempts.textContent = `Ваши попытки: ${arrAttempts.join(', ')}`
      }
    } else {
      message.textContent = `Number is required`
    }
  }
}
console.dir(game())
const startGame = game()
btn.addEventListener('click', startGame)
