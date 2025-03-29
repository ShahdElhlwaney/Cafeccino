import View from "./view.js";
class DeliveryView extends View{
    _parentElement=document.querySelector('.delivery');
    _orderNowBtn=document.querySelector('.order-now');
    _scheduleBtn=document.querySelector('.schedule-btn');
    _orderNowBtnTextContent=this._orderNowBtn?.querySelector('span').textContent;
    _scheduleBtnTextContent=this._scheduleBtn?.querySelector('span').textContent;

    _deliveryScheduling=document.querySelector('.deliveryScheduling');
    constructor(){
        super();
        this.addScheduleOrderHandlerRender();
        this.addOrderNowHandlerRender();
    }
    _switchTextContentBtns(el,textContent){
        el.addEventListener("transitionend", function () {
            el.querySelector('span').textContent = textContent;
        }, { once: true }); 
    }
    // _swapBtnsClasses(){
    //     if(this._orderNowBtn.classList.contains('order-now'))
    //     {
    //         this._orderNowBtn.classList.remove('order-now');
    //         this._scheduleBtn.classList.add('order-now');
    //     }
    //     else if(this._scheduleBtn.classList.contains('.schedule-btn'))
    //     {
    //         this._scheduleBtn.classList.remove('schedule-btn');
    //         this._orderNowBtn.classList.add('schedule-btn');
    //     }
    // }
    _addOrderNowBtnWidthHandlerRender(orderNowBtn){
        orderNowBtn.classList.remove('update-width');
        orderNowBtn.classList.add('original-width');
    }
    _addScheduleBtnWidthHandlerRender(scheduleBtn){
        scheduleBtn.classList.remove('original-width');
        scheduleBtn.classList.add('update-width');
    }
    _showDeliverySchedulingHandler(){
        this._deliveryScheduling.classList.remove('hidden');
    }
    _hideDeliverySchedulingHandler(){
        this._deliveryScheduling.classList.add('hidden');
    }
    addScheduleOrderHandlerRender(){
        this._parentElement?.addEventListener('click',(e)=>{
            const scheduleBtn=e.target.closest('.unactive-btn');
            const isScheduleBtn=scheduleBtn?.querySelector('span').textContent==='Schedule Order';
            if(!isScheduleBtn)return;
            this._addOrderNowBtnWidthHandlerRender(this._orderNowBtn);
            this._switchTextContentBtns(this._orderNowBtn,scheduleBtn.querySelector('span').textContent);
            this._addScheduleBtnWidthHandlerRender(scheduleBtn);
            this._switchTextContentBtns(scheduleBtn,this._orderNowBtnTextContent);
            this._showDeliverySchedulingHandler();
        });
    }
    addOrderNowHandlerRender(){
        this._parentElement?.addEventListener('click',(e)=>{
            const orderNowBtn=e.target.closest('.unactive-btn');
            const isOrderNowBtn=orderNowBtn?.querySelector('span').textContent==='Order Now';
               if(!isOrderNowBtn)return;
            this._addOrderNowBtnWidthHandlerRender(orderNowBtn);
            this._switchTextContentBtns(this._orderNowBtn,orderNowBtn.querySelector('span').textContent);
            this._addScheduleBtnWidthHandlerRender(this._orderNowBtn);
            this._switchTextContentBtns(orderNowBtn,this._scheduleBtnTextContent);
            this._hideDeliverySchedulingHandler();            
        });
    }

}
export default new DeliveryView();