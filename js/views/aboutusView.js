import View from './view.js';

class AboutUsView extends View{
    _parentElement=document.querySelector('.about-us__page');
    _video=document.querySelector('.video').querySelector('video');
    _videoPlayBtn=this._video.nextElementSibling;
    _authUserName=document.querySelector('.userName');
    _nav=document.querySelector('.nav');
    constructor(){
        super();
        this._addWatchVideoHandler();
        this._addPauseVideoHandler();
    }
  
  
    _hideVideoPlayBtn(){
        this._videoPlayBtn.classList.add('hidden');
    }
    _showVideoPlayBtn(){
        this._videoPlayBtn.classList.remove('hidden');
    }
   _addWatchVideoHandler(){
        this._parentElement.addEventListener('click',(e)=>{
            const watchVideoBtn=e.target.closest('.play');
            console.log(watchVideoBtn);
            if(!watchVideoBtn)return;
            this._hideVideoPlayBtn();
            this._video.play(); 
        });
   }
   _addPauseVideoHandler(){
    this._parentElement.addEventListener('click',(e)=>{
        const pauseVideoBtn=e.target.closest('.pause');
        if(!pauseVideoBtn)return;
        this._showVideoPlayBtn();
        this._video.pause(); 
   });
}
}
export default new AboutUsView();