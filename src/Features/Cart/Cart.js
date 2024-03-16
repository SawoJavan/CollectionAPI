 import {CartItems} from "./CartItem.js";
 import {  useSelector } from "react-redux";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
 const  Cart= ()=>{
  const items=useSelector(state=>state.cart.items);
  const totalamt=useSelector(state=>state.cart.TotalAmt);
  console.log(items);
  console.log(totalamt)
    const DIV=<div> <h4>Total:{totalamt}</h4>
                   <Link to='/menu'><Button>&larr; Back</Button></Link> 
    
                    <Link to='/customer'><Button>Next &rarr;</Button></Link>
              </div>  
    return(
      <div>
          <p>Yourt cart items</p>
         
         {items.map((item=><CartItems key={item.id} quantity={item.quantity} price={item.price} image={item.image} id={item.id} name={item.name}/>))} 
         {totalamt!==0 &&items.length!==0&&DIV}
         {totalamt===0&&items.length===0&&<p>You have no items in the cart. Please add some items</p>}
         {totalamt===0&&items.length===0&&<Link to='/menu'><Button>&larr; Back</Button></Link> }
          
      </div>
    )
  }
  export default Cart;