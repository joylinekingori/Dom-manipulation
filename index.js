const title = document.getElementById('title');
title.style.color = 'green';
title.style.textAlign = 'center'
title.style.fontSize = '250%'


// const body = document.getElementById('body');
document.body.style.backgroundColor = '#C0C0C0';
document.body.style.margin = '100px'
// document.body.style.margin='100px 100px 100px'
const products = document.getElementById('products');
products.style.textAlign = 'center';
products.style.fontSize = '190%'
products.style.fontWeight = 'bold'


const subHeading = document.getElementById('subHeading');
subHeading.style.textTransform = 'uppercase';
subHeading.style.paddingTop = '10px'
subHeading.style.fontSize = '180%'

const subHeadTwo = document.getElementById('subHeadTwo');
subHeadTwo.style.textTransform = 'uppercase';
// subHeadTwo.style.marginLeft='1300px'
subHeadTwo.style.paddingTop = '150px'
subHeadTwo.style.fontSize = '180%'

const newListItem = document.createElement('li');
newListItem.textContent = 'Kiwi';
const parentList = document.getElementById('fruList');
parentList.appendChild(newListItem);
newListItem.setAttribute('id', 'fru-3');
parentList.style.fontSize = ' 130%'


const list = document.createElement('li');
list.textContent = 'Spinach';


const parentTwo = document.getElementById('vegList')
parentTwo.appendChild(list);
list.setAttribute('id', 'veg-3');
// parentTwo.style.marginLeft='1300px'
parentTwo.style.fontSize = ' 130%'


const image = document.createElement('img');
image.src = 'images/fruits (1).jpg';
image.style.width = 30;
image.style.paddingTop = '30px'
// image.style.height=5;
title.appendChild(image)

const imageOne = document.getElementById('imageOne');
const imageFru = document.createElement('img');
imageFru.classList.add('image-fru')
const image2 = document.createElement('img')
image2.src = 'images/fruits (1).jpg';
imageFru.appendChild(image2)
// imageFru.src='images/mixed-fruits-with-apple-banana-orange-other.jpg';
// image.style.width=30;
// image.style.paddingTop='30px';

function addFruit() {
    const fruList = document.getElementById('fruList')
    const fruitName = 'Pea'
    const newListItemTwo = document.createElement('li');
    new

}


const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click', () => {
    clickButton.style.backgroundColor = 'blue';
    clickButton.textContent = 'Clicked';

});



clickButton.onclick = () => {
    heading.textContent = 'This is fun!'

};









