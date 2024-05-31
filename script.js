const imgs = document.querySelectorAll('.slide-img img');
const prev_btn = document.querySelector('.slide-left');
const next_btn = document.querySelector('.slide-right');

let n = 0;
const intervalTime = 5000; 
let slideInterval;

function startSlideInterval() {
    slideInterval = setInterval(() => {
        if (n < imgs.length - 1) {
            n++;
        } else {
            n = 0;
        }
        changeSlide();
    }, intervalTime);
}

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

startSlideInterval();
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if (n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide()
})

next_btn.addEventListener('click', (e)=>{
    if (n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide()
})