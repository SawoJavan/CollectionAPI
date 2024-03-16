//import calesweat from '../..Maluku/calesweat.jpg';
import home from './Home.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export function Home(){
 

  return(
    <div className={home.homie}>
        <p className={home.pa}>Clothing your world</p>
        <Link to='/menu'><Button>Proceed to Menu</Button></Link> 
        <Link to='/order'><Button>Check Order Status</Button></Link>
        <Link to='/login'><Button>Login/signUp</Button></Link>  
    </div>
  )
}
//export default Home;