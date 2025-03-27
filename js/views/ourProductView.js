import View from './view.js';
import heatCategory from '../../img/heat-drink_product.svg';
import coldCategory from '../../img/cold-drinks_product.svg';
import milkShakeCategory from '../../img/milk-shake_product.svg';
import donutsCategory from '../../img/donuts_product.svg';
import cupCakeCategory from '../../img/cup-cake_product.svg';
import activeNavBtn from '../../img/active-nav__button1.svg';
import unactiveNavBtn from '../../img/unactive-nav__button1.svg';
class OurProductView extends View {
    _orderNowBtn=document.querySelector('.order-now_btn');
    _headerCover=document.querySelector('.header__cover');
    _parentElement= document.querySelector('.our-product');
    _offersBtn=document.querySelector('.offers_btn');
    _generateMarkup(){
        return `<div class="offers">
        <div class="nav-buttons">
        <img  src=${activeNavBtn}>
        <a href="categoriesSlider.html"><img class="navSliderBtn" src=${unactiveNavBtn}></a>
        
        </div>
        <div class="discount">Discount 20%</div>
                <div class="categories">
                   <div class="category">
                   <img src=${heatCategory}>
                   <p>Cappuccino</p>
                   </div>
                   <div class="category">
                   <img src=${coldCategory}>
                   <p>Macchiato</p>
                   </div>
                   <div class="category">
                   <img src=${milkShakeCategory}>
                   <p>Milk shake </p>
                   <p>Chocolate</p>
                   </div>
                   <div class="category">
                   <img class="donuts-img" src=${donutsCategory}>
                   <p>Donuts </p>
                   <p>Nutella</p>
                </div>
                    <div class="category">
                   <img src=${cupCakeCategory}>
                   <p> Velvet </p>
                   <p>Vanilla</p>
                   </div>
                </div> 
                </div>
        `;
    }
    // addAuthUserNameHandlerRender(handler){
    //     window.addEventListener('DOMContentLoaded',function(){
    //         handler();
    //     });
    // }
    addOffersHandlerRender(handler){
        this._offersBtn?.addEventListener('click',function(e){
            handler();
        });
        

    }
    addCategoriesSliderHandlerRender(handler){
        this._parentElement.addEventListener('click',function(e){
            const navSliderBtn=e.target.closest('.navSliderBtn');
            if(!navSliderBtn)return;
            handler();


        })
    }
}
export default new OurProductView();