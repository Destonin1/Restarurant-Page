import pasta from '../img/dish1.png'
import spaget from '../img/dish2.png'
import pizza1 from '../img/dish3.png'
import pizza2 from '../img/dish4.png'
import rabbit from '../img/dish5.png'


export default function getMenuHTML() {
    return createMenuHTML()
}

let dishes = {}

dishes.borsh = {
    name: "Borsh",
    price: "50₴",
    src: "../src/img/borsh.jpg",
    ingr: "Beet, carrot, cabbage, potato tubers, pepper, tomato."
}
dishes.spaghetti = {
    name: "Spaghetti Carbonara",
    price: "138₴",
    src: spaget,
    ingr: "Pasta, bacon, prosciutto, cream, soy sauce, parmesan, vegetable broth, garlic, parsley, egg"
}
dishes.pasta = {
    name: "Pasta with cheese sauce, bacon and chicken",
    price: "150₴",
    src: pasta,
    ingr: "Tortilloni pasta, chicken thigh, garlic, sweet and sour sauce, salt, pepper, Cheddar cheese, bacon, onion, Parmesan cheese, premium flour, sunflower oil, butter, Viola cheese, chicken broth, soy sauce."
}
dishes.pizza1 = {
    name: "Pizza Four meats",
    price: "218₴",
    src: pizza1,
    ingr: "Dough, tomato sauce, mozzarella cheese, Milano salami, picante, prosciutto, bresaola, arugula, parmesan, basil"
}
dishes.pizza2 = {
    name: "Pizza with pear and Gorgonzola cheese",
    price: "208₴",
    src: pizza2,
    ingr: "Dough, cream, mozzarella cheese, gorgonzola, pear, honey, parmesan"
}

dishes.rabbit = {
    name: "Rabbit with porcini mushrooms and vegetables",
    price: "235₴",
    src: rabbit,
    ingr: "Rabbit, porcini mushrooms, Viola cheese, broccoli, cauliflower, carrots, butter, parsley, thyme, Parmesan cheese, sunflower oil, mustard, wine vinegar, honey, shallots, Provence herbs, salt and pepper."
}

function createMenuHTML() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu');

    const container = document.createElement('div');
    container.classList.add('container');

    const header = document.createElement('header');
    header.classList.add('section-title');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Menu";
    header.appendChild(headerTitle);
    container.appendChild(header);

    const menuWrap = document.createElement('div');
    menuWrap.classList.add('menu-wrap');
    for(let item in dishes){
        menuWrap.appendChild(createMenuItem(dishes[item]));
    }

    
    container.appendChild(menuWrap);
    menuContent.appendChild(container);
    return menuContent
}

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const menuImg = document.createElement('div');
    menuImg.classList.add('menu-img');
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = "dish";
    menuImg.appendChild(img);
    menuItem.appendChild(menuImg);

    const menuName = document.createElement('div');
    menuName.classList.add('menu-name');
    const menuTitle = document.createElement('h3');
    menuTitle.textContent = item.name;
    menuName.appendChild(menuTitle);
    menuItem.appendChild(menuName);

    const menuPrice = document.createElement('div');
    menuPrice.classList.add('menu-price');
    const menuSpan = document.createElement('span');
    menuSpan.textContent = item.price;
    menuPrice.appendChild(menuSpan);
    menuItem.appendChild(menuPrice);

    const menuLine = document.createElement('div');
    menuLine.classList.add('menu-line');
    menuItem.appendChild(menuLine);

    const menuIngr = document.createElement('div');
    menuIngr.classList.add('menu-ingredients');
    const menuIngrText = document.createElement('p');
    menuIngrText.textContent = item.ingr;
    menuIngr.appendChild(menuIngrText);
    menuItem.appendChild(menuIngr);
    return menuItem
}

