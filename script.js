const container = document.querySelector('.container');
let root = document.documentElement; 
let styles = getComputedStyle(root); 
let gridCols = styles.getPropertyValue('--grid-cols');  


if (screen.width > screen.height){ 
//if width is more than height, use height and vice versa. 
    container.style.width = '100vh'; 
    container.style.height = '100vh'; 
} else {
    container.style.width = '100vw'; 
    container.style.height = '100vw'; 
}
for (let i = 0; i < gridCols; i++){
    for (let j = 0; j < gridCols; j++){
    let divy = document.createElement('div'); 
    container.appendChild(divy); 
    }
}

const divs = container.querySelectorAll('div'); 
//basic sketch feature 

    divs.forEach((div) => { 
        div.addEventListener('mouseover', () => {
            div.classList.add('darken'); 
        }); 
    });



const reset = document.querySelector('.reset'); 
reset.addEventListener('click', () => {
    let newSize = prompt('input size for new grid (max 100)'); 
    if (newSize > 100) {
        alert('requested size too large (max 100). please try again'); 
    } else {
        root.style.setProperty('--grid-cols', newSize);
        divs.forEach((div) => {
            div.classList.remove('darken'); 
            if (newSize > gridCols){
                for (let i = 0 ; i < newSize - gridCols; i++){
                    for (let j = 0; j < newSize - gridCols; j++){
                        let divy = document.createElement('div'); 
                        divy.addEventListener('mouseover', () => div.classList.add('darken')); 
                        container.appendChild(divy); 
                    }
                }
            } else {
                for (let i = 0; i < gridCols - newSize; i++){
                    for (let j = 0; j < gridCols - newSize; j++){
                        container.removeChild('div'); 
                    }
                }
            }
        });
    }
    
}); 