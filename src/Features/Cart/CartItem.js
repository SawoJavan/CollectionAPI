import carts from './CartItems.module.css';
import luku from '../../Maluku/arsernali.jpg';
import Button from '../Button/Button';
import { removeFromCart } from '../../reducer/reducer';
import { useDispatch } from 'react-redux';

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
    <div className={carts.cover}>
        <div className={carts.mage}>
           <img src={luku} alt=""/>
            <span>{props.name}</span>
        </div>
        <div className={carts.content}>
           <p ><span>{props.quantity}</span> X <span>{props.price}</span> </p>
           <p>{props.quantity*props.price}</p>
        </div>
        <div className={carts.butt}><Button type='button' onClick={removeItem}>remove</Button></div>
        
        {/* <button type='button' onClick={removeItem}> Delete</button> */}
    </div>
  )
}
//export default CartItems;