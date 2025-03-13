import mnu from './Menu.module.css';
import { getMenu } from '../ApiLoader';
import Menus from './Menus';
import { useLoaderData } from 'react-router-dom';
import {Box,Stack,Grid} from '@mui/material'


const Menu=()=>{
  const {data}=useLoaderData();
  console.log(data);
    return(
      <Grid container classsName={mnu.mens} columnSpacing={2} rowSpacing={8} sx={{margin:'5%'}} >
        
        {data.map((dat=>(<Grid item xs={12} sm={6} md={4} lg={3} > <Menus name={dat.name} 
        des={dat.description} 
        price={dat.price} 
        imag={dat.image} 
        size={dat.size} 
        id={dat._id} 
        key={dat._id}/></Grid>)))  }
        
      </Grid>
    )
  }

  export async function loader(){
       const menu=await getMenu();
       return menu;
  }
  export default Menu;