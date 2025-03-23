import * as model from './model.js';
import {NUM_BLOG_POSTS_RES_PER_SLIDE} from './config.js'
import sliderView from './views/sliderView.js';
import signupView from './views/signupView.js';
import loginView from './views/loginView.js';
import AuthView from './views/authView.js';
import homeView from './views/homeView.js';
const controlBlogPosts=async function(){
    await model.getBlogPosts();
    console.log(model.state.blogPosts.slide);
    const res=model.getBlogPostsPerSlide(model.state.blogPosts.slide);
    console.log(res[1]);
    sliderView.render(res);
}
controlBlogPosts();
const controlReadMore=function(id){
    model.toggleDescription(id);
    const res=model.getBlogPostsPerSlide(model.state.blogPosts.slide);
    sliderView.render(res);
}
const controlResPerSlide=function(slide){
    const length=model.state.blogPosts.results.length;
    if(+slide>length/NUM_BLOG_POSTS_RES_PER_SLIDE)slide=1;
    if(+slide===0)slide=length/NUM_BLOG_POSTS_RES_PER_SLIDE;
    const res=model.getBlogPostsPerSlide(slide);
    sliderView.render(res);    
}
const controlAuthView=function(){
    // console.log(authView);
    signupView.render();
}
const controlAuthNavView=function(authView){
    console.log(authView);
    if(authView.trim()==="Login"){console.log('true');loginView.render();}
    else signupView.render();

    

}
const controlLogin=async function(user){
    try{
       await model.login(user);
       homeView.addHomeHandlerRender(model.state.user.username);
    }catch(err){
        loginView.renderError(err.message);
    }
}
const init=function(){
    sliderView.addHandlerReadMoreRender(controlReadMore);
    sliderView.addHandlerResPerSlideRender(controlResPerSlide);
    signupView.addSignupHandler(controlAuthView);
    AuthView.addNavBetweenAuthViewsHandlerRender(controlAuthNavView);
    loginView.addLoginHandler(controlLogin);

}   
init();