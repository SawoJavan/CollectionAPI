// import carts from './CartItems.module.css';
// import luku from '../../Maluku/arsernali.jpg';
//import Button from '../Button/Button';
import { removeFromCart } from '../../reducer/reducer';
import { useDispatch } from 'react-redux';
import {Box,Button,Grid,Typography} from '@mui/material'
//import Icon from '@material-ui/core/Icon';
import { DeleteOutline } from '@mui/icons-material';

export function CartItems(props){
    const dispatch=useDispatch();
    const removeItem=()=>{

        dispatch(removeFromCart({
            id:props.id,
            quantity:props.quantity,
            price:props.price
        }))
    }
  return(
    <Box >
      <Grid container>
           <Grid item xs={4} sm={4} md={4} lg={4}> 
              <Typography variant='h6' component='span'> {props.quantity}{''} x</Typography>
              <Typography variant='body1' component='span'>{' '}{props.name}</Typography>
           </Grid>
           <Grid item xs={4} sm={4} md={4} lg={4}> 
              <Typography variant='h6' component='span'>${' '}{props.quantity*props.price}</Typography>
           </Grid>
           <Grid item xs={4} sm={4} md={4} lg={4}> 
             <Button variant='outlined' type='button' size='small' color='success' onClick={removeItem} startIcon={<DeleteOutline/>}></Button>
           </Grid>
       </Grid>
        {/* <div className={carts.content}>
           //className={carts.cover}
           <p ><span>{props.quantity}</span> X <span>{props.price}</span> </p>
           <p>{props.quantity*props.price}</p>
        </div>
        <div className={carts.butt}><Button type='button' onClick={removeItem}>remove</Button></div> */}
        
        {/* <button type='button' onClick={removeItem}> Delete</button> */}
      <Box sx={{border:'none',borderTop:'1px solid green', marginTop:'1.5rem'}} component='hr'>

      </Box>
    </Box>
  )
}
//export default CartItems;