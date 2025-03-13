import React,{useState} from 'react';
import men from './Menus.module.css';
import anime from '../../Maluku/anime.jpg';
//import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducer/reducer';
import {Stack,Typography,Rating,Box,Grid,TextField,Card,CardContent,CardMedia,CardActions,Button} from '@mui/material';
const Menus=(props)=>{
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState(1);
    const [quantValid,setQuantValid]=useState(true);
    const [errormess,setErrorMess]=useState('');
    const submitItems=(e)=>{
       e.preventDefault();
       if(quantity<1||quantity>3){
        setQuantValid(false);
        setErrorMess('Must be btwn 1 and 3');
        return;
        }

       dispatch(addToCart({id:props.id,price:props.price,name:props.name,image:props.imag,quantity:quantity,size:props.size}));

    }
   return(
       <Card sx={{margin:'auto',}}>
        <CardMedia 
        component='img' 
        height="140"
        image={anime}

        />
        <CardContent>
        <Stack className={men.icon} direction='row'>
            <Typography variant='subtitle1' >Size {props.size} </Typography >
            <Typography variant='subtitle1' > Ksh {props.price}</Typography >
        </Stack>
        <Typography variant='h5'  className={men.title}>{props.des}</Typography>
            <Rating defaultValue={3}> </Rating>
        </CardContent>
        <CardActions> 
               <Box component='form' onSubmit={submitItems} >
               <Stack direction='row'>
               <TextField
                        variant='filled'
                        size='small'
                        margin="normal"
                        required
                        id="number"
                        type='number'
                        name="quntity"
                        autoComplete="quantity"
                        autoFocus
                        onChange={
                            (e)=>{
                                setQuantity(e.target.value);
                                setQuantValid(true);
                            }
                        }
                        error={!quantValid}
                        helperText={errormess}
                        />
                         <Button variant='outlined' type='submit' size='small' color='success' sx={{padding:'0.1rem 0.1rem',minHeight:'auto'}}>Buy</Button>
               </Stack>      
                </Box>
        </CardActions>
        
       </Card>
   )
}
export default Menus;
