'use strict';
const itemsContainer = document.querySelector('.items');


const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const pathImages = 'img/'

console.log(imagesArray);

let currentSlide = 0;

let slideElement = '';
for(let i = 0; i < imagesArray.length; i++){
    // console.log(images[i]);
    // stampa tutti gli elementi dell'array 

    if(i === 0){
        // inserisco le immagini con template literal
        slideElement += `<div class="item active"><img src="${pathImages}/${imagesArray[i]}" alt="City ${i}" /></div>`;
    }else{
        slideElement += `<div class="item"><img src="${pathImages}/${imagesArray[i]}" alt="City ${i}" /></div>`;
    }
}
// per non perdere il contenuto esistente nel html iniziale
itemsContainer.innerHTML += slideElement;
// OPPURE
// itemsContainer.innerHTML = slideElement + itemsContainer.innerHTML;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


const domSlides = document.querySelectorAll('.item');
console.log(domSlides);

// Aggiunta della classe active per next/prev + Bonus 1(ciclo infinito del carosello)
next.addEventListener('click', function(){
    domSlides[currentSlide].classList.remove('active');

    if (currentSlide === domSlides.length - 1){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
   
    domSlides[currentSlide].classList.add('active');
});

prev.addEventListener('click', function(){
    domSlides[currentSlide].classList.remove('active');

    if (currentSlide === 0){
        currentSlide = domSlides.length - 1;
    }else{
        currentSlide--;
    }

    domSlides[currentSlide].classList.add('active');
});


// Soluzione con creatElement e append

// for (let i = 0; i < imagesArray.length; i++) {
//     const item = document.createElement('div');
//     item.classList.add('item');
//     if(i === currentSlide){
//         item.classList.add('active');
//     }

//     const img = document.createElement('img');
//     img.src = `img/${imagesArray[i]}`;
//     img.alt = `City ${i}`;

//     item.append(img);
//     items.append(item);
// }








 


 