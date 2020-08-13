const body = document.querySelector('body')

for (let i = 0; i < 100; i++) {
  let newElem = document.createElement('p')

  if((i % 3 === 0 && i !== 0) && (i % 5 === 0 && i !== 0)) {
    newElem.textContent = 'A/B Testing'
  } else if(i % 3 === 0 && i !== 0) {
    newElem.textContent = 'A/B'
  } else if(i % 5 === 0 && i !== 0) {
    newElem.textContent = 'Testing'
  } else {
    newElem.textContent = i
  }
  

  if((i % 3 === 0 && i !== 0) && (i % 5 === 0 && i !== 0)) {
    console.log(i)
  }

  body.insertAdjacentElement('beforeend', newElem)
}