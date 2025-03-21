export default class AuthView {
   _authWindow=document.querySelector('.auth');
   _authNav=document.querySelector('#auth');
   render(){
    const markup=this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin',markup);
   }
   addNavBetweenAuthViewsHandlerRender(handler){

      this._authNav.addEventListener('click',(e)=>{
         if(e.target.textContent==='Login'){
            this._authNav.firstElementChild.textContent='Log in with';
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