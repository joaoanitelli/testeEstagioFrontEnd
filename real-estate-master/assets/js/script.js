//1
document.querySelector('.hero-details').firstElementChild.innerHTML = "Bem-vindo ao Nosso Site";
document.querySelector('.hero-details-mobile').firstElementChild.innerHTML = "Bem-vindo ao Nosso Site";


//3
document.querySelector('.desktop-hero').src = 'assets/images/imagemalterada.jpg';
document.querySelector('.mobile-hero').src = 'assets/images/imagemalterada.jpg'; 
document.querySelector('.desktop-hero').style.width = '100%';
document.querySelector('.hero-container-desktop').style.maxHeight = '80vh';

//4
document.querySelector("#blog").style.display = 'none';

//5
const hero = document.querySelector('#hero');
const call = document.querySelector('#call-to-action');
hero.appendChild(call);

//6
document.querySelector('#properties').getElementsByTagName('h2').item(0).style.fontStyle = "italic";
document.querySelector('#properties').getElementsByTagName('h2').item(0).style.backgroundColor = "yellow";