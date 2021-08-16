const elements = document.querySelectorAll('#categories');
elements.forEach(element => console.log(`В списке ${element.children.length} категории.`));
const refCategory = document.querySelector('#categories');

const refItems = refCategory.querySelectorAll('.item');

refItems.forEach(element => {
  console.log('Категория : ', element.getElementsByTagName('h2')[0].textContent);
  console.log('Количество элементов : ', element.getElementsByTagName('li').length);
});
