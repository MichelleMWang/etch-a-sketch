const container = document.querySelector('.container'); 
if (screen.width > screen.height){ 
//if width is more than height, use height and vice versa. 
    container.style.width = '100vh'; 
    container.style.height = '100vh'; 
} else {
    container.style.width = '100vw'; 
    container.style.height = '100vw'; 
}
for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
    let divy = document.createElement('div'); 
    container.appendChild(divy); 
    }
}

const divs = container.querySelectorAll('div'); 
divs.forEach((div) => {
    console.log('divy!'); 
    div.addEventListener('mouseover', () => {
        div.classList.add('darken'); 
    }); 
});
