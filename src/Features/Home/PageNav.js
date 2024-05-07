import navs from './PageNav.module.css';
import CartIcon from '../Cart/CartIcon';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import {Box} from '@mui/material';
const PageNav=()=>{
 // const totalItem=3;
 const State=useSelector(state=>state);
 console.log(State);
   const totalItem=useSelector(state=>state.cart.TotalItems);
    console.log(totalItem);

     return(

        <header className={navs.page}>
            <nav>
            <h3> Javoo <span>Collection</span></h3>
                 <Link to='/cart' > 
                 <Box sx={{marginTop:'0.5rem'}}>
                 <span className={navs.icon}> <CartIcon /></span>
                  <span className={navs.badge}>{totalItem}</span>
                 </Box>
                    
                </Link>
            </nav>
        </header>
       
     )
};
export default PageNav;