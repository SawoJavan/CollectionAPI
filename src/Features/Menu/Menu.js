import mnu from './Menu.module.css';
import { getMenu } from '../ApiLoader';
import Menus from './Menus';
import { useLoaderData } from 'react-router-dom';


const Menu=()=>{
  const {data}=useLoaderData();
  console.log(data);
    return(
      <div classsName={mnu.mens}>
        {data.map((dat=><Menus name={dat.name} des={dat.description} price={dat.price} imag={dat.image} size={dat.size} id={dat._id} key={dat._id}/>))  }
      </div>
    )
  }

  export async function loader(){
       const menu=await getMenu();
       return menu;
  }
  export default Menu;