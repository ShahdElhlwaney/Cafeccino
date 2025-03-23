export default class View{
    _data;
    render(data=undefined){
        if((Array.isArray(data)&&data.length===0)) this.renderError();
        if(data)this._data=data;
        const markup=this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }
    update(data){
        // this._data=data;
        // const newMarkup=this._generateMarkup();
        // const newDom=document.createRange().createContextualFragment(newMarkup);
        // const newEls=Array.from(newDom.querySelectorAll('*'));
        // const curEls=Array.from(this._parentElement.querySelectorAll('*')) ;
        // newEls.forEach((newEl,i)=>{
        //   const curEl=curEls[i];
        //   if(!newEl.isEqualNode(curEl) 
        //     && newEl.firstChild?.nodeValue.trim()!=='')
        //   {
        //     curEl.textContent=newEl.textContent;
        //   }
        //   if(!newEl.isEqualNode(curEl))
        //   {
        //     Array.from(newEl.attributes).forEach((attr)=>{
        //       curEl.setAttribute(attr.name,attr.value);
        //     })
        //   }
        // });   
      }
    renderError(){
        this._parentElement.insertAdjacentHTML('afterbegin',this._errorMessage);
    }
    _clear(){
       this._parentElement.innerHTML='';
    }
}