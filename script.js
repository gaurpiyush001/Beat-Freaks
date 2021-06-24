'use strict';


/*
///////////////-------------------------->KEYBOARD EVENTS<--------------------////////////////////////////
document.addEventListener('keydown', function(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function

    //If we hit key on succession
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
    console.log(audio,key);

});

document.addEventListener('keyup', function(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function

    key.classList.remove('playing');

});
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

/////////////////////////////Click Events//////////////////////////////
const keyClicked = document.querySelectorAll('.key');

//function to remove animation class
function removetransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
}

keyClicked.forEach(ele => {
    ele.addEventListener('click', function (){
        //console.log(this);
        const UniCode = this.dataset.key;
        const audio = document.querySelector(`audio[data-key="${UniCode}"]`);

        //Playing Audio
        audio.currentTime = 0;
        audio.play();

        //adding Animation class
        this.classList.add('playing');

        //removing Animation class
        this.addEventListener('transitionend', removetransition);

    })
})

