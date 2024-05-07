  import Button from "../Button/Button";
  import { Delete,Update } from "../ApiLoader";
 const Orders=(props)=>{
    //console.log(props.customerDetails)
    console.log(props.id)

    const deleteOrder=()=>{
      const specs='order';
        (async()=>{
          await Delete(props.id,specs);
        })();
    }
    const updateOrder=()=>{

      const specs='order';
      let det={id:props.id,specifier:specs,data:{deliverStatus:'Have been processed.Order will reach you in a few'}}
      (async()=>{
         const display=await Update(det);
         console.log(display);
      })()
    }
   return(
    <div>
         <div>
            <p>Customers Name: {props.customerDetails.Name}</p>
            <p>Phone Number: {props.customerDetails.phone}</p>
            <p>Order Status: {props.delStatus}</p>
            <p>
                Items bought:
                {props.items.map((elem)=><p>
                    <span>{elem.name}</span>

                    <span>{elem.quantity}</span>
                    
                    <span>{elem.size}</span>
                </p>)}
            </p>


         </div>
      <Button type='button'onClick={updateOrder} >Update Order Status</Button>   <Button type='button'  onClick={deleteOrder}>Delete</Button>
      
    </div>
   )
};
export default Orders;