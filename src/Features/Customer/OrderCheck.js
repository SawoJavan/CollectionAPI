import { useState } from "react";
import { getOrder } from "../ApiLoader.js";
//import Button from "../Button/Button";
import {Button,Box,Typography,TextField,Paper,Card,CardContent,Grid} from '@mui/material';
import {Star} from '@mui/icons-material'
const OrderCheck=()=>{

    const [orda,setOda]=useState('');
    const [odaValid,setOdaValid]=useState(true);
    const [render,setRender]=useState(false);
    //const [odaError,setOdaError]=useState('');
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
    
    <Box sx={{marginTop:'2.2rem'}}>
       
        <Typography variant="h5"> 
        Thank you once again for shopping with the best designers countrywide.
         <Typography variant='h5' sx={{color:'green',fontFamily:'italic'}}>"Your outfit is our pride" </Typography>
        </Typography>

        <Typography variant='subtitle1' sx={{marginTop:'3%'}}>You can track your order by typing your order id in the serch field below</Typography>

        <Box component='form' onSubmit={getOrda}>
            <Grid container>
                <Grid item xs={6} sm={3}>
                <TextField
                    sx={{width:'10rem'}}
                    variant="standard"
                    margin="normal"
                    required
                    name="search"
                    label="search"
                    id="serach"
                    autoComplete="current-password"
                    onChange={
                        (e)=>{setOda(e.target.value); setOdaValid(true)}
                    }
                    error={!odaValid}
                        helperText={!odaValid && 'Enter a valid Order'}
                    />
                </Grid>
                <Grid item  xs={6} sm={9} >
                <Button variant="outlined" color="success" type='submit' sx={{borderRadius:'2rem',marginTop:'5%'}}>Search</Button>
                </Grid>

            </Grid>
        
        
        </Box>
        

        {render && <Box sx={{marginTop:'2%'}}>
            <Typography variant='subtitle2'>Dear {data.CustomerDetails.Name},Thank you once again for shopping with the best Designers countrywide.</Typography>
               <Paper sx={{marginTop:'2%'}}>
                <Box sx={{margin:'2%'}}>
               <Typography variant='h5'>Order Status: <Typography variant='subtitle1' component='span'>{data.deliverStatus}</Typography></Typography>
               <Typography variant='h5' sx={{color:'green',textDecoration:'underline'}}>Items to be delivered</Typography>
               {data.Items.map(item=><Card sx={{marginBottom:'1.5%', marginTop:'1.5%'}}>
                <CardContent>
              <Typography variant="body2"> <Star size='small' color='warning'  sx={{fontSize:'1.2rem'}}/><Typography variant="body2" component='span'>{' '}Name: {item.name}</Typography></Typography>
              <Typography variant="body2"><Star size='small' color='warning'  sx={{fontSize:'1.2rem'}}/><Typography variant="body2" component='span'>{' '}{item.quantity} pieces</Typography></Typography>
              <Typography variant="body2"><Star size='small' color='warning'  sx={{fontSize:'1.2rem'}}/><Typography variant="body2" component='span'>{' '}Size: {item.size}</Typography></Typography>
                   </CardContent>
               </Card>)}
               </Box>
               </Paper>
         </Box>}
         

    </Box>
   )
}
export default OrderCheck;
{/* <form action="" onSubmit={getOrda}>
            <label htmlFor="search">Enter OrderId</label>
            <input type="text" onChange={(e)=>{setOda(e.target.value); setOdaValid(true)}}/>
            {!odaValid && <p>Enter the Order</p>}
            <Button type='button'>Search</Button>
        </form> */}