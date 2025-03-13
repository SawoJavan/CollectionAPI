import { useState } from "react";
//import Button from "../Button/Button";
import { resetCart } from "../../reducer/reducer";
import { postOrder } from "../ApiLoader";
import { useSelector } from "react-redux";
import { initiatePayment  } from "../ApiLoader";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box,TextField,FormControlLabel,Checkbox, Typography,Button,Stack,Card,CardContent,CardActions} from "@mui/material";

export function CustomerInfo(){
  const dispatch=useDispatch();
  const totalAmount=useSelector(state=>state.cart.TotalAmt);
  const item=useSelector(state=>state.cart.items);
  
  //Customer Information States
const [Name,setName]=useState('');
const [nameValid,setNameValid]=useState(true);
const [nameError,setNameError]=useState('');
const [phone,setPhone]=useState('');
const [phoneValid,setPhoneValid]=useState(true);
const [phoneError,setPhoneError]=useState('');
const [addres,setAddres]=useState('');
const [addresValid,setAddresValid]=useState(true);
const [addressError,setAddressError]=useState('');
const [formValid,setFormValid]=useState(false);
const [reference,setReference]=useState('0');
  const nameHandler=(e)=>{
   setName(e.target.value);
   setNameValid(true);
   setFormValid(false);
  };
  const phoneHandler=(e)=>{
    setPhone(e.target.value);
    setPhoneValid(true);
    setFormValid(false);
    setPhoneError('Enter a valid phone number');
  };
  const addresHandler=(e)=>{
    setAddres(e.target.value);
    setAddresValid(true);
    setFormValid(false);
    setAddressError('Enter a vali address');
  };
  function validatePhoneNumber(phoneNumber) {
    // Regular expression to match digits with optional leading zero
    var regex = /^07\d{8}$/;
    return regex.test(phoneNumber);
}
//let OrderID;
//let detail;

  const submitHandler=(e)=>{
    e.preventDefault();
    if(Name.trim().length < 2){
      setNameValid(false);
      setNameError('Enter a valid name')
      return;
    }
    if(phone.trim().length < 10 || phone.trim().length >10){
      setPhoneValid(false);
      setPhoneError('Enter a valid phone number')
      return;
      
    }
    if(validatePhoneNumber(phone)===false){
        setPhoneValid(false);
        setAddressError('Enter a valid address ')
        return;
    }
    if(addres.trim().length===0){
      setAddresValid(false);
      return;
    }
   
    setFormValid(true);
    
     


  }
  const confirmPayment=(e)=>{
   e.preventDefault();
   (async()=>{
    const res=await initiatePayment(phone,totalAmount);
    console.log(res);
    console.log(res.response.ResponseCode);
    const code=res.response.ResponseCode*1;
    const  OrderID=Math.random().toFixed(6)*1000000;
    setReference(OrderID);
    console.log(OrderID);
     const detail={
      CustomerDetails: {
        Name,
        Phone: phone,
        Adress: addres
    },
    amountPaid:totalAmount,
    OrderId: OrderID,
    Items:item,
  }
  console.log(detail);
    if (code===0){
    (async()=>{
      const respo =await postOrder(detail);
      console.log(respo);
      ///console.log('Code not reached,but dont know the problem');
    })()
      
    }

    dispatch(resetCart());
    //history.push('/orderplaced');
   }
  )();
  }
    return(  

      <Box sx={{marginTop:'7%'}}>
          <Typography variant='body1' sx={{textAlign:'center'}}>Please provide us with the following details </Typography>
        
        {totalAmount !==0 && !formValid && < Box component='form'  onSubmit={submitHandler}>
         <Stack display='flex' direction='column' alignContent='center'>
        <TextField
        sx={{width:'10rem'}}
        variant="filled"
          margin="normal"
          required
          id="name"
          label="Name"
          name="name"
          autoComplete="email"
          autoFocus
          onChange={nameHandler}
          error={!nameValid}
          helperText={nameError}
        />
        <TextField
        sx={{width:'10rem'}}
        variant="filled"
          margin="normal"
          required
          name="phone"
          label="Phone"
          type=""
          id="phone"
          autoComplete="current-phone"
          onChange={phoneHandler}
          error={!phoneValid}
            helperText={phoneError}
        />
        <TextField
        sx={{width:'10rem'}}
        variant="filled"
          margin="normal"
          required
          name="address"
          label="address"
          id="address"
          autoComplete="current-password"
          onChange={addresHandler}
          error={!addresValid}
            helperText={addressError}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Do you want to give your order a priority?"
        />
        <Button
          
          type="submit"
          variant="contained"
          color="success"
          sx={{ mt: 3, mb: 2 ,width:'5rem'}}
        >
          Proceed
        </Button>
        
        </Stack>
          </Box>
        }

          {formValid && totalAmount!==0 && <Box action="" component='form' onSubmit={confirmPayment}>
            <Card>
             <CardContent>
            <Typography variant="subtitle1" component='p'>Confirm  payment of <br/>Ksh <Typography variant="body1" component='span'>{totalAmount}</Typography><br/> Phone number <span>{phone}</span></Typography>
            </CardContent>
            <CardActions>
            <Button variant='contained' type='submit' color="success">Pay Now</Button>
            </CardActions>
            </Card>
          </Box>
          }
          {totalAmount===0&&<Typography variant="body2"> {reference}  is your order ID.PLEASE note somewhwre for future use.
          <Typography variant="body2">Otherwise your order is placed succesfully.</Typography>
          <Link to='/'><Button>Back &larr;</Button></Link>
          </Typography>}
      </Box>
    )
  }


  // <label htmlFor="full names">Full Names</label><br/>
  //           <input type="text" onChange={nameHandler} /><br/>
  //            {!nameValid && <p>Enter a valid name</p>}
  //           <label htmlFor="Phone">Phone</label><br/>
  //           <input type="tel" onChange={phoneHandler}/><br/>
  //           {!phoneValid && <p>must be 10 digits starting with 07</p>}
  //           <label for="address">Address</label><br/>
  //           <input type="text" onChange={addresHandler} /><br/>
  //           {!addresValid && <p>Enter a valid addres</p>}
  //           <input type="checkbox" name="" id=""/>
  //           <label for="">Want to give your order a priority?</label>
  //             <Button type='submit'>Update</Button>