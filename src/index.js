import './style.css'
import getHomeHtml from "./pages/home";
import getMenuHTML from "./pages/menu";
import getContactHtml from "./pages/contact";
import logoImg from "./img/logo.jpg";
const content = document.getElementById('content');

function createheader() {
    const header = document.createElement('section');
    header.id = "header";
    const menu = document.createElement('nav');
    menu.classList.add('header-wrap');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.insertAdjacentHTML('afterbegin',`<img src="${logoImg}">`);
    logo.onclick = homePage;
    menu.appendChild(logo);
    const navRow = document.createElement('ul');
    navRow.classList.add('nav-flex-row');
    const activeItem = createMenuItem('Home',homePage);
    activeItem.classList.add('nav-item-active');
    navRow.appendChild(activeItem);
    navRow.appendChild(createMenuItem('Menu',menuPage)); 
    navRow.appendChild(createMenuItem('Contact',contactPage));
    menu.appendChild(navRow);
    header.appendChild(menu);
    return header
}

function createMenuItem(text,func) {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');
    const navItemA = document.createElement('a');
    navItemA.textContent = text;
    navItemA.onclick = func;
    navItem.appendChild(navItemA);
    return navItem

}

function createMain(){
    const main = document.createElement('section');
    main.id = "main";
    return main
}

function createMFooter() {
    const footer = document.createElement('section');
    footer.id = "footer";
    footer.insertAdjacentHTML('afterbegin',`
    <div class="container">
        <div class="row-flex">
            <div class="flex-column-form">
                <h3 class="row-flex-title">Make a booking</h3>
                <form class="media-centered">
                    <div class="form-group">
                        <p>
                            Please leave your number we will
                            call to make a reservation
                        </p>
                        <input type="name" class="form-control"id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control"
                            id="exampleInputphoneNumber1"
                            placeholder="Enter your phone number">
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            <div class="opening-time">
                <h3 class="row-flex-title">Opening times</h3>              
                <p>
                    <span>Monday—Thursday: 08:00 — 22:00</span>
                    <span>Friday—Saturday: 09:00 — 23:00 </span>
                    <span>Sunday: 10:00 — 17:00</span>
                </p>
            </div>
        </div>
    </div>`)
    return footer
}

function showActivePage(element) {
    const navItems = document.getElementsByClassName('nav-item');
    for(let i = 0; i < navItems.length; i++){
        if(i === element) {
            navItems[i].classList.add('nav-item-active')
        }
        else navItems[i].classList.remove('nav-item-active');
    };

}

function homePage() {
    showActivePage(0);
    const main = document.getElementById('main');
    main.innerHTML = " ";
    main.appendChild(getHomeHtml());
}

function menuPage() {
    showActivePage(1);
    const main = document.getElementById('main');
    main.innerHTML = " ";
    main.appendChild(getMenuHTML());
}

function contactPage() {
    showActivePage(2);
    const main = document.getElementById('main');
    main.innerHTML = " ";
    main.appendChild(getContactHtml());
}

function init() {
    content.appendChild(createheader());
    content.appendChild(createMain());
    content.appendChild(createMFooter());
    const main = document.getElementById('main');
    main.appendChild(getHomeHtml());
}

init()
