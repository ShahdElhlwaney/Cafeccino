import {TIME_OUT_SEC} from './config.js';
const timeout=function(s){
    return new Promise(function(_,reject){
        setTimeout(()=>{
            reject(new Error("Your request Tool a long Time"));
        },s*1000)
    });
}


export const Ajax=async function(url,uploadData=undefined){
    try{
        console.log('uploadData',uploadData);
         const res=uploadData?await Promise.race([fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify(uploadData) 
         }),timeout(TIME_OUT_SEC)]) :await Promise.race([fetch(url),timeout(TIME_OUT_SEC)]);
         const data=await res.json();
         console.log('res=>',res);
         console.log('data=>',data);

         console.log(res.ok);
        if(!res.ok)throw new Error(data.message);
         return data;
    }catch(error){
        throw error;
    }
  
}