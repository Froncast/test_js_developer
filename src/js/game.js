const isNumber = (number) => (!isNaN(parseFloat(number)) && isFinite(number))
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min)

const btn = document.querySelector('.check');
const input = document.querySelector('input');
const message = document.querySelector('.message')
const count = document.querySelector('.count')
const attempts = document.querySelector('.arrAttempts')

const game = () => {
  const randomNum = getRandomNum(1, 100)
  let numberOfattempts = 0;
  const arrAttempts = [];
  
  console.log(randomNum)
  return function repeatGame() {
    let num = input.value;
    if (isNumber(num)) {
      let userNum = +num;
      if (userNum < randomNum) {
        numberOfattempts++
        arrAttempts.push(userNum)
        message.textContent = 'Too Low'
      } else if (userNum > randomNum) {
        numberOfattempts++
        arrAttempts.push(userNum)
        message.textContent = 'Too hight'
      } else {
        numberOfattempts++
        message.textContent = 'You found the number'
        count.textContent = `Количество затраченных попыток: ${numberOfattempts}`
        attempts.textContent = (arrAttempts.length > 0) ? `Ваши попытки: ${arrAttempts.join(', ')}` : ''

        let timer = 5
        let restart = document.createElement('div')
        const body = document.querySelector('body')
        body.appendChild(restart)
        let intervalRestartGame = setInterval(() => {
          if(--timer >= 0) {
            restart.textContent = `До перезапуска игры осталось ${timer} секунд`
          } else {
            clearInterval(intervalRestartGame)
            input.value = ``
            message.textContent = ``
            count.textContent = ``
            attempts.textContent = ``
            body.removeChild(restart)
            game()()
          }
        }, 1000)
      }
    } else {
      message.textContent = `Number is required`
    }
  }
}
const startGame = game()
btn.addEventListener('click', startGame)