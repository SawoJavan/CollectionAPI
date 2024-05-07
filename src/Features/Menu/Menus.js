import React,{useState} from 'react';
import men from './Menus.module.css';
import anime from '../../Maluku/anime.jpg';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducer/reducer';
import {Stack,Typography,Rating} from '@mui/material';
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
    <Stack className={men.slidd}>
                <Stack className={men.slide}>
                        <Stack className={men.image}>
                           <img src={anime} alt=""/>
                           <span>{props.name}</span>
                        </Stack>
                        <Stack className={men.content}>
                            <Stack className={men.icon} direction='row'>
                                <Typography variant='subtitle1' >Size {props.size} </Typography >
                                <Typography variant='subtitle1' > Ksh {props.price}</Typography >
                            </Stack>
                            <Typography variant='h5'  className={men.title}>{props.des}</Typography>
                             <Rating></Rating>
                            <form action="" onSubmit={submitItems}>
                                <Stack>
                                <label htmlFor="quantity">Quantity</label>
                                <input type="number" min={1} max={3} onChange={(e)=>{
                                    setQuantity(e.target.value);
                                    setQuantValid(true);
                                }}/>
                                {!quantValid && <p>Must be btwn 1 and 3</p>}

                                </Stack>
                               
                                <Button type='submit'>Buy</Button>
                            </form>
                            
                        </Stack>
                </Stack>
    </Stack>
   )
}
export default Menus;