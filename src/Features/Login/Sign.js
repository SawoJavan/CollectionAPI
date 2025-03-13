//import Button from "../Button/Button";
import { useState } from "react";
import { loginUser } from "../ApiLoader";
import { useNavigate } from "react-router-dom";
import { Grid,Box,Typography,Container,Avatar,FormControlLabel,Button,Checkbox,TextField,Link} from '@mui/material';
//import {LockOutlinedIcon} from '@mui/icons-material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Sign=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [emailValid,setEmailValid]=useState(true);
    const [emailError, setEmailError] = useState('');
    const [Password,setPassword]=useState('');
    const [passwordValid,setPasswordValid]=useState(true);
    const [passwordError, setPasswordError] = useState('');
    const [loginValid,setLoginValid]=useState(true);
    const [loginError, setLoginError] = useState('');
  const emailHandler= (e)=>{
      setEmail(e.target.value); 
      setEmailValid(true) ;
      setEmailError('');
      setLoginValid(true) ; 
      setLoginError('');
 };
  const passwordHandler=(e)=>{
    setPassword(e.target.value); 
    setPasswordValid(true);
    setPasswordError('');
    setLoginValid(true) ;  
    setLoginError('');   
};
const isValidEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
};
  const handleSubmit= async(e)=>{
  e.preventDefault();
  if(email.trim().length===0|| !isValidEmail(email)){
    setEmailValid(false);
    setEmailError('Invalid email address');
    return;
  }
  if(Password.trim().length===0){
    setPasswordValid(false);
    setPasswordError('Password is required');
    return;
  }
    const loged=await loginUser({email,Password});
    console.log(loged);
   // console.log(loged.status);
   //navigate('/admin');
    if(loged=== 'Incorrect email or password'){
        setLoginValid(false);
        setLoginError('Incorrect email or password');
        return;
    };
    navigate('/admin',{state:{name:loged.data}});
 };
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
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={emailHandler}
          error={!emailValid}
            helperText={emailError}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={passwordHandler}
          error={!passwordValid}
            helperText={passwordError}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        {!loginValid && <p>Incorrect email or password</p>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 8, mb: 4 }} />
  </Container>
  )
}
export default Sign;
