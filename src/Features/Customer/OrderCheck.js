import { useState } from "react";
import { getOrder } from "../ApiLoader.js";
import Button from "../Button/Button";
const OrderCheck=()=>{

    const [orda,setOda]=useState('');
    const [odaValid,setOdaValid]=useState(true);
    const [render,setRender]=useState(false);
    const[data,setData]=useState('');

    const getOrda=(e)=>{
        e.preventDefault();
        if(orda.trim().length<6 || orda.trim().length>6 ){
             setOdaValid(false);
             return;
        }
       (async ()=>{
       const dat= await getOrder(orda);
       //console.log(dat.message);
       setData(dat.message);
        // if(dat.message.Items.length===0){

        // }
        setRender(true);
       })()
    }
   console.log(data);
   //console.log(data.CustomerDetails);
   return(
    
    <div>
        Here is where you check your order status.
        <form action="" onSubmit={getOrda}>
            <label htmlFor="search">Enter OrderId</label>
            <input type="text" onChange={(e)=>{setOda(e.target.value); setOdaValid(true)}}/>
            {!odaValid && <p>Enter the Order</p>}
            <Button type='button'>Search</Button>
        </form>
        {render && <div>
            <p>Dear {data.CustomerDetails.Name},Thank you for shopping with us.Here is your order status</p>
               <h3>Order Status: <span>{data.deliverStatus}</span></h3>
               <h4>Items to be delivered</h4>
               {data.Items.map(item=><ul>
                   <li>Name: {item.name}</li>
                   <li>{item.quantity} pieces</li>
                   <li>Size: {item.size}</li>
               </ul>)}
         </div>}
         

    </div>
   )
}
export default OrderCheck;