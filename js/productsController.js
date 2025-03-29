import ourProductView from './views/ourProductView.js';
import headerView from './views/headerView.js';
import categoriesView from './views/categoriesView.js';
import * as model from './model.js';
import deliveryView from './views/deliveryView.js';
import paymentView from './views/paymentView.js';
import authUserNameView from './views/authUserNameView.js';
const controlOffers=function(){
    ourProductView.render();
}
const controlCategoriesSlider=function(){
    categoriesView.render();


}
const controlAuthUserName=async function(){
    try{
        await model.getCurrentAuthUser();
        console.log('model.state.user.username',model.state.user.username);
        authUserNameView.render(model.state.user.username);
    }catch(err){
         throw err;
    }
  
}
const init=function(){
        ourProductView.addOffersHandlerRender(controlOffers);
        deliveryView.addAuthUserNameHandlerRender(controlAuthUserName);
        paymentView.addAuthUserNameHandlerRender(controlAuthUserName);
}
init();