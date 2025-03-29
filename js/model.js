import {NUM_BLOG_POSTS_RES_PER_SLIDE} from './config.js';
import {Ajax} from './helper.js';
import { TOKEN } from './config.js';
export const state={
    blogPosts:{
        slide:1,
        results:[
           
        ]
    },
    user:{
        carts:[]
    }
}
export const getBlogPosts=async function(){
    try{
        const data=await Ajax('https://dummyjson.com/products');
        data.products.forEach(blog =>
             {
                const[img]=blog.images;                
                const blogPost={
                    id:blog.id,
                    title:blog.title,
                    description:blog.description,
                    image:img,
                    hidden:true
                };
                state.blogPosts.results.push(blogPost);
             });
    }
    catch(err){
        console.log(err);
    }

}
export const getBlogPostsPerSlide=function(slide){
    state.blogPosts.slide=slide;
    const start=(slide-1)*NUM_BLOG_POSTS_RES_PER_SLIDE;
    const end=slide*NUM_BLOG_POSTS_RES_PER_SLIDE;
    
    return [state.blogPosts.slide,state.blogPosts.results.slice(start,end)];
}
export const toggleDescription=function(id){ 
        if(state.blogPosts.results.some(blogPost=>blogPost.id===+id))
        {
            const blogPost=state.blogPosts.results.find(post=>post.id===+id)
            blogPost.hidden=! blogPost.hidden;
            console.log(blogPost.hidden);
        }
}
const saveAccessToken=function(token){
    localStorage.setItem('accessToken',JSON.stringify(token));
}
export const getAccessToken=function(){
    const userName=localStorage.getItem('accessToken');
    return JSON.parse(userName);
}
export const login=async function(user){
    try{
        const data=await Ajax('https://dummyjson.com/auth/login',user);
        console.log('data',data);
        state.user={
            "email":data.email,
            "username":data.username,
            "password":user.pass,
        };
        saveAccessToken(data.accessToken);
        // TOKEN= data.refreshToken;
    }catch(err){
       throw err;
    }
}
export const getCurrentAuthUser=async function(){
    try{
        const data=await Ajax('https://dummyjson.com/auth/me',undefined,getAccessToken());
        state.user.username=data.username;
    }catch(err){
        throw err;

    }

}
export const addToCart=async function(product){
    try{
        // const data=await Ajax('url',product,getAccessToken());
        state.user.carts.push(product);
    }catch(err){
        throw err;
    }

}
