import navs from './PageNav.module.css';
import CartIcon from '../Cart/CartIcon';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import {  useSelector } from 'react-redux';
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
                    <Button>
                    <span className={navs.title}>Cart</span>
                    <span className={navs.icon}> <CartIcon /></span>
                    <span className={navs.badge}>{totalItem}</span>
                    </Button>

                </Link>
            </nav>
        </header>
       
     )
};
export default PageNav;