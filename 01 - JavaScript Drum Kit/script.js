window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
})

const keysList = document.querySelectorAll(".key");
keysList.forEach(key=>key.addEventListener('transitionend',removeClass));

function removeClass(e){
    console.log (e);
    this.classList.remove('playing');
}

// window.addEventListener('keyup',()=>{
//     keysList.forEach(key=>key.classList.remove('playing'));
// })