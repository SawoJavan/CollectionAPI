import react from  'react';
import butto from './Button.module.css';
const Button=(props)=>{
   return(
      <button className={butto.buto} onClick={props.onClick}>
        {props.children}
      </button>
   )
}
export default Button;