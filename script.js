const images= document.querySelectorAll('.slider .slider-line img');
const sliderLine= document.querySelector('.slider-line');
let count=0;
let timeoutId;
let width;
function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width=width*images.length + 'px';
    images.forEach(item=>{
        item.style.width=width +'px';
        item.style.height='auto';
    })
    rollSlider();
}
window.addEventListener('resize',init);
init();

  document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count>= images.length){
        count=0;
    }
rollSlider(count);
})
document.querySelector('.slider-back').addEventListener('click', function(){
    count--;
    if (count <0 ){
        count=images.length-1;
    }
rollSlider(count);
})
function rollSlider(count){
        sliderLine.style.transform ='translate(-' +count*width +'px';
    }
 function start(){
     count++;
     if (count>= images.length){
        count=0;
    }
    if (count <0 ){
        count=images.length-1;
    }
    rollSlider(count);
}
    document.getElementById('sliderW').onmouseenter=function(){
    start();
}
// document.getElementById('sliderW').onmouseleave=function(){
//     start();
// }

// function rollSlider(count){
//     sliderLine.style.transform ='translate(-' +count*width +'px';
// }
// SLIDER-END
// setTimeout( rollSlider,2000,1);

// function rollSlider(count,stop){
//     if (stop=1){clearTimeout(timerId);}
//     timerId = setTimeout(function request() {
//     if (count>= images.length){
//         count=0;
//     }
//     if (count <0 ){
//         count=images.length-1;
//     }  
//     sliderLine.style.transform ='translate(-' +count*width +'px';
//   count++;
//   timerId = setTimeout(request, delay);
//   if (stop=1){clearTimeout(timerId);}
// }, delay);
// }