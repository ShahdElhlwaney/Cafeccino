import AuthView from "./authView";

class LoginView extends AuthView{
    _parentElement=document.querySelector('.form-container');
    _authWith=document.querySelector('.auth-with');
    _h1=document.querySelector('.auth-content').querySelector('h1');
    _generateMarkup(){
        return ` <div class="login-nav">
                    <div class="login-nav__email"><h3>E-mail</h3></div>
                    <div class="login-nav__mobile"><h3>Mobile Number</h3></div>
                    
                 </div>   
                    <form class="form">
                        <input type="email" placeholder="Email"class="form__input form__email">
                        <input type="password" placeholder="Password"class="form__input form__password">
                        <div class="remember-me">
                            <input type="checkbox" id="remember_me" name="remember_me">
                            <label> Remember me</label>
                        </div>
                        <p class="forget-pass">Forget Password</p>
                        <button>Continue</button>
                        `;
                        
    }
    addLoginNavHandlerRender(handler){
        this._authNav.addEventListener('click',()=>{
            this._authWith.firstElementChild.textContent='Log in with';
            this._authNav.textContent=' Sign up';
            this._h1.textContent='Welcome Back';
            handler();
        })
       }
}
export default new LoginView();