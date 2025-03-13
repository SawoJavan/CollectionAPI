//import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState} from "react";
import { SignUser } from "../ApiLoader";
import { useNavigate } from "react-router-dom";
import { Grid,Box,Typography,Container,Avatar,FormControlLabel,Button,Checkbox,TextField} from '@mui/material';
//import {LockOutlinedIcon} from '@mui/icons-material';


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
      console.log(e.target.value);
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

   
  const handleSubmit= async(e)=>{
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
     if(Signed.status==='fail'){
      console.log('User already exists')
      return;
     }
     if(Signed.status===200){
      navigate('/sign')
     }
    console.log(Signed);
  })();

    
}
   return(
    <Container component="main" maxWidth="xs">
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Username"
                  required
                  fullWidth
                  id="Username"
                  label="User Name"
                  autoFocus
                  onChange={usernameHandler}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={emailHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={passwordHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirmpassword"
                  label="ConfirmPassword"
                  type="password"
                  id="Confirmpassword"
                  autoComplete="new-password"
                  onChange={passwordConHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end" >
              <Grid item>
                <Link to='/sign' variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Container>
   )
}

export default Login;


