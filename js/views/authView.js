export default class AuthView {
   _authWindow=document.querySelector('.auth');
   _authNav=document.querySelector('#auth');
   _authWith=document.querySelector('.auth-with');
   _h1=document.querySelector('.auth-content').querySelector('h1');

   render(){
    const markup=this._generateMarkup();
    this._parentElement.innerHTML=markup;
   }
   addNavBetweenAuthViewsHandlerRender(handler){

      this._authNav.addEventListener('click',(e)=>{
         if(e.target.textContent==='Login'){
            this._authWith.firstElementChild.textContent='Log in with';
            this._authNav.textContent=' Sign up';
            this._h1.textContent='Welcome Back';
         }
         else{
            // this._authWith.firstElementChild.textContent='Sign in with';

         }
         handler(this._authNav.textContent);

         
      })
     }
}