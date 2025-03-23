import View from './view';
class HomeView extends View{
    _parentElement=document.querySelector('.container');
    _header=document.querySelector('header');
    _signupBtn=document.querySelector('.signup-btn')
    _authWindow=document.querySelector('.auth');
    _overlay=document.querySelector('.overlay');
    // _explore=document.querySelector('.explore');
    constructor(){
        super();
        this._addAboutUsExploreHandler();
    }
    _addUserElHandlerRender(userName){
        const userNameEl=document.createElement('div');
        userNameEl.classList.add('userName'); 
        userNameEl.textContent=userName;
        this._signupBtn.replaceWith(userNameEl);
    }
    _toggleAuthWindow(){
        this._authWindow.classList.toggle('hidden');
    }
    _toggleOverlay(){
        this._overlay.classList.toggle('hidden');
    }
    
    addHomeHandlerRender(userName){
       this._addUserElHandlerRender(userName);
       this._toggleAuthWindow();
       this._toggleOverlay();
    }
    _addAboutUsExploreHandler(){
        this._parentElement.addEventListener('click',function(e){
           const explore=e.target.closest('.explore');
           if(!explore)return;
           window.history.forward();
           window.location.href="../../aboutUs.html";

        });
    }
}
export default new HomeView();