import View from "./view.js";
import logo from '../../img/logo.svg';
import search from "../../img/search.svg";
import lang from '../../img/lang.svg';
import cart from '../../img/cart-header.svg';
class HeaderView extends View{
    _parentElement=document.querySelector('.header');
    _generateMarkup(){

        return ` <div class="header">
                <div class="humburger">
                </div>
                <div class="website">
                    <img src=${logo} alt="" class="website-logo">
                   <h2 class="website-title">
                    Cafe<span>cceno</span>
                   </h2>
                </div>
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="nav-list__item" >
                            <a href="#!">Home</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="ourProdunst.html">Our Product</a>
                        </li>
                        <li class="nav-list__item">
                            <a href="delivery.html">Delivery</a>
                        </li>
                    </ul>
                </nav>
                <div class="userName">
                   ${this._data}
                </div>
                <div class="search-input">
                    <img  src=${search} alt="image not found" class="search-icon">
                    <input type="text">
                </div>
                <div class="lang">
                    <img src=${lang} alt="" class="lang-icon">
                    <h2 class="lang-text">English</h2>
                    <i class='fas fa-angle-down' style='font-size:2rem'></i>

                </div>
                <img class="cart-header" src=${cart}>
            </div>
        `;
    }


}
export default new HeaderView();