import Button from "../Button/Button";
import { useState } from "react";
import { loginUser } from "../ApiLoader";
import { useNavigate } from "react-router-dom";
const Sign=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [emailValid,setEmailValid]=useState(true);
    const [Password,setPassword]=useState('');
    const [passwordValid,setPasswordValid]=useState(true);
    const [loginValid,setLoginValid]=useState(true);
  const emailHandler= (e)=>{
      setEmail(e.target.value); 
      setEmailValid(true) ;
 };
  const passwordHandler=(e)=>{
    setPassword(e.target.value); 
    setPasswordValid(true);
    setLoginValid(true) ;     
};
const isValidEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
};
  const onSubmitHandler= async(e)=>{
  e.preventDefault();
  if(email.trim().length===0|| !isValidEmail(email)){
    setEmailValid(false);
    return;
  }
  if(Password.trim().length===0){
    setPasswordValid(false);
    return;
  }
    const loged=await loginUser({email,Password});
    console.log(loged);
   // console.log(loged.status);
   //navigate('/admin');
    if(loged=== 'Incorrect email or password'){
        setLoginValid(false);
        return;
    };
    navigate('/admin',{state:{name:loged.data}});
 };
  return(
    <div>
        <h3>Login in to your account</h3>
        <form action=""  onSubmit={onSubmitHandler}>

            <label htmlFor="email">Email</label><br/>
            <input type="email" onChange={emailHandler}/><br/>
            {!emailValid && <p> Enter valid Email</p>}
            <label htmlFor="password">Password</label><br/>
            <input type="password" onChange={passwordHandler}/><br/>
            {!passwordValid && <p>Fill the password field</p>}
            {!loginValid && <p>Incorrect email or password</p>}
            <Button to='submit'>Login</Button>

        </form>
        <button type="button"> Forgot password</button>
    </div>
  )
}
export default Sign;