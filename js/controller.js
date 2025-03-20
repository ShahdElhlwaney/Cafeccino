import * as model from './model.js';
import {NUM_BLOG_POSTS_RES_PER_SLIDE} from './config.js'
import sliderView from './views/sliderView.js';
import signupView from './views/signupView.js';
import loginView from './views/loginView.js';
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
    signupView.render();
}
const controlLoginView=function(){
    loginView.render();

}
const init=function(){
    sliderView.addHandlerReadMoreRender(controlReadMore);
    sliderView.addHandlerResPerSlideRender(controlResPerSlide);
    signupView.addSignupHandler(controlAuthView);
    loginView.addLoginNavHandlerRender(controlLoginView);
}   
init();