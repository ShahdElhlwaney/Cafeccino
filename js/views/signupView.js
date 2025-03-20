import AuthView from './authView.js';

class SignupView extends AuthView{
    _parentElement=document.querySelector('.auth-content');
    
    _signupBtn=document.querySelector('.signup-btn');
    _overlay=document.querySelector('.overlay');
    _generateMarkup(){
        return ` <input type="email" placeholder="Email"class="form__input form__email">
                 <input type="password" placeholder="Password"class="form__input form__password">
                 <input type="tel" placeholder="Phone"class="form__input form__phone">
                 <input type="text" placeholder="Address"class="form__input form__address">
                  <div class="remember-me">
                     <input type="checkbox" id="remember_me" name="remember_me">
                     <label> Remember me</label>
                  </div>
                 `;
    }
    _toggleSignupBtn(){
        this._signupBtn.classList.toggle('hidden');
    }
    _toggleOverlay(){
        this._overlay.classList.toggle('hidden');

    }
    _toggleSignupView(){
        this._authWindow.classList.toggle('hidden');
    }
   addSignupHandler(handler){
        this._signupBtn.addEventListener('click',(e)=>{
            this._toggleSignupBtn();
            this._toggleSignupView();
            this._toggleOverlay();
            handler();
        });
   }
}
export default new SignupView();