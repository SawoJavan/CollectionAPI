import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState} from "react";
import { SignUser } from "../ApiLoader";
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const navigate=useNavigate();
    const [username,setUsername]=useState('');
    const [nameValid,setNameValid]=useState(true);
    const [email,setEmail]=useState('');
    const [emailValid,setEmailValid]=useState(true);
    const [Password,setPassword]=useState('');
    const [passwordValid,setPasswordValid]=useState(true);
    const [PasswordCon,setPasswordCon]=useState('');
    const [passwordConValid,setPasswordConValid]=useState(true);
    const [loginValid,setLoginValid]=useState(true);

    const usernameHandler=(e)=>{
      setUsername(e.target.value);
      setNameValid(true)
    }
  const emailHandler= (e)=>{
      setEmail(e.target.value); 
      setEmailValid(true) ;
 };
  const passwordHandler=(e)=>{
    setPassword(e.target.value); 
    setPasswordValid(true);
    //setLoginValid(true) ;     
};
const passwordConHandler=(e)=>{
  setPasswordCon(e.target.value);
  setPasswordConValid(true);
}
const isValidEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
};
const isValidName = (name) => {
    return /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);
};
const isValidPassword = (pass) => {
    return /^(?=.*[!@#$%^&*()-_=+{};:,<.>?])(?=.*[A-Z]).{8,}$/.test(pass);
};

   
  const onSubmitHandler= async(e)=>{
  e.preventDefault();
  if(username.trim().length===0 || !isValidName(username)){
    setNameValid(false);
    return;
  }
  if(email.trim().length===0 || !isValidEmail(email)){
    setEmailValid(false);
    return;
  };
  if(Password.trim().length===0 || !isValidPassword(Password)){
    setPasswordValid(false);
    return;
  };
  if(Password!==PasswordCon){
    setPasswordConValid(false);
    return;
  };
  console.log('sucess');

  (async ()=>{
     const Signed= await SignUser({username:username,email,password:Password,confirmPassword:PasswordCon});
     if(Signed.status===200){
      navigate('/sign')
     }
    //  console.log(Signed);
  })();

    
}
   return(
    <div>
        <h3>Create an account</h3>
        <form action="" onSubmit={onSubmitHandler}>
            <label htmlFor="Username">User Name</label><br/>
            <input type="text" onChange={usernameHandler}/><br/>
            {!nameValid && <p>Please enter a valid name</p>}
            <label htmlFor="email">Email</label><br/>
            <input type="email" onChange={emailHandler}/><br/>
            {!emailValid && <p>Please enter a valid email</p>}
            <label htmlFor="password">Password</label><br/>
            <input type="password"  onChange={passwordHandler}/><br/>
            {!passwordValid && <p>Password should have atleast one special character,an upercase letter and atleast 8 characters long</p>}
            <label htmlFor="password">Password Confirm</label><br/>
            <input type="password" placeholder="" onChange={passwordConHandler}/><br/>
            {!passwordConValid && <p>Passwords do not match</p>}
            <Button type='submit' > Sign UP</Button>
        </form>
       <Link to='/sign'><button type="button">Already have an account?Login</button></Link> 
    </div>
   )
}
export default Login;