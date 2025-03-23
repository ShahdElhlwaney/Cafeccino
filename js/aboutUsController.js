import aboutUsView from './views/aboutusView.js';
import headerView from './views/headerView.js';
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
const init=function(){
        aboutUsView.addAuthUserNameHandlerRender(controlAuthUserName);

    
}
init();