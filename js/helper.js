

export const getJson=async function(url){
    try{
        const res= await fetch(url);
        const data=await res.json();
        if(!res.ok)throw new Error(data.statusText);
        return data;
    }catch(error){
        console.log(error);
        // console.error(error);
    }
  
}