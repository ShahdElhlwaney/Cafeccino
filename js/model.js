import {NUM_BLOG_POSTS_RES_PER_SLIDE} from './config.js';
import {getJson} from './helper.js';
export const state={
    blogPosts:{
        slide:1,
        results:[
           
        ]
    }
}
export const getBlogPosts=async function(){
    try{
        const data=await getJson('https://dummyjson.com/products');
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
