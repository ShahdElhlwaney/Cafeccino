export default class View{
    _data;
    render(data=undefined){
        if((Array.isArray(data)&&data.length===0)) this.renderError();
        if(data)this._data=data;
        const markup=this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markup);
    }
    // update(data){
    //     if(!data||(Array.isArray(data)&&data.length===0)) this.renderError();
    //     this._data=data;
    //     const curEl=this._parentElement.
    // }
    renderError(){
        this._parentElement.insertAdjacentHTML('afterbegin',this._errorMessage);
    }
    _clear(){
       this._parentElement.innerHTML='';
    }
}