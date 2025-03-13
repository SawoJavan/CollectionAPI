//import navs from './PageNav.module.css';
//import CartIcon from '../Cart/CartIcon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import {Box,AppBar,Toolbar,IconButton,Menu,MenuList,MenuItem, Typography,List,ListItem,ListItemText,Stack} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import {MenuOutlined} from '@mui/icons-material';
// import Icon from '@material-ui/core/Icon';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   icon: {
//     fontSize: 30,
//     color: 'black',
//     float: 'left' 
//   },
// });
const PageNav=()=>{
 // const totalItem=3;
//  const classes = useStyles();
 const [anchorEl, setAnchorEl] = useState(null);
 const isMenuOpen = Boolean(anchorEl);

 const handleMenuClick = (event) => {
   setAnchorEl(anchorEl ? null : event.currentTarget);
 };

 const handleMenuClose = () => {
   setAnchorEl(null);
 };
 const State=useSelector(state=>state);
 console.log(State);
   const totalItem=useSelector(state=>state.cart.TotalItems);
    console.log(totalItem);

     return(

        <AppBar position='fixed' sx={{backgroundColor:'transparent', borderRadius:'0.5rem'}}>
            <Toolbar>
            
                      {/* <Icon className={classes.icon}>menu</Icon> */}
                      <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton edge="start" color="success" aria-label="menu" onClick={handleMenuClick}>
            {/* <Icon className={classes.icon}>menu</Icon> */}
            <MenuOutlined/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {['Home', 'OtherServices', 'Contact'].map((text) => (
              <MenuItem onClick={handleMenuClose} key={text}>
                <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black' }}>
                  {text}
                </Link>
              </MenuItem>
            ))}
          </Menu>

                     
                </Box>
              <Typography variant='subtitle1' sx={{flexGrow:1,color:'black'}} component='p' >Javo<Typography variant='h6' sx={{color:'green'}} component='span' >Collection</Typography></Typography>
              
                 <Box  >
                 <Stack gap={2} direction='row'>
                      <Box sx={{display:{xs:'none' ,sm:'block'}}}>
                      
                        {['Home', 'Admin', 'Contact'].map((text) => (
                          < Typography component='span' sx={{padding:'1rem',textDecoration:'none'}}>
                            <Link to={`/${text.toLowerCase()}`} >
                            <Typography  sx={{textDecoration:'none',fontSize:'0.8rem',color:'orange'}} component='span'>{text}</Typography>
                            </Link>
                            </Typography>
                            
                       
                        ))}
                    
                </Box> 
                 <Link to='/cart' > 
                   <Typography variant='subtitle1' component='span'> <ShoppingCart /></Typography>
                   <Typography variant='body2' component='span' sx={{transform: 'translate(-1px,-10px)',position:'absolute',backgroundColor:'greenyellow', borderRadius:'0.7rem'}}>{totalItem}</Typography>
                </Link> 
                </Stack>
                </Box>  

            </Toolbar>
        </AppBar>
       
     )
};
export default PageNav;