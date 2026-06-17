window.addEventListener('scroll', () => {

const header = document.querySelector('header');

if(window.scrollY > 50){
header.style.background = '#020812';
}else{
header.style.background = '#05101d';
}

});