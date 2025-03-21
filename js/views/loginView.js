import AuthView from "./authView";

class LoginView extends AuthView{
    _parentElement=document.querySelector('.form-container');
    _authWith=document.querySelector('.auth-with');
    _h1=document.querySelector('.auth-content').querySelector('h1');
    _emailInputEl=this._parentElement.querySelector('.form__email');
    constructor(){
        super();
        this._addLoginWithPhoneHandlerRender();
        this._addLoginWithEmailHandlerRender();
    }
    _generateMarkup(){
        return ` <div class="login-nav">
                    <div class="login-nav__email click"><h3>E-mail</h3></div>
                    <div class="login-nav__mobile unclick"><h3>Mobile Number</h3></div>
                    
                 </div>  
                    <form class="form">
                        <input type="tel" placeholder="Phone"class="form__input form__phone hidden">
                        <input type="email" placeholder="Email"class="form__input form__email">
                        <input type="password" placeholder="Password"class="form__input form__password">
                        <div class="remember-me">
                            <input type="checkbox" id="remember_me" name="remember_me">
                            <label> Remember me</label>
                        </div>
                        <p class="forget-pass">Forget Password?</p>
                        <button>Continue</button>
                        `;
                        
    }
    addLoginViewHandlerRender(handler){
        this._authNav.addEventListener('click',()=>{
            this._authWith.firstElementChild.textContent='Log in with';
            this._authNav.textContent=' Sign up';
            this._h1.textContent='Welcome Back';
            handler();
        })
       }
     _showPhoneInput(){
        this._parentElement.querySelector('.form__phone').classList.remove('hidden');
       this._parentElement.querySelector('.form__email').classList.add('hidden');
    } 
    _showEmailInput(){
        this._parentElement.querySelector('.form__email').classList.remove('hidden');
        this._parentElement.querySelector('.form__phone').classList.add('hidden');
    }
    _mobileNavClick(){
      this._showPhoneInput();
      this._parentElement.querySelector('.login-nav__mobile').classList.add('click');
      this._parentElement.querySelector('.login-nav__mobile').classList.remove('unclick');
      this._parentElement.querySelector('.login-nav__email').classList.add('unclick');
      this._parentElement.querySelector('.login-nav__email').classList.remove('click');
    }
    _emailNavClick(){
        this._showEmailInput();
        this._parentElement.querySelector('.login-nav__mobile').classList.add('unclick');
        this._parentElement.querySelector('.login-nav__mobile').classList.remove('click');
        this._parentElement.querySelector('.login-nav__email').classList.add('click');
        this._parentElement.querySelector('.login-nav__email').classList.remove('unclick');
    }
        
    

    
    _addLoginWithPhoneHandlerRender(){
        this._parentElement.addEventListener('click',(e)=>{
            const mobileNavEl=e.target.closest('.login-nav__mobile');
            if(!mobileNavEl)return;
            this._mobileNavClick();
        })
    }   
   _addLoginWithEmailHandlerRender(){
    this._parentElement.addEventListener('click',(e)=>{
        const mobileNavEl=e.target.closest('.login-nav__email');
        if(!mobileNavEl)return;
        this._emailNavClick();
    })
   } 
}
export default new LoginView();