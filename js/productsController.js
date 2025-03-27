import ourProductView from './views/ourProductView.js';
import headerView from './views/headerView.js';
import categoriesView from './views/categoriesView.js';
import * as model from './model.js';
const controlAuthUserName=async function(){
    try{
        await model.getCurrentAuthUser();
        console.log('..',model.state.user.username);
        headerView.render(model.state.user.username);
    }catch(err){
         throw err;
    }
  
}
const controlOffers=function(){
    ourProductView.render();
}
const controlCategoriesSlider=function(){
    categoriesView.render();


}
const init=function(){
        // ourProductView.addAuthUserNameHandlerRender(controlAuthUserName);
        ourProductView.addOffersHandlerRender(controlOffers);
        // ourProductView.addCategoriesSliderHandlerRender(controlCategoriesSlider);
        // categoriesView.addNextSlideHandlerRender(controlCategoriesSlider);
}
init();