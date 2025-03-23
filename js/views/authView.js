export default class AuthView {
   _authWindow=document.querySelector('.auth');

   render(){
    const markup=this._generateMarkup();
    this._parentElement.innerHTML=markup;
   }
   renderError(error){
     const errorEl=document.createElement("p");
     errorEl.innerHTML=error;
     errorEl.style.color="red";
     this._parentElement.lastElementChild.insertBefore(errorEl,this._parentElement.lastElementChild.querySelector('.remember-me'));
   }
    static addNavBetweenAuthViewsHandlerRender(handler){
      const authNav=document.querySelector('#auth');
      const authWith=document.querySelector('.auth-with');
      const h1=document.querySelector('.auth-content').querySelector('h1');
      authNav.addEventListener('click',()=>{
         handler(authNav.textContent);

         if(authNav.textContent.trim()==="Login"){
            authWith.firstElementChild.textContent='Log in with';
            authNav.textContent=' Sign up';
            h1.textContent='Welcome Back';
         }
         else{

            this._authWith.firstElementChild.textContent='Sign up with';
            authNav.textContent=' Login';
            this._h1.textContent='Tell us about yourself';
         }

         
      })
     }
}
