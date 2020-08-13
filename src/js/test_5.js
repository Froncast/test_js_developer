const readTextFile = file => {
  let data;
  const xhr = new XMLHttpRequest()
  xhr.open('GET', file, false)
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
      data = JSON.parse(xhr.responseText)
    }
  }
  xhr.send(null)
  return data;
}

const {placements} = readTextFile('src/data/recs.txt')
const alsoBougth = document.querySelector('.alsoBougth .product-list')
console.log(placements)
const showProduts = (selector, data) => {
  const block = document.querySelector(`${selector} .product-list`)
  const title = document.querySelector(`${selector}__title`)
  console.log(block)
  title.textContent = data.strategy_message
  data.recs.forEach(item => {
    const newLi = document.createElement('li')
    newLi.dataset.id = item.pid
    newLi.innerHTML = `
      <img src="http://via.placeholder.com/150" alt="${item.name}">
      <a href="${item.ct_url}">${item.name}</a>
      <span class="price">${item.price}</span>
    `
    block.appendChild(newLi)
  })
}

showProduts('.alsoWatched', placements[0])
showProduts('.alsoBougth', placements[1])