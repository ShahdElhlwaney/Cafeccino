export default class AuthView {
   _authWindow=document.querySelector('.auth');
   _authNav=document.querySelector('#auth');
   render(){
    const markup=this._generateMarkup();
    this._parentElement.innerHTML=markup;

   }
}