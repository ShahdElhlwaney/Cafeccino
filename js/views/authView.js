export default class AuthView {
   render(){
    const markup=this._generateMarkup();
    this._parentElement.insertAdjacentHTML('afterbegin',markup);
   }
}