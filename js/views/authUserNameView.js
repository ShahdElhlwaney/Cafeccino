import View from "./view.js";


class AuthUserNameView extends View{
    _parentElement=document.querySelector('.userName');

    _generateMarkup(){
        return `
                   ${this._data}
                `;
    }
}
export default new AuthUserNameView();