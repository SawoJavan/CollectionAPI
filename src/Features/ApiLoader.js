
const URL="http://localhost:3001/products/v1";
const url="http://localhost:3001/orders/v1";

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
           const response=await fetch("http://localhost:3001/payment/v5",{
            method:'POST',
            body:JSON.stringify({phone:phone,amount:totalAmount}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        if(!response.ok){
            throw new Error('Something went wrong,could not find the data');
        }
        const repo=response.json();
        //console.log(repo);
        return repo;
    }catch(err){
        console.error(err);
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
