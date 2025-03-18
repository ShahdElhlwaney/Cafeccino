import View from './view';
class SliderView extends View{
    _parentElement=document.querySelector('.blog-posts__slider');
    _rightBtn=document.querySelector('.blog-posts__right-btn');
    _leftBtn=document.querySelector('.blog-posts__left-btn');

    constructor(){
        super();
    }

    _generateMarkup(isHidden=true){
        const curSlide=this._data[0];
        return this._data[1].map(blog=>`<div class=" slide" data-id=${blog.id} data-next-slide=${+curSlide+1} data-prev-slide=${+curSlide-1}
                                        >
                                  <img src=${blog.image}>
                                  <h3>${blog.title}</h3>
                                  <p>${blog.description.substr(0,75)}
                                    <span class="more ${blog.hidden?'hidden':''}">${blog.description.substr(75)}</span>
                                  </p>
                                  <p class="read-more">${blog.hidden?'Read more':'Read less'}→</p>
                               </div>`).join('');
    }
    addHandlerResPerSlideRender(handler){
        let slide;
        this._rightBtn.addEventListener('click',(e)=>{
        slide=this._parentElement.firstElementChild?.dataset.nextSlide;
        handler(slide);
       });
       this._leftBtn.addEventListener('click',(e)=>{
        slide=this._parentElement.firstElementChild?.dataset.prevSlide;
        this._parentElement.childNodes.forEach(slide=>slide.style.transform="translateX(0rem)");
        handler(slide);

       });

    }
    addHandlerReadMoreRender(handler){
        this._parentElement.addEventListener('click',(e)=>{
            const readMoreBtn=e.target.closest('.read-more');
            if(!readMoreBtn)return;
            handler(readMoreBtn.parentElement.dataset.id);
        });
    }
}
export default new SliderView();