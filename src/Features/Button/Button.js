import react from  'react';
import butto from './Button.module.css';
//import {Button} from '@mui/material';
const Button=(props)=>{
   return(
      <button className={butto.buto} onClick={props.onClick}>
        {props.children}
      </button>
   )
}
export default Button;