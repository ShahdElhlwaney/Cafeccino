import AuthView from './authView.js';
import googleIcon from '../../img/google.svg';
import appleIcon from '../../img/apple.svg';
import facebookIcon from '../../img/facebook.svg';

class SignupView extends AuthView{
    _parentElement=document.querySelector('.auth-content');
    
    _signupBtn=document.querySelector('.signup-btn');
    _overlay=document.querySelector('.overlay');
    _generateMarkup(){
        return `<h1>Tell us about yourself</h1>
             <form class="form">
                 <input type="text" placeholder="Username" class="form__input form__username">
                 <input type="email" placeholder="Email"class="form__input form__email">
                 <input type="password" placeholder="Password"class="form__input form__password">
                 <input type="tel" placeholder="Phone"class="form__input form__phone">
                 <input type="text" placeholder="Address"class="form__input form__address">
                  <div class="remember-me">
                     <input type="checkbox" id="remember_me" name="remember_me">
                     <label> Remember me</label>
                  </div>
                  <button>
                   Continue
                  </button>
                 </form>
                 <div class="signup-with">
                    <p>Sign up with</p>
                    <div class="signup-with__icons">
                        <img src="${facebookIcon}" alt="facebook">
                        <img src="${googleIcon}" alt="google">
                        <img src="${appleIcon}" alt="apple">
                    </div>
                    
                 </div>
               
                 <p>Already have an account?<span id="login"> Login</span></p>
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