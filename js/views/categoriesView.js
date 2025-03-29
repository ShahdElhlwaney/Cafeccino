import View from './view.js';
import nextArrow from '../../img/next-arrow.svg';
import prevArrow from '../../img/prev-arrow.svg';
import unActiveNavBtn from '../../img/unactive-nav__button2.svg';
import coldDrinkImg from '../../img/cold-drinks_product.svg';
import milkShakeImg from '../../img/milk-shake_product.svg';
import donutsImg from '../../img/donuts_product.svg';
import activeNavBtn from '../../img/active-nav__button2.svg';
import cubCakeImg from '../../img/cup-cake_product.svg';
class CategoriesView extends View{
    constructor(){
        super();
        this.addNextSlideHandlerRender();
        this.addPrevSlideHandlerRender();
    }
     _parentElement=document.querySelector('.page');
     _pages=[
      `${document.querySelector('.heat-drink_page')?.innerHTML}`,
        `<div class="nav-buttons">
            <img class="navSliderBtn" src=${unActiveNavBtn}>
            <img  src=${activeNavBtn}>
         </div>
        <img class="cover-img" src=${coldDrinkImg} alt="">
        <div class="head">
            <p class="sip-savor">Sip. Savor</p>
            <h1>Cold Drink  <br> <span>Macchiato</span></h1>
            <div class="discount">
                Discount 20%
            </div>
            <button>Shop now</button>
        </div>
        <div class="description">
            <h3>02/05</h3>
            <p>
                Embrace the cozy warmth of our meticulously crafted hot coffee creations,
                 where each sip unveils a symphony of flavors that warms your soul.
                  From velvety lattes to indulgent mochas, 
                  our artisanal blends are brewed to perfection, 
                  delivering a comforting embrace that delights your senses.
            </p>
        </div>
        <div class="slider-nav__buttons">
            <img class="prev-arr" src=${prevArrow} alt="">
            <div class="dot unactive"></div>
            <div class="dot active"></div>
            <div class="dot unactive"></div>
            <div class="dot unactive"></div>
            <div class="dot unactive"></div>
            <img class="next-arr" src=${nextArrow} alt="">
        </div>`,
        `<div class="nav-buttons">
        <img class="navSliderBtn" src=${unActiveNavBtn}>
        <img  src=${activeNavBtn}>
     </div>
    <img class="cover-img" src=${milkShakeImg} alt="">
    <div class="head">
        <p class="sip-savor">Chocolate delight</p>
        <h1>Milk shake  <br> <span>Chocolate </span></h1>
        <div class="discount">
            Discount 20%
        </div>
        <button>Shop now</button>
    </div>
    <div class="description">
        <h3>03/05</h3>
        <p>
            Embrace the cozy warmth of our meticulously crafted hot coffee creations,
             where each sip unveils a symphony of flavors that warms your soul.
              From velvety lattes to indulgent mochas, 
              our artisanal blends are brewed to perfection, 
              delivering a comforting embrace that delights your senses.
        </p>
    </div>
    <div class="slider-nav__buttons">
        <img  class="prev-arr"src=${prevArrow} alt="">
        <div class="dot unactive"></div>
        <div class="dot unactive"></div>
        <div class="dot active"></div>
        <div class="dot unactive"></div>
        <div class="dot unactive"></div>
        <img class="next-arr" src=${nextArrow} alt="">
         </div>`,
         `<div class="nav-buttons">
         <img class="navSliderBtn" src=${unActiveNavBtn}>
         <img  src=${activeNavBtn}>
      </div>
     <img class="cover-img" src=${donutsImg} alt="">
     <div class="head">
         <p class="sip-savor">Sugar-coated dreams.</p>
         <h1>Donuts <br> <span>Nutella </span></h1>
         <div class="discount">
             Discount 20%
         </div>
         <button>Shop now</button>
     </div>
     <div class="description">
         <h3>04/05</h3>
         <p>
             Embrace the cozy warmth of our meticulously crafted hot coffee creations,
              where each sip unveils a symphony of flavors that warms your soul.
               From velvety lattes to indulgent mochas, 
               our artisanal blends are brewed to perfection, 
               delivering a comforting embrace that delights your senses.
         </p>
     </div>
     <div class="slider-nav__buttons">
         <img class="prev-arr" src=${prevArrow} alt="">
         <div class="dot unactive"></div>
         <div class="dot unactive"></div>
         <div class="dot unactive"></div>
         <div class="dot active"></div>
         <div class="dot unactive"></div>
         <img class="next-arr" src=${nextArrow} alt="">
          </div>`,
          `<div class="nav-buttons">
          <img class="navSliderBtn" src=${unActiveNavBtn}>
          <img  src=${activeNavBtn}>
       </div>
      <img class="cover-img" src=${cubCakeImg} alt="">
      <div class="head">
          <p class="sip-savor">Bites of heaven.</p>
          <h1>Cup Cake 
 <br> <span>Velvet Vanilla </span></h1>
          <div class="discount">
              Discount 20%
          </div>
          <button>Shop now</button>
      </div>
      <div class="description">
          <h3>05/05</h3>
          <p>
              Embrace the cozy warmth of our meticulously crafted hot coffee creations,
               where each sip unveils a symphony of flavors that warms your soul.
                From velvety lattes to indulgent mochas, 
                our artisanal blends are brewed to perfection, 
                delivering a comforting embrace that delights your senses.
          </p>
      </div>
      <div class="slider-nav__buttons">
          <img class="prev-arr" src=${prevArrow} alt="">
          <div class="dot unactive"></div>
          <div class="dot unactive"></div>
          <div class="dot unactive"></div>
          <div class="dot unactive"></div>
          <div class="dot active"></div>
          <img class="next-arr" src=${nextArrow} alt="">
           </div>`
     ];
     _currentPage=0;
     _generateMarkup(){
        return this._pages[this._currentPage];
     }
     _goToNextPage(){
          this._currentPage+=1; 
    }
     _goToPrevPage(){
        this._currentPage-=1;
     }
     _addParentClassForEachSlide(){
        this._currentPage===0?this._parentElement.classList.add('heat-drink_page')
        :this._currentPage===1?this._parentElement.classList.add('cold-drink_page')
        :this._currentPage===2?this._parentElement.classList.add('milk-shake_page')
        :this._currentPage===3?this._parentElement.classList.add('donuts_page')
        :this._currentPage===4?this._parentElement.classList.add('cup-cake_page'):'';
     }
    addNextSlideHandlerRender(){
       this._parentElement?.addEventListener('click',(e)=>{
        const nextArr=e.target.closest('.next-arr');
        if(!nextArr)return;
        if(this._currentPage>=this._pages.length-1)return;
        this._parentElement.className='page';
        this._goToNextPage();
        this._addParentClassForEachSlide();
        this.render();
       })
    }
    addPrevSlideHandlerRender(){
        this._parentElement?.addEventListener('click',(e)=>{

            const prevArr=e.target.closest('.prev-arr');
            console.log(prevArr);
            if(!prevArr)return;
            console.log('...............');
            if(this._currentPage===0)return;
            this._parentElement.className='page';
            this._goToPrevPage();
            this._addParentClassForEachSlide();
            this.render();
           })
    }
}
export default new CategoriesView();