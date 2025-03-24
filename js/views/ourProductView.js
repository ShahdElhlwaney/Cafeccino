
class OurProductView {
    _orderNowBtn=document.querySelector('.order-now_btn');
    _headerCover=document.querySelector('.header__cover');
    addAuthUserNameHandlerRender(handler){
        window.addEventListener('DOMContentLoaded',function(){
            handler();
        });
    }
}
export default new OurProductView();