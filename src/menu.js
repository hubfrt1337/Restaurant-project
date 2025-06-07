import { pizza } from './obj.js';
export function showMenu(){
const content = document.querySelector('.contentJs')
const container = document.createElement('div');
container.className = 'container-content'
const menuGrid = document.createElement('div');
menuGrid.className = 'menu-grid';
content.appendChild(container);
container.appendChild(menuGrid);


pizza.forEach((p) => {
   const sort = document.createElement('div');
   sort.className = 'sort';
   const pizzaImgCon = document.createElement('div');
   pizzaImgCon.className  = 'pizza-imgJs';
   const pizzaImg = document.createElement('img')
   pizzaImg.className = "imgPizza"
   const pizzaInfo = document.createElement('div');
   pizzaInfo.classList = 'pizza-info';
   const pizzaName = document.createElement('div');
   pizzaName.classList = 'pizza-nameJs';
   const pizzaDescription = document.createElement('div');
   pizzaDescription.className = 'pizza-description';
   const price = document.createElement('div');
   price.className = 'priceJs';
   // values
   pizzaName.textContent = p.name;
   pizzaImg.src = p.img;
   pizzaDescription.textContent = p.description;
   price.textContent = p.price;
   //apend
   pizzaImgCon.appendChild(pizzaImg);
   pizzaInfo.appendChild(pizzaImgCon);
   pizzaInfo.appendChild(pizzaName)
   pizzaInfo.appendChild(pizzaDescription)
   pizzaInfo.appendChild(price)
   sort.appendChild(pizzaImgCon)
   sort.appendChild(pizzaInfo);
   menuGrid.appendChild(sort)
})
}
