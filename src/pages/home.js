import cafeImg from '../img/rest.png';

export default function getHomeHTML() {
    return createHomeHTML()
}

function createHomeHTML() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home');

    const homeBlock = document.createElement('div');
    homeBlock.classList.add('home-block');

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = "Welcome To Fooddddie's Kitchen";
    homeBlock.appendChild(homeTitle);

    const homeImgBlock = document.createElement('div');
    homeImgBlock.classList.add('home-img');
    const homeImg = document.createElement('img');
    homeImg.src = cafeImg;
    homeImg.alt = "cafe";
    homeImgBlock.appendChild(homeImg);
    homeBlock.appendChild(homeImgBlock);
    homeContent.appendChild(homeBlock);
    
    return homeContent
}