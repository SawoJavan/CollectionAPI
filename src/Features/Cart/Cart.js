 import {CartItems} from "./CartItem.js";
 import {  useSelector } from "react-redux";
//import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import { Box,Typography,Button } from "@mui/material";
 const  Cart= ()=>{
  const items=useSelector(state=>state.cart.items);
  const totalamt=useSelector(state=>state.cart.TotalAmt);
  console.log(items);
  console.log(totalamt)
    const DIV=<Box> 
                  <Typography variant="h6" >Total Amount:{totalamt}</Typography>
                   <Link to='/menu'><Button variant="contained" color="success" sx={{margin:'1rem',borderRadius:'1rem'}}>&larr; Back</Button></Link> 
                   <Link to='/customer'><Button variant="contained" color="success" sx={{margin:'1rem',borderRadius:'1rem'}}>Next &rarr;</Button></Link>
              </Box>  
    return(
      <Box sx={{marginTop:'5%'}}>

          <Typography variant="h6" sx={{fontWeight:'bold',marginBottom:'2rem',marginTop:'1rem',textAlign:'center'}}>Your cart items</Typography>
         
         {items.map((item=><CartItems key={item.id} quantity={item.quantity} price={item.price} image={item.image} id={item.id} name={item.name}/>))}

         {totalamt!==0 &&items.length!==0&&DIV}
         {totalamt===0&&items.length===0&&<Typography variant="subtitle" component='span'>You have no items in the cart. Please add some items</Typography>}
         {totalamt===0&&items.length===0&&<Link to='/menu'><Button>&larr; Back</Button></Link> }
          
      </Box>
    )
  }
  export default Cart;