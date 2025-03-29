import View from "./view.js";
class PaymentView extends View{
    _orderSummary=document.querySelector('.order-summary');
    _summary=document.querySelector('.summary');
    _summaryHeadTitle=document.querySelector('.order-summary__head').querySelector('h2');
    _scheduleOrder=document.querySelector('.schedule-order');
    _discountCodeContainer=document.querySelector('.discount-code__container');
    _discountContainer=document.querySelector('.discount-container');
    constructor(){
        super();
        this._addOrderSummaryHandlerRender();
        this._checkPaymentMethodHandlerRender();
    }
    _toggleSummaryHeadTitle(){
        if(this._summary.classList.contains('hide'))
            this._summaryHeadTitle.innerHTML='Show Order Summary<span>▾</span>';
        else
        this._summaryHeadTitle.innerHTML='Hide Order Summary<span>▴</span>';

    }
    _toggleOpacity(el){
        el.classList.toggle('hide-opacity')
        el.classList.toggle('show-opacity');
    }
    _toggleSummary(){
        this._summary.classList.toggle('show');
        this._summary.classList.toggle('hide');
    }
    _addOrderSummaryHandlerRender(){
        this._orderSummary.addEventListener('click',(e)=>{  
              this._toggleSummary();
              this._toggleOpacity(this._scheduleOrder);
              this._toggleOpacity(this._discountCodeContainer);
              this._toggleOpacity(this._discountContainer);
              this._toggleSummaryHeadTitle();
        });

    }
    _checkPaymentMethodHandlerRender(){
        document.querySelectorAll('input[name="radio"]').forEach((radio) => {
            radio.addEventListener("change", function () {
                
                radio.classList.add('radio-active');
                radio.classList.remove('radio-unActive');

            });
        });
    }
 
}
export default new PaymentView();