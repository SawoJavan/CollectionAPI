import { useState } from "react";
import Button from "../Button/Button";
import { resetCart } from "../../reducer/reducer";
import { postOrder } from "../ApiLoader";
import { useSelector } from "react-redux";
import { initiatePayment  } from "../ApiLoader";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export function CustomerInfo(){
  const dispatch=useDispatch();
  const totalAmount=useSelector(state=>state.cart.TotalAmt);
  const item=useSelector(state=>state.cart.items);
  
  //Customer Information States
const [Name,setName]=useState('');
const [nameValid,setNameValid]=useState(true);
const [phone,setPhone]=useState('');
const [phoneValid,setPhoneValid]=useState(true);
const [addres,setAddres]=useState('');
const [addresValid,setAddresValid]=useState(true);
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
  };
  const addresHandler=(e)=>{
    setAddres(e.target.value);
    setAddresValid(true);
    setFormValid(false);
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
      return;
    }
    if(phone.trim().length < 10 || phone.trim().length >10){
      setPhoneValid(false);
      return;
    }
    if(validatePhoneNumber(phone)===false){
        setPhoneValid(false);
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
        Address: addres
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
      <div>
        
        {totalAmount !==0 && <form action="" onSubmit={submitHandler}>
            <label htmlFor="full names">Full Names</label><br/>
            <input type="text" onChange={nameHandler} /><br/>
             {!nameValid && <p>Enter a valid name</p>}
            <label htmlFor="Phone">Phone</label><br/>
            <input type="tel" onChange={phoneHandler}/><br/>
            {!phoneValid && <p>must be 10 digits starting with 07</p>}
            <label for="address">Address</label><br/>
            <input type="text" onChange={addresHandler} /><br/>
            {!addresValid && <p>Enter a valid addres</p>}
            <input type="checkbox" name="" id=""/>
            <label for="">Want to give your order a priority?</label>
              <Button type='submit'>Update</Button>
          </form>
        }

          {formValid && totalAmount!==0 && <form action=""  onSubmit={confirmPayment}>
            <h3>Confirm  payment of <br/>Ksh <span>{totalAmount}</span><br/> Phone number <span>{phone}</span></h3>
            <Button type='submit'>Pay Now</Button>
          </form>
          }
          {totalAmount===0&&<p> {reference}  is your order ID.Please keep for future use.
          <p>Otherwise your order is placed succesfully.</p>
          <Link to='/'><Button>Back &larr;</Button></Link>
          </p>}
      </div>
    )
  }