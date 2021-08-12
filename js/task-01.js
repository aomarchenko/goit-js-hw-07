const navEl = document.querySelectorAll('.item')
console.log(`В списке ${navEl.length} категории.`)

const elements = document.querySelector('#categories')

const firstElement = elements.children[0].firstElementChild
console.log(`категория: ${firstElement.textContent}`)

const firstList = document.querySelector('.item')
console.log(`Количество элементов:${firstList.lastElementChild.children.length}`)


const secondElement = elements.children[1].firstElementChild
console.log(`категория: ${secondElement.textContent}`)

const secondList = document.querySelectorAll('.item')
console.log(`Количество элементов:${secondList[1].lastElementChild.children.length}`)

const thirdElement = elements.children[2].firstElementChild
console.log(`категория: ${thirdElement.textContent}`)


const thirdList = document.querySelectorAll('.item')
console.log(`Количество элементов:${secondList[2].lastElementChild.children.length}`)




