
const BASE_URL = "https://javo-collection.onrender.com";


const URL = `${BASE_URL}/products/v1`;
const url = `${BASE_URL}/orders/v1`;
const url1 = `${BASE_URL}/payment/v5`;
const urllog = `${BASE_URL}/users/v3`;
const login='login';
const signup='sign';
export  async function  getMenu(){
    try {
        const response=await fetch(URL);
        if(!response.ok){
            throw new Error('Something went wrong,could not find the data');
        }
        const repo=response.json();
        //console.log(repo);
        return repo;
    } catch (error) {
        console.error(error);
    }
     
};
export async function initiatePayment(phone,totalAmount){
    try{
           const response=await fetch(url1,{
            method:'POST',
            body:JSON.stringify({phone:phone,amount:totalAmount}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(!response.ok){
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }
        const repo=response.json();
        //console.log(repo);
        return repo;
    }catch(err){
        console.error(err.message);
        return err.message;
    }
};
export  async function  getOrder(id){
    try {
        const response=await fetch(`${url}/${id}`);
        if(!response.ok){
            throw new Error('Something went wrong,Please check you network connection');
        }
        const repo=response.json();
        //console.log(repo);
        return repo;
    } catch (error) {
        console.error(error);
    }
     
};
export async function postOrder(details){
   try{
     const response=  await fetch(url,{
        method:'POST',
        body:JSON.stringify(details),
        headers:{
            'Content-Type':'application/json'
        }

     })
     if(!response.ok){
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
     }
     const repo=await response.json();

     return repo;
   }catch(err){
    console.log(err.message);
   }
}

export async function loginUser(credentials){

    try{
      const response=  await fetch(`${urllog}/${login}`,{
         method:'POST',
         body:JSON.stringify(credentials),
         headers:{
             'Content-Type':'application/json'
         }
 
      })
      if(!response.ok){
         const errorResponse = await response.json();
         throw new Error(errorResponse.message);
      }
      const repo=await response.json();
 
      return repo;
    }catch(err){
     console.log(err.message);
     return err.message;
    }
 };
  
 export  async function  getAllOrders(id){
    try {
        const response=await fetch(url);
        if(!response.ok){
            const errorRes=response.json();
            throw new Error(errorRes.message);
        }
        const repo=response.json();
        //console.log(repo);
        return repo;
    } catch (error) {
        console.error(error);
    }
     
};
export async function Delete(id,specifier){
    let urlToBeUsed='';
    if (specifier==='order'){
        urlToBeUsed=url;
    }else{
        urlToBeUsed=URL;
    }
    try{
       await fetch(`${urlToBeUsed}/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }

       })

    }catch(err){
      console.log(err);
    }
}
  //updation
  export async function Update(det){
    let ToBeUsed='';
    if (det.specifier==='order'){
        ToBeUsed=url;
    }else{
        ToBeUsed=URL;
    }
    try{
        const respo=await fetch(`${ToBeUsed}/${det.id}`,{
            method:'PATCH',
            body:JSON.stringify(det.data),
            headers:{
                'Content-Type':'application/json'
            },
        }) 
      const repo=await respo.json();
      return repo;
    }catch(err){
       console.log(err);
    }
    
}
export async function SignUser(details){
    
    try{
      const response=  await fetch(`${urllog}/${signup}`,{
         method:'POST',
         body:JSON.stringify(details),
         headers:{
             'Content-Type':'application/json'
         }
 
      })
      if(!response.ok){
         const errorResponse = await response.json();
         throw new Error(errorResponse.message);
      }
      const repo=await response.json();
 
      return repo;
    }catch(err){
     console.log(err.message);
     return err.message;
    }
 };
