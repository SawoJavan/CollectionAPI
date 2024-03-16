import React,{useState} from 'react';
import men from './Menus.module.css';
import anime from '../../Maluku/anime.jpg';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducer/reducer';
const Menus=(props)=>{
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState(1);
    const [quantValid,setQuantValid]=useState(true);

    const submitItems=(e)=>{
       e.preventDefault();
       if(quantity<1||quantity>3){
        setQuantValid(false);
        return;
        }

       dispatch(addToCart({id:props.id,price:props.price,name:props.name,image:props.imag,quantity:quantity,size:props.size}));

    }
   return(
    <div className={men.slidd}>
                <div className={men.slide}>
                        <div className={men.image}>
                           <img src={anime} alt=""/>
                           <span>{props.name}</span>
                        </div>
                        <div className={men.content}>
                            <div className={men.icon}>
                                <a href="">Size {props.size} </a>
                                <a href=""> Ksh {props.price}</a>
                            </div>
                            <a href="" className={men.title}>{props.des}</a>
                            <p>Vibe with us any time.We reach you quickly </p> 
                            <form action="" onSubmit={submitItems}>
                                <div>
                                <label htmlFor="quantity">Quantity</label>
                                <input type="number" min={1} max={3} onChange={(e)=>{
                                    setQuantity(e.target.value);
                                    setQuantValid(true);
                                }}/>
                                {!quantValid && <p>Must be btwn 1 and 3</p>}

                                </div>
                               
                                <Button type='submit'>Buy</Button>
                            </form>
                            
                        </div>
                </div>
    </div>
   )
}
export default Menus;