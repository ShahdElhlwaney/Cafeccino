export default class AuthView {
   _authWindow=document.querySelector('.auth');
   render(){
    const markup=this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend',markup);
   }
}